import React, { useState } from "react"
import "./Inputter_flex.css"

const shuffle = (nums: number[]) => {
  let num_length = nums.length
  while (num_length) {
    let random_index = Math.floor(num_length-- * Math.random())
    let temp = nums[random_index]
    nums[random_index] = nums[num_length]
    nums[num_length] = temp
    num_length -= 1
  }
  return
}

const Inputter = () => {
  let nums_init = Array.from({ length: 10 }, (v, k) => k)
  shuffle(nums_init)
  const [nums, setNums] = useState(nums_init)

  return (
    <div className='inputter__flex'>
      {nums.map((n, i) => (
        <button className='num-button__flex' value={n}>
          {n}
        </button>
      ))}
    </div>
  )
}

export default Inputter
