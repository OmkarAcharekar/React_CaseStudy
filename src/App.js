import './App.css';
import React, { useState } from 'react';
import { Chart, registerables, ArcElement } from 'chart.js';
import back from './img/multicolor.jpg';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import BarChart from './components/Bubble';
import data from './data/data';
import options from './data/options';
import Set from './components/set';

Chart.register(...registerables);
Chart.register(ChartDataLabels);
Chart.register(ArcElement);

let stock = 1,
  development = 1,
  product = 1,
  sales = 1,
  marketing = 1;

const handleSubmit = (e) => {
  e.preventDefault();
};

Chart.defaults.set('plugins.datalabels', {
  color: 'rgb(82, 74, 74)',
});

function managevalue(chartData, index, increment) {
  const new_object = [
    {
      x: chartData.datasets[index].data[0].x + increment,
      y: chartData.datasets[index].data[0].y + increment,
      r: chartData.datasets[index].data[0].r + increment,
    },
  ];
  return new_object;
}

const App = () => {
  const [value, setValue] = useState('Stock');
  const [inputText, setInputText] = useState('');
  const [chartData, setchartData] = useState(data);
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  function sayHello() {
    if (inputText && value) {
      callingChart(inputText, value);
    } else {
      alert('✎ ADD NEW SUB TOPIC ✎');
    }
  }

  function callingChart(inputText, value) {
    const newChartData = {
      ...chartData, // shallow copy chartData object
      datasets: chartData.datasets.slice(), // shallow copy datasets array
    };

    if (value === 'Stock') {
      const new_stock = managevalue(chartData, 1, stock);
      newChartData.datasets.push({
        label: inputText,
        data: new_stock,
        backgroundColor: chartData.datasets[1].backgroundColor,
      });

      stock++;
    } else if (value === 'Product') {
      const new_product = managevalue(chartData, 2, product);
      newChartData.datasets.push({
        label: inputText,
        data: new_product,
        backgroundColor: chartData.datasets[2].backgroundColor,
      });

      product++;
    } else if (value === 'Development') {
      const new_development = managevalue(chartData, 0, development);

      newChartData.datasets.push({
        label: inputText,
        data: new_development,
        backgroundColor: chartData.datasets[0].backgroundColor,
      });

      development++;
    } else if (value === 'Sales') {
      const new_sales = managevalue(chartData, 3, sales);
      newChartData.datasets.push({
        label: inputText,
        data: new_sales,
        backgroundColor: chartData.datasets[3].backgroundColor,
      });

      sales++;
    } else {
      const new_marketing = managevalue(chartData, 4, marketing);
      newChartData.datasets.push({
        label: inputText,
        data: new_marketing,
        backgroundColor: chartData.datasets[4].backgroundColor,
      });

      marketing++;
    }

    setchartData(newChartData);
  }

  function handleTextChange(text) {
    setInputText(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className="container">
      <div className="bubble" style={{ backgroundImage: `url(${back})` }}>
        <BarChart data={chartData} options={options} />
      </div>
      <div className="setting" style={{ backgroundImage: `url(${back})` }}>
        <Set
          inputText={inputText}
          handleChange={handleChange}
          isActive={isActive}
          handleSubmit={handleSubmit}
          value={value}
          handleTextChange={handleTextChange}
          sayHello={sayHello}
        />
      </div>
    </div>
  );
};

export default App;
