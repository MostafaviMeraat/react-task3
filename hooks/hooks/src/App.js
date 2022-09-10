import './App.css';
import React, { useState, useEffect, useMemo, useLayoutEffect, useTransition, useId, useReducer } from 'react'

function App() {

  // useReducer
  // const ACTIONS = { //this is mainly bec of not hard coding things
  //   INCREMENT: 'increment',
  //   DECREMENT: 'decrement'
  // }

  // functions

  // useTransition
  // function bigArr(e) {
  //   setValue(e.target.value)
  //   startTransition(() => {
  //   let temp = 0
  //   const myArr = []
  //   for(let i=0;i<20000;i++){
  //    temp++
  //    myArr.push(temp)
  //   }
  //   setArr(myArr)})
  // }

  // useEffect
  // function slowFunction() {
  //     for(let i=0;i<2000;i++){
  //       console.log('hey')
  //     }
  //     setValue(value*2)
  //   }

  // useReducer
  // const increment = () => {
  //   dispatch( {type: ACTIONS.INCREMENT})
  // }
  // const decrement = () => {
  //   dispatch({ type: ACTIONS.DECREMENT})
  // }
  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case ACTIONS.INCREMENT:
  //       return { count: state.count + 1 }
  //     case ACTIONS.DECREMENT:
  //       return { count: state.count - 1 }
  //     default:
  //       return state
  //   }
  // }

  // useMemo
  // const [value,setValue] = useState(1)
  // const [dark, setDark] = useState(false)
  // //without use memo
  // // const doubleNumber = slowFunction(value)
  // //with use memo
  // const doubleNumber = useMemo(() =>
  // {return slowFunction(value)},[value])
  // const themeStyle = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // }

  // // useEffect
  // const [value,setValue] = useState('')
  // useEffect(()=>{
  //   console.log('hi')
  //   return () => {
  //     console.log('return first')
  //   }
  // },[value])

  useLayoutEffect
  const [value, setValue] = useState(0)
  const number = useLayoutEffect(()=>{
   console.log(value)
  },[value])

  // useTransition
  // const [arr,setArr] = useState([1])
  // const [value, setValue] = useState('hey')
  // const [isPending, startTransition] = useTransition()

  // // useID
  // const id = useId()

  // useReducer
  // const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div className="App">

      {/* useMemo */}
      {/* <input type="number" value={value} onChange={e=>setValue(e.target.value)} />
    <button onClick={() => {setDark(prevDark=>!prevDark)}}>Change Theme</button>
    <div style={themeStyle} className='div'>{doubleNumber}</div> */}


      {/* useEffect */}
      {/* <button onClick={() => setValue('buttom 1')}>buttom 1</button>
      <button onClick={() => setValue('buttom 2')}>buttom 2</button>
      <h1>{value}</h1> */}

      {/* useLayoutEffect */}
      <button onClick={()=>{setValue(value+1)}}>INC</button>
      <h1>{value}</h1>

      {/* useTransition */}
      {/* <input onChange={bigArr} />
      <h2>{value}</h2>
      {arr.map((item,index)=>{
      return(<>
        <p key={index}>{item}</p>
      </>)
     })} */}

      {/* useId */}
      {/* <lable htmlFor={id}>Check me (useId)</lable>
      <input type='checkbox' id={id} />
      <br />
      <lable>Check me</lable>
      <input type='checkbox' /> */}

      {/* useReducer */}
      {/* <div>
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div> */}

    </div>
  );

}

export default App;
