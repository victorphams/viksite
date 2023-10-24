
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
      <Route path="/" element={<About />}/>
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
      <body class="bg-[url('/src/waves-desktop.svg')]">
      <div>
        <div class="h-screen flex items-center">
        
        <div class="main container items-center w-5/6 z-20 mb-10">
          <div class="info space-y-5">
            <h1 class="title font-bold text-3xl">Victor Pham</h1>
            <p class="subtitle">Oklahoma City, OK</p>
            <p class="text-xs tablet:text-sm laptop:text-base desktop:text-lg">vik is a visionary, a strategist, an entrepreneur, a philanthropist, a mentor, a pioneer, a leader, a researcher, a motivator, an artist, a trailblazer, an advocate, a thinker, a collaborator, an innovator, a mediator, a problem-solver, a storyteller, and a guardian. These descriptors illuminate the diverse dimensions of his character, showcasing his ability to adapt, inspire, and thrive in numerous arenas of his personal and professional endeavors.</p>
          
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

ReactDOM.createRoot(document.getElementById('root')).render(<App />

 
)

export default App;
