import './App.css';
import React, { useState, useEffect } from "react";
import { Bubble} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
import back from "./img/multicolor.jpg"
Chart.register(...registerables);
Chart.register(ArcElement);
let g = 1;
let l = 1;
let c = 1;
let m = 1;
const handleSubmit = (e) => {
  e.preventDefault();
};


function BarChart (props) 
{
  console.log(props.data);
  return (
    <div>
    <Bubble data={props.data} height={415} width={310} options={props.options}/>
    </div>)
}


const data = 
{
  datasets: [{
      label: 'Grapefruit',
      data: [{
        x: 10,
        y: 40,
        r: 40
      }
    ],
      backgroundColor: 'rgb(255, 99, 132)'
    },
  {
    label: 'Lime',
    
    data: [{
      x: 23,
      y: 37,
      r: 40
    }
    
  ],
    backgroundColor: 'rgb(105, 89, 175)'
  },
  {
    label: 'Coconut',
    data: [{
      x: 26,
      y: 33,
      r: 40
    }
  ],
    backgroundColor: 'rgb(249, 236, 61)'
  },{
    label: 'Mango',
    data: [{
      x: 40,
      y: 40,
      r: 40
    }
  ],
    backgroundColor: 'rgb(255, 128, 0)'
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
  }
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
      alert("Insert New Choice")
    }
  }
   
  function callingChart(inputText, value) {
    const newChartData = {
      ...chartData, // shallow copy chartData object
      datasets: chartData.datasets.slice(), // shallow copy datasets array
    }
  
    if (value === "lime") {
      const newl = [
        {
          x: chartData.datasets[1].data[0].x + l,
          y: chartData.datasets[1].data[0].y + l,
          r: chartData.datasets[1].data[0].r + l
        }
      ];
      newChartData.datasets.push({
        label: inputText,
        data: newl,
        backgroundColor: chartData.datasets[1].backgroundColor
      });
  
      l--;
    } else if (value === "coconut") {
      const newc = [
        {
          x: chartData.datasets[2].data[0].x + c,
          y: chartData.datasets[2].data[0].y + c,
          r: chartData.datasets[2].data[0].r + c
        }
      ];
  
      newChartData.datasets.push({
        label: inputText,
        data: newc,
        backgroundColor: chartData.datasets[2].backgroundColor
      });
  
      c--;
    } else if (value === "grapefruit") {
      const newg = [
        {
          x: chartData.datasets[0].data[0].x + g,
          y: chartData.datasets[0].data[0].y + g,
          r: chartData.datasets[0].data[0].r + g
        }
      ];
  
      newChartData.datasets.push({
        label: inputText,
        data: newg,
        backgroundColor: chartData.datasets[0].backgroundColor
      });
  
      g--;
    } else {
      const newm = [
        {
          x: chartData.datasets[3].data[0].x + m,
          y: chartData.datasets[3].data[0].y + m,
          r: chartData.datasets[3].data[0].r + m
        }
      ];
      newChartData.datasets.push({
        label: inputText,
        data: newm,
        backgroundColor: chartData.datasets[3].backgroundColor
      });
  
      m--;
    }
  
    setchartData(newChartData);
  
   
  }
    // useEffect(() => {
      
    // },[chartData]);
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
      <div className ="bubble">  
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
              <label style={{fontSize:24 , fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" , color:"#fcfffe"}}>
               UNDER : 
              <select value={value} onChange={handleChange} className="SELECT">
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
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
