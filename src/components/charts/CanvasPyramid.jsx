import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;
let dataPoint;
let total;
const options = {
  animationEnabled: true,
  // title: {
  //   text: 'Sales via Advertisement',
  //   fontSize: 30,
  //   fontFamily: 'Lato',
  //   fontWeight: 'bold',
  // },
  legend: {
    horizontalAlign: 'right',
    verticalAlign: 'center',
    reversed: true,
    fontSize: 16,
    // maxHeight: 100,
    // maxWidth: 200,
  },
  data: [
    {
      type: 'pyramid',
      showInLegend: false,
      legendText: '{label}',
      indexLabel: '{label} - {y}',
      toolTipContent: '<b>{label}</b>: {y} <b>({percentage}%)</b>',
      dataPoints: [
        { label: 'Times of watching', y: 2433 },
        { label: 'Number of Likes', y: 1213 },
        { label: 'Number of subscribers', y: 578 },
        { label: 'Number of videos', y: 342 },
      ],
    },
  ],
};
//calculate percentage
dataPoint = options.data[0].dataPoints;
total = dataPoint[0].y;
for (var i = 0; i < dataPoint.length; i++) {
  if (i === 0) {
    options.data[0].dataPoints[i].percentage = 100;
  } else {
    options.data[0].dataPoints[i].percentage = (
      (dataPoint[i].y / total) *
      100
    ).toFixed(2);
  }
}
const CanvasPyramid = () => {
  return (
    <div>
      <CanvasJSChart
        options={options}
        /*onRef={ref => this.chart = ref}*/
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default CanvasPyramid;
