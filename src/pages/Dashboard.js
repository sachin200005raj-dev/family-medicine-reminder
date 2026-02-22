
import React from "react";
import { Line } from "react-chartjs-2";

export default function Dashboard(){
 const data={labels:["Mon","Tue","Wed","Thu","Fri"],datasets:[{label:"Adherence %",data:[80,90,70,100,85]}]};
 return(
  <div>
   <h2>Dashboard</h2>
   <Line data={data}/>
  </div>
 );
}
