import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [actData, setActData] =useState("")
  // var actData=false;
  useEffect(async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos")
    console.log(res)
    setActData(res.data)
    // actData = 
    console.log(actData)
  },[])

  // setTimeout(() => {
  //   console.log(actData);
  // },1000)


  return (
    <div>
      <h1>This is a card component.</h1>
      <Card title = {actData?actData[0].title: "Loading..."}/>
    </div>
    // <div>{actData[0].title}</div>
  )
}

export default App