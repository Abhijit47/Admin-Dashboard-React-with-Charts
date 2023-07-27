import React, { useState } from 'react';
import './Navbar.css';
const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const [menuToggle, setMenuToggle] = useState('');

  const handleToggle = () => {
    // Approach: 1
    // if (menuToggle === '') {
    //   setMenuToggle('active');;
    // } else {
    //   setMenuToggle('');
    // }

    // Approach: 2
    menuToggle === '' ? setMenuToggle('active') : setMenuToggle('');
  };

  const handleSidebarToogle = (ev) => {
    if (sidebarToggle === '') {
      setSidebarToggle('sidebar__show');
      setTimeout(() => {
        ev.target.classList.add('sidebar__btn_left');
        ev.target.classList.add('fa-circle-chevron-left');
      }, 80);
    } else {
      setSidebarToggle('');
      setTimeout(() => {
        ev.target.classList.remove('sidebar__btn_left');
        ev.target.classList.remove('fa-circle-chevron-left');
      }, 80);
    }
  };

  return (
    <section className='navbar__section'>
      <i
        className='fa-solid fa-circle-chevron-right fa-3x sidebar_btn_arrow'
        onClick={handleSidebarToogle}></i>
      <nav className='navbar'>
        <div className='navbar__left'>
          <button className='menu' onClick={handleToggle}>
            Menu
            <i className='fa-solid fa-chevron-down'></i>
          </button>

          <ul className={`navbar__list ${menuToggle}`}>
            <li className='navbar__list_item'>
              <a className='navbar__link' href='#!'>
                Subscribers
              </a>
            </li>
            <li className='navbar__list_item'>
              <a className='navbar__link' href='#!'>
                Video management
              </a>
            </li>
            <li className='navbar__list_item'>
              <a className='navbar__link' href='#!'>
                Admin
              </a>
            </li>
          </ul>
        </div>

        <div className='navbar__right'>
          <div className='navbar__icon'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='navbar__icon'>
            <i className='fa-regular fa-clock'></i>
          </div>
          <div className='navbar__image'>
            <img
              className='user__avatar'
              src='https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_24.png'
              alt='avatar'
              loading='lazy'
              fetchpriority='high'
            />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
