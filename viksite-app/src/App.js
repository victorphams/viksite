
import waves from './waves.svg';
import './App.css';
import './index.css'

// import About from './about'
// import Newsletter from './newsletter'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client'



function App() {
 return (
  <BrowserRouter>
    {/* <nav>
      <Link to="/">Home</Link> IMPORTANT FOR KEEPING STATE OF THE WEBPAGE WHEN SWITCHING PAGES
      <Link to="/about">About</Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
   </Routes>
</BrowserRouter>
 )
}

function Home () {
  return (
    <body>
      <h1>gello</h1>
      <img src={waves} className="waves"/>
    </body>
    
  )
}

function About() {
  return (
      <body>
      <div class="main">
        <div class="info">
          <h1 class="title">Victor Pham</h1>
          <p class="subtitle">Oklahoma City, OK</p>
          <p class="subtitle">Heya, I'm Vik and love doing a lot of things! I'm a computer science graduate from the University of Oklahoma. </p>
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />

 
)

export default App;
