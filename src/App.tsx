import React from "react"
import "./App.css"
import Inputter from "./Inputter_flex"

function App() {
  return (
    <div className='main'>
      <p>
        4자리 비밀번호 입력기 입니다. <br></br> 비밀번호를 입력해주세요
      </p>
      <Inputter></Inputter>
    </div>
  )
}

export default App
