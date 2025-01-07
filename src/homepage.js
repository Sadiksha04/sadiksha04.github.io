import logo from './logo.svg';
import './App.css';
import myImage from './myImage.png';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function HomePage() {
  return (
    <section className='bodycontent'>
    <div className='Introduction'>
      <h1>Hey There!</h1>
      <h2>I am Sadiksha Duwadi</h2>
      <p>I am into Web Development</p>
      <Link to="/About">
      <button className='mybutton'>About Me</button>
      </Link>
    </div>

    <div className='myimage'>
      <img src={myImage}></img>
    </div>
  </section>
  

  );
}
export default HomePage;