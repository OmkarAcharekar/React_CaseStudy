import './App.css';
import React, { useState} from "react";
import { Bubble} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import back from "./img/multicolor.jpg";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import BarChart from './components/Bubble'

Chart.register(...registerables);
Chart.register(ChartDataLabels);
Chart.register(ArcElement);

let g = 1,l = 1,c = 1, m = 1,mm = 1;

const handleSubmit = (e) => {
  e.preventDefault();
};

Chart.defaults.set('plugins.datalabels', {
  color: "rgb(82, 74, 74)"
});


const data = 
{ 
  
  datasets: 
  [
      {
        label: 'Development',
        data: [{
          x: 10,
          y: 40,
          r: 40
        }
      ],
      backgroundColor: ' #cc3300'
      },

    {
      label: 'Stock',
      
      data: [{
        x: 23,
        y: 37,
        r: 40
      }
      
    ],
      backgroundColor: 'rgb(105, 89, 175)'
    },
    {
      label: 'Product',
      data: [{
        x: 14,
        y: 34,
        r: 40
      }
    ],
      backgroundColor: "#00b33c"
    },{
      label: 'Sales',
      data: [{
        x: 40,
        y: 40,
        r: 40
      }
    ],
      backgroundColor: 'rgb(255, 128, 0)'
    }
    ,{
      label: 'Marketing',
      data: [{
        x: 35,
        y: 31,
        r: 40
      }
    ],
    
      backgroundColor: 'rgb(255, 99, 132)'
    }

  ]
};



const options = 
{
  scales: { x: { display: false }, y: { display: false}},
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display:false,
    },
    datalabels: {
      formatter: function(value, context) {
        return context.dataset.label;
      }
      , color: 'white',
      
      font: {
        weight: 'bold'
        
      },
    }
    
  },
  
}


function managevalue(chartData,index,increment){

  const newl = [
    {
      x: chartData.datasets[index].data[0].x + increment,
      y: chartData.datasets[index].data[0].y + increment,
      r: chartData.datasets[index].data[0].r + increment
    }
  ];

  return newl;


}


const  App = () => {

  const [value, setValue] = useState("lime");
  const [inputText, setInputText] = useState("");
  const [chartData, setchartData] = useState(data);
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
   
  };
  function sayHello() 
  {
    if(inputText && value){
    callingChart(inputText,value);
    }else{
      alert("✎ ADD NEW SUB TOPIC ✎")
    }
  }
   
  function callingChart(inputText, value) {
    const newChartData = {
      ...chartData,                      // shallow copy chartData object
      datasets: chartData.datasets.slice(), // shallow copy datasets array
    }

    if (value === "lime") {
      const newl =  managevalue(chartData,1,l);
      newChartData.datasets.push({
        label: inputText,
        data: newl,
        backgroundColor: chartData.datasets[1].backgroundColor
      });
  
      l++;
    } else if (value === "coconut") {
      const newc = managevalue(chartData,2,c);
      newChartData.datasets.push({
        label: inputText,
        data: newc,
        backgroundColor: chartData.datasets[2].backgroundColor
      });
  
      c++;
    } else if (value === "grapefruit") {
      const newg = managevalue(chartData,0,g);
  
      newChartData.datasets.push({
        label: inputText,
        data: newg,
        backgroundColor: chartData.datasets[0].backgroundColor
      });
  
      g++;
    } else if(value == "mango"){
      const newm = managevalue(chartData,3,m);
      newChartData.datasets.push({
        label: inputText,
        data: newm,
        backgroundColor: chartData.datasets[3].backgroundColor
      });
  
      m++;
    }else{

      const newma = managevalue(chartData,4,mm);
      newChartData.datasets.push({
        label: inputText,
        data: newma,
        backgroundColor: chartData.datasets[4].backgroundColor
      });
  
      mm++;

    }
  
    setchartData(newChartData);
  
   
  }


    
    function handleTextChange(text) {
    
      setInputText(text)
    
      if (text !== '') {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

   return (
    <div className="container">
      <div className ="bubble" style={{ backgroundImage: `url(${back})` }}>  
           <BarChart data={chartData} options={options}/>
      </div>
      <div className = "setting" style={{ backgroundImage: `url(${back})` }}>
          <div id="float-label">
            <input type = "text" id='search'  value={inputText}  onChange={(e) => handleTextChange(e.target.value)}/>
            <label   className={ isActive ? "Active" : ""}  htmlFor="email">
            NEW SUB TOPIC
          </label>
           </div>
            <div className='dropdown'>
              <form onSubmit={handleSubmit}>
              <label style={{fontSize:24 , fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" , color: "rgb(80, 74, 74)"}}>
               UNDER : 
              <select value={value} onChange={handleChange} className="SELECT">
                    <option value="grapefruit">Development</option>
                    <option value="lime">Stock</option>
                    <option value="coconut">Product</option>
                    <option value="mango">Sales</option>
                    <option value="car">Marketing</option>
              </select>
              </label>
              </form>
            </div>
           
            <button  id='submit' onClick={sayHello}>SUBMIT</button>
      </div>
      
    
    </div>
    
    
   
  );
}

export default App;
