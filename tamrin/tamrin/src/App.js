import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import Card from './components/card'
import axios from 'axios'
function App() {
  const [parentText,setParentText]=useState('parent')
  const [counter,setCouter]=useState(1)
  const [data,setData]=useState("")

  // const getName=()=>{
  //   return "something"
  // }
  const getName=useCallback(()=>{
    return "something"
  },[parentText])

  return (
    <div className="App">
      <input onChange={(e)=>{
        setData(e.target.value)
      }}/>
      <Card text={parentText} cb={getName} />
    </div>
  );
}

export default App;
