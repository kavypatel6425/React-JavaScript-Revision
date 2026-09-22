import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './CounterSlice'

function Counter() {
    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()
  return (
   <>
   <h1>Counter : {count}</h1>

   <button onClick={()=> dispatch(increment())}>+</button> <br />
   <button onClick={()=> dispatch(decrement())}>-</button> <br />
   <button onClick={()=> dispatch(reset())}>Reset</button>
   </>
  )
}

export default Counter