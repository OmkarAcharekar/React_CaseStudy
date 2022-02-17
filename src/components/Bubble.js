import React from 'react'
import { Bubble} from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";
Chart.register(...registerables);
Chart.register(ArcElement);


function BarChart (props) 
{
  return (
    <div>
    <Bubble data={props.data} height={415} width={310} options={props.options} />
    </div>
    )

}

export default BarChart;




