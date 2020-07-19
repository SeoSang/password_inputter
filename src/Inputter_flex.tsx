import React, { useState, MouseEvent, useCallback } from "react"
import "./Inputter_flex.css"

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
      setPassword(password + num.toString())
    },
    [password],
  )

  const erasePasswordOne = useCallback(
    (e: MouseEvent) => {
      setPassword(password.slice(0, password.length == 0 ? 0 : password.length - 1))
    },
    [password],
  )

  const erasePasswordAll = useCallback(
    (e: MouseEvent) => {
      setPassword("")
    },
    [password],
  )

  const shuffleNums = useCallback(
    (num: number) => (e: MouseEvent) => {
      // 0 ~ 9 섞어주기
      let nums_random = Array.from({ length: 10 }, (v, k) => k)
      setNums(shuffle(nums_random))
      handlePasswordChange(num)
    },
    [nums, password],
  )

  return (
    <>
      <input className='password-container' type='password' value={password}></input>
      <div className='inputter__flex'>
        {nums.map((n, i) => {
          const Basic_button = (
            <button
              className='num-button__flex spread-effect'
              value={n}
              onClick={shuffleNums(n)}
              key={i}
            >
              {n}
            </button>
          )
          return i == nums.length - 1 ? (
            <>
              <button className='num-button__flex spread-effect' onClick={erasePasswordAll}>
                X
              </button>
              {Basic_button}
            </>
          ) : (
            Basic_button
          )
        })}
        <button className='num-button__flex spread-effect' onClick={erasePasswordOne}>
          ←
        </button>
      </div>
    </>
  )
}

export default Inputter
