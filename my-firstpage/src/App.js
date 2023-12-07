import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  return (
    <>
    <Navbar title="TextUtils" about="About"/>
    <Textform heading="Enter a text to analyze below"/>
    </>
  );
}

export default App;
