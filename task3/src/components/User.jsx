import axios from "axios"
import React, { useContext, useState, useEffect } from "react"
import Data from "../store/Data"
import { UserForm } from "../UserForm"
import Comment from "./Comment"

const User = () => {
  const data = useContext(Data)
  const [isTrue, setIsTrue] = useState(false)
  const [isTrue2, setIsTrue2] = useState(false)
  // const [isTrue3, setIsTrue3] = useState()
  const [userId, setuserId] = useState()
  const [postId, setPostId] = useState()

  useEffect(() => { 
    axios.get(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(res => setuserId(res.data.id))
  }, [userId])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?${postId}`)
  }, [postId])
  
  const titleGenerator = (e) => {
    setuserId(e)
    setIsTrue(!isTrue)
    if (isTrue && isTrue2) {
      setIsTrue2(true)
    }
    else {
      setIsTrue2(false)
    }
  }
  const commentGenerator = () => {
    setIsTrue2 (true)
  }

  try {
    return <>
      <div className="post1">
        {data.map((e,index) => {
          return (<div key={index}>
            <div className='post1Prime' key={index} onClick={() => { titleGenerator(e) }}>
              {e.id + '-' + e.title}
            </div><br />
          </div>)
        })}
      </div>
      <div className="wrapper">
        <div onClick={commentGenerator}>
          {isTrue ? <UserForm dataUser = {userId} /> : <h2>choose a topic from The box</h2>}
        </div>
        <div className="comment" >
          {isTrue2 && <Comment titleComment={userId} /> }
        </div>
      </div>
    </>
  }
  catch {
    console.log('error')
  }
}

export default User