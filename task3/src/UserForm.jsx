import React, { useContext } from "react"
import Data from "./store/Data"


export const UserForm = ({ dataUser }) => {
  const data = useContext(Data) 
  const title = data.filter((e) => {
    if (e.id === dataUser.id) {
      return e.title
    }
  })
  try {
    return (<>
      <p className="post1Prime">{title[0].id + '-' + title[0].title}</p><br/>
    </>)
  }
  catch {
    console.log('nushud')
  }
}