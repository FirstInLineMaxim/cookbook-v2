import { useNavigate } from 'react-router-dom';
import './App.css';
// import Slider from './Slider/Slider';
// import { SliderImages } from './Slider/SliderImage';

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
    
    
  }

  return (
    <div className='App'>
      <h1 onClick={handleClick}>Go To Main</h1> 
      {/* <br />
      <br />
      <br />
      {/* <Slider slides={SliderImages}/> */}
    </div>
  );
}

export default App;
