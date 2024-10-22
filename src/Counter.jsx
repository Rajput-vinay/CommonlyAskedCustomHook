
import React from 'react'
import { useCounter } from './hooks/useCounter'

const Counter = () => {
    const {count, increseCount,decreaseCount} = useCounter()
  return (
    <div>
        <div>Counter</div>
        <div>{count}</div>
        <button onClick={increseCount}>increseCount</button>
        <button onClick={decreaseCount}>decreaseCount</button>
    </div>
  )
}

export default Counter