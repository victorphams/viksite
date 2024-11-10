
import waves from './waves.svg';

import './App.css';
import './index.css'
import './about.css'

// import About from './about'
// import Newsletter from './newsletter'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import About from './about';


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


ReactDOM.createRoot(document.getElementById('root')).render(<App />

 
)

export default App;
