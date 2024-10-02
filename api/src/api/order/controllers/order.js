const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51Pw5o4Ds8mgCb63kaHebxPjQC0wFqMBPRaXp2Enufe6p42zVdwuMoByJbouUn5DiD9uNnM2ExwJW0UFDvhCqjEOH00dQqCYalc"
);

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;

    const lineItems = await Promise.all(
      products.map(async (product) => {
        const item = await strapi
          .service("api::product.product")
          .findOne(product.id);

        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: product.quantity,
        };
      })
    );

    try {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        success_url: `https://organiclife.netlify.app/?success=true`,
        cancel_url: `https://organiclife.netlify.app/?success=false`,
        line_items: lineItems,
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ["card"],
      });

      await strapi.service("api::order.order").create({
        data: {
          products,
          stripeId: session.id,
        },
      });

      return { stripeSession: session };
    } catch (err) {
      console.error("Error creating Stripe session or order:", err);
      ctx.response.status = 500;
      return { error: "Internal Server Error", details: err.message };
    }
  },
}));
