import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const newGood = () => {
    // console.log("Added good")
    setGood(good + 1)
  }

  const newNeutral = () => {
    // console.log("Added neutral")
    setNeutral(neutral + 1)
  }

  const newBad = () => {
    // console.log("Added bad")
    setBad(bad + 1)
  }

  let all = good + bad + neutral
  let average = (good - bad) / all
  let positive = (good) / all

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={newGood} text="good"/>
        <Button onClick={newNeutral} text="neutral"/>
        <Button onClick={newBad} text="bad"/>
      <h1>statistics</h1>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {all}</p>
        <p>average: {average}</p>
        <p>positive: {positive * 100} %</p>
    </div>
  )
}

export default App