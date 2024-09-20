import React from 'react';
import './About.scss';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
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
            <div>
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
            <img src='../images/about1.jpg' alt='' />
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
    </section>
  );
};

export default About;
