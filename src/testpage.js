import React from "react";
import './App.css';
import waves from './waves.svg';

function TestPage() {
  return (
          <body class="bg-[url('/src/waves-desktop.svg')]">
          <div>
            <div class="h-screen flex items-center">
            
            <div class="main container items-center w-5/6 z-20 mb-10">
              <div class="info space-y-5">
                <h1 class="title font-bold text-3xl">Victor Pham</h1>
                <p class="subtitle">Oklahoma City, OK</p>
                <p class="text-xs tablet:text-sm laptop:text-base desktop:text-lg"> awesome test page</p>
              
                <div class="links">
                  <a href='mailto:victor.phamk@gmail.com'>email</a><br></br>
                  <br></br>
                  <a href='https://github.com/victorphams' target="_blank">github</a><br></br>
                  <br></br>
                  <a href='https://linkedin.com/in/victorphams' target="_blank">linkedin</a><br></br>
                  <br></br>
              </div>
            </div>


        </div></div>

              {/* <img src={waves} class="waves z-10 absolute bottom-0"/> */}
          </div>
          
        </body>

          );
}
    
export default TestPage;