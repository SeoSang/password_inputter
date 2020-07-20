import React from "react"
import "./App.css"
import Inputter from "./Inputter"

function App() {
  return (
    <div className='main'>
      <h1>비밀번호 입력기</h1>
      <p>비밀번호를 입력해주세요</p>
      <Inputter></Inputter>
    </div>
  )
}

export default App
