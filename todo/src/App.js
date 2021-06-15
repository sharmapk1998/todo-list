import React,{ useState } from 'react';
import "./App.css"; 

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([])

  const itemEvent = (event) =>{
    setInputList(event.target.value);
  };

  const listOfItems = ()=>{
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };

  return (
    <>
      <div className="div1">
      <div className="div2">
        <br />
        <h1> Todo List </h1>
        <br />
        <input 
        type="text" 
        placeholder="Add Item" 
        onChange={itemEvent} 
        value={inputList}/>
        <button onClick={listOfItems}>+</button>

        <ol>
          {/* <li>{inputList}</li> */}

          {Items.map( (itemval) => {
            return <li> {itemval} </li>
          })}
        </ol>
      </div>
      </div>
    </>
  );
}

export default App;