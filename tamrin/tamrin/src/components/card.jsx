import { useEffect,memo } from "react"

const Card=({text,cb})=>{

  useEffect(()=>{
    console.log('child just rerendered ');
  })

  return(
    <h1>
      im child {text}
    </h1>
  )
}
export default memo(Card)