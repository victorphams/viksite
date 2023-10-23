import React from "react";


const About = () => {
    return (
        <body>
        <div class="main">
          <div class="info">
            <h1 class="title">Victor Pham</h1>
            <p class="subtitle">Oklahoma City, OK</p>
            <p class="subtitle">Heya, I'm Vik and love doing a lot of things! As of October 2023, I'm interested in hiking, tennis, snowboarding, and video editing! I'm a computer science graduate from the University of Oklahoma. </p>
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