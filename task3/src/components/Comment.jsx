import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Data from '../store/Data'

const Comment = ({ titleComment }) => {
  // console.log(titleComment)
  const [personInfo, setPersonInfo] = useState({})

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${titleComment.userId}`)
    .then(res => setPersonInfo(res))
  }, [])
  console.log(personInfo.data)

try{
  return (<div className='divComment'>
      {personInfo.data.map((e) => {
        return (<>
          <p><span>{e.id + '-'}</span><span>Name: </span>{e.name}</p>
          <p><span>E-Mail: </span>{e.email}</p>
          <p><span>Comment: </span>{e.body}</p><br /><hr />
      </>)})}
  </div>)}
  catch {
    console.log('nashud 2')
  }
}

export default Comment
