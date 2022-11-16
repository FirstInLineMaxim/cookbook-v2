import { useNavigate } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import TheDevs from "./TheDevs/TheDevs";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <div className="App">
      <h1 onClick={handleClick}>Go To Main</h1>

      <TheDevs />
      <Footer />
    </div>
  );
}

export default App;
