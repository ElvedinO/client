import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/5119198/pexels-photo-5119198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Sale
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/5885998/pexels-photo-5885998.jpeg?auto=compress&cs=tinysrgb&w=1260'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/6310988/pexels-photo-6310988.jpeg?auto=compress&cs=tinysrgb&w=1260'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/1453008/pexels-photo-1453008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/776219/pexels-photo-776219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
