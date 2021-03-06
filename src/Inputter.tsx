import React, { useState, MouseEvent, useCallback } from "react"
import "./Inputter.css"

const PASSWORD_MAX_LENGTH = 8 // 비밀번호 입력길이 제한 설정

const shuffle = (nums: number[]) => {
  // 배열 섞는 함수
  let num_length = nums.length
  while (num_length) {
    console.log("here")
    let random_index = Math.floor(num_length-- * Math.random())
    let temp = nums[random_index]
    nums[random_index] = nums[num_length]
    nums[num_length] = temp
  }
  return nums
}

const Inputter = () => {
  let nums_init = Array.from({ length: 10 }, (v, k) => k)
  const [nums, setNums] = useState(nums_init)
  const [password, setPassword] = useState("")

  const handlePasswordChange = useCallback(
    (num) => {
      if (password.length === PASSWORD_MAX_LENGTH) {
        return
      }
      setPassword(password + num.toString())
    },
    [password],
  )

  const erasePasswordOne = useCallback(
    (e: MouseEvent) => {
      setPassword(password.slice(0, password.length === 0 ? 0 : password.length - 1))
    },
    [password],
  )

  const erasePasswordAll = useCallback((e: MouseEvent) => {
    setPassword("")
  }, [])

  const shuffleNums = useCallback(
    (num: number) => (e: MouseEvent) => {
      // 0 ~ 9 섞어주기
      let nums_random = Array.from({ length: 10 }, (v, k) => k) // 이 배열을 변경해 입력문자 변경 가능
      setNums(shuffle(nums_random))
      handlePasswordChange(num)
    },
    [handlePasswordChange],
  )

  const onClickSubmitButton = (e: MouseEvent) => {
    // 비밀번호 제출
    if (password.length === 0) {
      alert("비밀번호를 입력 후 눌러주세요!")
    } else {
      alert(password + "을 입력하셨습니다.")
    }
  }

  return (
    <>
      <input className='password-container' type='password' value={password}></input>
      <div className='inputter__flex'>
        {nums.map((n, i) => {
          const Basic_button = (
            <button
              className='num-button__flex spread-effect fantasy-font__2_3rem'
              value={n}
              onClick={shuffleNums(n)}
              key={i}
            >
              {n}
            </button>
          )
          return i == nums.length - 1 ? (
            <>
              <button
                className='num-button__flex spread-effect fantasy-font__2_3rem'
                onClick={erasePasswordAll}
              >
                X
              </button>
              {Basic_button}
            </>
          ) : (
            Basic_button
          )
        })}
        <button
          className='num-button__flex spread-effect fantasy-font__2_3rem'
          onClick={erasePasswordOne}
        >
          ←
        </button>
      </div>
      <div>
        <button type='submit' className='submit-button' onClick={onClickSubmitButton}>
          Submit
        </button>
      </div>
    </>
  )
}

export default Inputter
