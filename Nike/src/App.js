import './App.css';
import Msg from './Msg';

function App() {
  return (
    <div className='main'>
      <nav className='navbar1'>
        <div className="logo">
          <img src="logo.png" height="20px" width="20px" alt="logo" />
        </div>
        <div className="details">
            <a href="#home">Find a store</a><span className='seperator'>|</span>
            <a href="#home">Help</a><span className='seperator'>|</span>
            <a href="#home">Join us</a><span className='seperator'>|</span>
            <a href="#home">Sign In</a>
        </div>
      </nav>
      <nav className="navbar2">
        <div className="logo">
          <img src="logo2.png" height="50px" width="75px" alt="logo" />
        </div>
        <div className="links">
            <a href="#home">New & Featured</a>
            <a href="#home">Mens</a>
            <a href="#home">Womens</a>
            <a href="#home">Kids</a>
            <a href="#home">Sale</a>
            <a href="#home">Customize</a>
            <a href="#home">SNKRS</a>
        </div>
        <div className="search">
          <input type="text" placeholder="Search for items"/>
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
      </nav>
      <Msg/>
    </div>
  );
}

export default App;
