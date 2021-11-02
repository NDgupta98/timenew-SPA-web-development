import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from "./Sdata.json"




ReactDOM.render(
  <><h3 className="h3">TIMES-NEW</h3>
    <marquee behavior="scroll" scrollamount="10" direction="Right" loop="" className="h"><h1 >TODAY's TOP LATEST NEWS</h1></marquee>
    {data.map((val) => {
      return (
        
        <div className="card">
          
          <div className="title">
            <div className="latest">
              <h2><center>Latest News</center></h2>
            </div>
            
            <h4><center>{val.title}</center></h4>
            
            <a href={val.link} target="_blank">
            <center><button>Watch now</button></center>
            </a>
          </div>
        </div>
        

      )
    })
    }


    <App />
  </>,
  document.getElementById('root')
);


