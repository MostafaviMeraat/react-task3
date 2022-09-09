import React,{ useContext, useEffect } from "react"
import Data from "../store/Data"
import UserForm from "./UserForm"


const User = () => {
  
  const data = useContext(Data)
  const formGenerator = (e) => {
    // {id, username, email, phone, website} = e
    const id = e.id
    const name = e.name
    const userName = e.username
    const email = e.email
    const phone = e.phone
    const web = e.website
    const add  = e.address.city
    const company = e.company.name
    return(<>
      <div>{phone}</div>
      
      </>)
  }
 
  return(
    <div>
      {formGenerator}
    </div>
  )
} 

export default User