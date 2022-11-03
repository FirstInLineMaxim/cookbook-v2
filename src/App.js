import { useEffect, useState} from "react" ;
import logo from './logo.svg';
import './App.css';
import useContentful from "./useContentful";
import menuItem from "./useContentful"


function App() {
  const [authors, setAuthors] = useState([]);
  let info = getAuthors();
const { getAuthors } = useContentful();
console.log(menuItem)
useEffect(() => {
getAuthors()/*.then((response) => console.log(response))*/

}, [])
  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Worlds! Heh</h3>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
