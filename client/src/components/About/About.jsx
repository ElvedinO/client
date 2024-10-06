import React from 'react';
import './About.scss';
import CountUp from 'react-countup';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useInView } from 'react-intersection-observer';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';

const images = [
  {
    imgURL:
      'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-01-ok9t8tqfmw86q6a5qjwdw95uon8m0ro8dme893gop4.jpg',
    imgAlt: 'img-1',
  },
  {
    imgURL:
      'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg',
    imgAlt: 'img-2',
  },
  {
    imgURL:
      'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg',
    imgAlt: 'img-3',
  },
  {
    imgURL:
      'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg',
    imgAlt: 'img-4',
  },
];

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className='about'>
      <div className='top'>
        <h1 className='title'>About Us</h1>
      </div>
      <div className='wrapper'>
        <div className='bottom'>
          <img className='leaf' src='../images/basil-leaf.png' alt='' />
          <div className='bot-wrap'>
            <div className='bot-left'>
              <h1>We Are Your Favourite Store.</h1>
              <p>
                At our store, we believe in the power of nature and the
                importance of healthy living. Our commitment to providing
                high-quality organic products reflects our passion for
                sustainable practices and customer well-being. We meticulously
                source our fresh fruits, vegetables, and legumes, ensuring every
                product is crafted with care and integrity.
                <br />
                <br />
                Our team is dedicated to creating a seamless shopping
                experience, from our user-friendly mobile app to our responsive
                customer service. We prioritize your health and satisfaction,
                striving to offer only the best in organic foods. Join us on
                this journey toward a healthier lifestyle, and discover the true
                essence of organic living with us.
              </p>
            </div>
            <div className='bot-right'>
              <img src='../images/about1.jpg' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='numbers' ref={ref}>
        <div className='num-wrap'>
          <h1>
            Numbers Speak <br /> For Themselves!
          </h1>
          <div className='number'>
            {inView ? <CountUp start={4800} end={5000} duration={5} /> : null} +
            <p>Curated Products</p>
          </div>
          <div className='number'>
            {inView ? <CountUp start={75} end={95} duration={5} /> : null} %
            <p>Customer Satisfaction</p>
          </div>
          <div className='number'>
            {inView ? <CountUp start={30} end={40} duration={5} /> : null} +
            <p>Product Categories</p>
          </div>
        </div>
      </div>
      <div className='certified'>
        <img className='leaves' src='./images/hero-leaves.png' alt='' />
        <div className='wrapper'>
          <div className='left'>
            <div className='review'>
              <div className='overlay'></div>
              <div className='images'>
                <Slider>
                  {images.map((image, index) => {
                    return (
                      <img key={index} src={image.imgURL} alt={image.imgAlt} />
                    );
                  })}
                </Slider>
              </div>
              <div className='stars'>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p>
                I've been shopping here for months, and the quality of the
                organic products is unmatched. The fruits and vegetables are
                always fresh, and I love knowing everything is sustainably
                sourced. It's comforting to trust where my food comes from, and
                it’s making a real difference in my health.
              </p>
              <div className='cust-img'>
                <img src='./images/client1.png' alt='' />
                <p>Mila Kuris</p>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='cert'>
              <img
                src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-badge-freeimg.png'
                alt=''
              />
              <div>
                <h1>Certified Products</h1>
                <p>
                  We are certified organic, ensuring the highest quality for
                  you.
                </p>
              </div>
            </div>
            <h1>We Deal With Various Quality Organic Products!</h1>
            <img className='leaf' src='./images/hero-leaf.png' alt='' />
            <div className='offers'>
              <div className='off-left'>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Fresh fruits</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Dry fruits</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Fresh vegetables</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Dried vegetables</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Dried vegetables</span>
                </div>
              </div>
              <div className='off-right'>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Beauty products</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Milk products</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Organic honey</span>
                </div>
                <div>
                  <CheckCircleOutlineIcon className='check' />
                  <span>Organic tea</span>
                </div>
              </div>
            </div>
            <button>
              <ShoppingCartOutliedIcon />
              START SHOPPING
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
