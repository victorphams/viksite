import React from "react";
import './App.css';
import waves from './waves.svg';

function About() {
    return (
        <body>
        <div class="main">
          <div class="info">
            <h1 class="title">Victor Pham</h1>
            <p class="subtitle">Oklahoma City, OK</p>
            <p class="subtitle">hell ye</p>
          </div>
  
          <div class="midsection"></div>
  
          <div class="links">
            <a href='mailto:victor.phamk@gmail.com'>email</a><br></br>
            <br></br>
            <a href='https://github.com/victorphams' target="_blank">github</a><br></br>
            <br></br>
            <a href='https://linkedin.com/in/victorphams' target="_blank">linkedin</a><br></br>
            <br></br>
            
            
          </div>
  
          
        </div>
        <img src={waves} className="waves"/>
      </body>
  
  );
}
    
export default About;