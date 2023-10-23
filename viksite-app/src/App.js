
import waves from './waves.svg';
import './App.css';
import './index.css'

function App() {
  return (
    <body>
      <div class="main">
        <div class="info">
          <h1 class="title">Victor Pham</h1>
          <p class="subtitle">Oklahoma City, OK</p>
          <p class="subtitle">Student @ University of Oklahoma</p>
        </div>

        <div class="midsection"></div>

        <div class="links">
          <a href='mailto:victor.phamk@gmail.com'>email</a><br></br>
          <br></br>
          <a href='https://github.com/victorphams' target="_blank">github</a><br></br>
          <br></br>
          <a href='https://linkedin.com/in/victorphams' target="_blank">linkedin</a><br></br>
          <br></br>
          <a href='https://instagram.com/victorphams' target="_blank">instagram</a>
          
        </div>

        
      </div>
      <img src={waves} className="waves"/>
    </body>
  
  );
}

export default App;
