import './App.css';

import React, { useState, useEffect } from "react";
import { Bubble} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
Chart.register(...registerables);
Chart.register(ArcElement);

const handleSubmit = (e) => {
  e.preventDefault();
};
function BarChart (props)  {
  return (
    <div>
    <Bubble data={props.data} height={390} width={300} options={props.options}/>
    </div>
  )
}

const data = {
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
    backgroundColor: 'rgb(0, 152, 102)'
  },
  {
    label: 'Coconut',
    data: [{
      x: 26,
      y: 33,
      r: 40
    }
  ],
    backgroundColor: 'rgb(0, 153, 0)'
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

const options = {
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
  const handleChange = (e) => {
    setValue(e.target.value);
   
  };

  function sayHello() {
    if(inputText && value){
  
    callingChart(inputText,value);
    }else{
      alert("Insert New Choice")
    }


    }

   function callingChart(inputText,value){


        data.datasets.push({ label: inputText,
        data: [{
          x: 40,
          y: 40,
          r: 40
        }
      ],
        backgroundColor: 'rgb(255, 128, 0)'})

        console.log(data.datasets.length)

        // useEffect(() => {
        //   App();
        // });

        





    }



  return (
    <div className="container">
      <div className ="bubble">
       
      <BarChart data={data} options={options}/>
      </div>
      <div className = "setting">
            <input type = "text" id='search' placeholder='                  NEW SUB TOPIC'  value={inputText}  onChange={(e) => setInputText(e.target.value)}/>

            <div className='dropdown'>
              <form onSubmit={handleSubmit}>
                <label style={{fontSize:30 , fontFamily:"Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" , color:"#fcfffe"}}>
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
