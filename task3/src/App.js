import './App.css';
import Loading from './components/Loading';
import React,{useContext,useState,useEffect} from 'react';
import Data from './store/Data';
import User from './components/User';
import axios from 'axios';


function App() {

  let users = useContext(Data)
  const [list,setList] = useState([])
  const [check, setCheck] = useState(false)
  const result = useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setList(data))
    .then(setCheck(true))
  }
  ,[])

  // useEffect(()=>{
  //   setCheck(true)
  //   console.log('true')
  // },[])

  users = list
  return (
    <div className="App">
        {/* {check ? <Data.Provider value={users}>
          <User />
        </Data.Provider> : 
        <Loading />} */}
        <Data.Provider value={users} >
          {check ? <User /> : <Loading />}
          {check ? <Loading /> : <User />}
        </Data.Provider>
    </div>
  );
  
}

export default App;
