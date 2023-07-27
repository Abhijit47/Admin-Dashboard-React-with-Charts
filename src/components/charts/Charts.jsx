import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Watch } from 'react-loader-spinner';
import chartCardsData from './charts_card_data.json';
import './Charts.css';
import CanvasPyramid from './CanvasPyramid';

// Dynamic api data
// https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly

const options1 = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  // yaxis: {
  //   title: {
  //     text: '$ (thousands)',
  //   },
  // },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return '$ ' + val + ' thousands';
      },
    },
  },
};
const series1 = [
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  },
];

const chartOptions2 = {
  chart: {
    type: 'donut',
  },
  labels: ['Income', 'Sales', 'Salary', 'Miscellaneous'],
  plotOptions: {
    pie: {
      customScale: 0.8,
    },
  },
};

const series2 = [223600, 726650, 72650, 37980];

const Charts = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, 2350);

  return (
    <section className='charts__section'>
      {isLoading ? (
        <Watch
          height='80'
          width='80'
          radius='48'
          color='#4fa94d'
          ariaLabel='watch-loading'
          wrapperStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          wrapperClassName=''
          visible={true}
        />
      ) : (
        <div className='charts'>
          <div className='chart__1'>
            <h1 className='chart__1_heading'>Daily Reports</h1>
            <Chart options={options1} series={series1} type='bar' />
          </div>
          <div className='chart__2'>
            <h1 className='chart__2_heading'>Annual Reports</h1>
            <Chart options={chartOptions2} series={series2} type='donut' />
          </div>
          <div className='chart__3'>
            <h1 className='chart__3_heading'>Sales via Advertisement</h1>
            <CanvasPyramid />
          </div>
          <div className='chart__4'>
            {chartCardsData.map((chartCard, i) => {
              const { cardId, cardHeader, cardPrice } = chartCard;
              return (
                <div className={`chart__4_info_${cardId}`} key={i}>
                  <h4>{cardHeader}</h4>
                  <p>{`$${cardPrice}`}</p>
                </div>
              );
            })}
            {/* <div className='chart__4_info_1'>
            <h4>Income</h4>
            <p>$223,600</p>
          </div>
          <div className='chart__4_info_2'>
            <h4>Sales</h4>
            <p>$726,650</p>
          </div>
          <div className='chart__4_info_3'>
            <h4>Salary</h4>
            <p>$72,650</p>
          </div>
          <div className='chart__4_info_4'>
            <h4>Miscellaneous</h4>
            <p>$37,980</p>
          </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Charts;
