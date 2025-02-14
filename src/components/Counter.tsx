import { useState } from "react"
import  classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.green}>
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
    </div>
  )
}