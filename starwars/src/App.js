import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import Character from "./components/Character"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  let [char, updateChar] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  useEffect(() => {
    axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
            //console.log(response.data.results);
            updateChar(response.data.results);
            
        })
        .catch(err => {
            console.log(err);
        });
    
}, []);
//console.log(char);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
        {<Character character={char} key={char.timeStamp}/>
          // char.map((individual)=>{
          //   //console.log(individual);
          //   return (<Character character={individual}/>);
          // })
        }
        </div>
    </div>
  );
}

export default App;
