import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Cards from '../components/cards/Cards';
import Charts from '../components/charts/Charts';
import '../style.css';
const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState('');

  return (
    <main className='main__container'>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Header />
      <Cards />
      <Charts />
    </main>
  );
};

export default Dashboard;
