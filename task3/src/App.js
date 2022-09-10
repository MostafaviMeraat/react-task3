import './App.css';
import React,{useContext,useState,useEffect} from 'react';
import Data from './store/Data';
import User from './components/User';
import axios from 'axios';


function App() {

  const [list,setList] = useState([])
  const [check, setCheck] = useState(false)
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setList(res.data))
      .then(setCheck(true))
  }
  ,[])

  return (
    <div className="App">
      <Data.Provider value={list}>
      {check ? <User /> : 'Loading...'}
      </Data.Provider>
    </div>
  );
  
}

export default App;
