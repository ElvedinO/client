import React from 'react';
import './About.scss';
import CountUp from 'react-countup';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useInView } from 'react-intersection-observer';
import ShoppingCartOutliedIcon from '@mui/icons-material/ShoppingCartOutlined';

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
                Tuas quisquam quo gravida proident harum, aptent ligula anim
                consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
                potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
                penatibus quasi! Nostra tenetur dignissimos ultrices natus
                distinctio ultrices consequuntur numqu.
                <br />
                <br />
                Officiis fuga harum porro et? Similique rhoncus atque! Netus
                blanditiis provident nunc posuere. Rem sequi, commodo, lorem
                tellus elit, hic sem tenetur anim amet quas, malesuada proident
                platea corrupti expedita.
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
            {inView ? <CountUp start={700} end={800} duration={5} /> : null} +
            <p>Curated Products</p>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                vero quasi dolores quibusdam saepe praesentium, laudantium
                doloremque consequatur minima accusamus nobis, voluptatibus,
                alias beatae dolorum soluta et? Facere, repudiandae suscipit?
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, magnam.
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
