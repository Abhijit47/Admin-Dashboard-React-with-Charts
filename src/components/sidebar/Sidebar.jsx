import React from 'react';
import sidebarListData from './sidebar_list_data.json';
import './Sidebar.css';

const Sidebar = ({ sidebarToggle }) => {
  return (
    <aside className={`sidebar__section ${sidebarToggle}`}>
      <div className='sidebar__header'>
        <h1>Codersup</h1>
        <div className='sidenav__header_icon'>
          <i className='fa-solid fa-home-lg fa-2x'></i>
        </div>
      </div>

      <div className='sidebar__content'>
        <h3 className='sidebar__list_heading'>MNG</h3>
        <ul className='sidebar__list'>
          {sidebarListData.map((sidebarList, i) => {
            const { listName, listIconType, listIconName, listIconSize } =
              sidebarList;

            return (
              <li className='sidebar__list_item' key={i}>
                <i
                  className={`${listIconType} ${listIconName} ${listIconSize}`}></i>
                <a href='#!' className='sidebar__links'>
                  {listName}
                </a>
              </li>
            );
          })}
        </ul>
        <h3 className='sidebar__list_heading'>Payroll</h3>
        <ul className='sidebar__list'>
          <li className='sidebar__list_item'>
            <i className='fa-solid fa-money-bill-1-wave fa-2x'></i>
            <a href='#!' className='sidebar__links'>
              Payroll
            </a>
          </li>
          <li className='sidebar__list_item'>
            <i className='fa-brands fa-google-wallet fa-2x'></i>
            <a href='#!' className='sidebar__links'>
              G-Pay
            </a>
          </li>
        </ul>
      </div>

      <div className='sidebar__footer'>
        <div className='sidebar__btn'>
          <h4>Log out</h4>
        </div>
        <div className='sidebar__btn_icon'>
          <i className='fa-solid fa-arrow-right-from-bracket fa-2x'></i>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
