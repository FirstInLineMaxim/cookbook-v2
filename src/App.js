import { useEffect, useState} from "react" ;
import logo from './logo.svg';
import './App.css';
import useContentful from "./useContentful";



function App() {
  const [authors, setAuthors] = useState([]);
 
const { getAuthors } = useContentful();

function alltitle(x, s) {
  let f = ""
for (let i = 0; i<x.length;i++){
f = x[i].title
return f
}
}

useEffect(() => {
getAuthors().then((response) => setAuthors(response))


}, [])

let d = authors
console.log(d)
const list = alltitle(d)


  return (
    <div className="App">
      <header className="App-header">
        <h3>Hello Worlds! Heh</h3>
        <h2>{list}</h2>
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
