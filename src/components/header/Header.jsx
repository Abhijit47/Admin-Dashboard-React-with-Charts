import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <section className='header__section'>
      <div className='main__content'>
        <div className='header__image'>
          <img
            src='https://cdn.jsdelivr.net/gh/alohe/memojis/png/notion_15.png'
            alt='images'
            loading='lazy'
            width='35px'
            fetchpriority='high'
          />
        </div>
        <div className='header__info'>
          <h1>Hello coders</h1>
          <p>Welcome to your Admin dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
