import { useNavigate } from "react-router-dom";

import "./App.css";

import TheDevs from "./TheDevs";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="App">
      <h1 onClick={handleClick}>Go To Main</h1>

      <TheDevs />
    </div>
  );
}

export default App;
