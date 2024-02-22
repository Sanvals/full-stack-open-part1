import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({p : {good, neutral, bad}}) => {
  let all = good + neutral + bad
  let average = (good - bad) / all
  let positive = (good) / all
  
  return (
    <>
    <p>good: {good}</p>
    <p>neutral: {neutral}</p>
    <p>bad: {bad}</p>
    <p>average: {average}</p>
    <p>positive: {positive} %</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const newGood = () => setGood(good + 1)
  const newNeutral = () => setNeutral(neutral + 1)
  const newBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
        <Button onClick={newGood} text="good"/>
        <Button onClick={newNeutral} text="neutral"/>
        <Button onClick={newBad} text="bad"/>
      <h1>statistics</h1>
        <Statistics p={{good, neutral, bad}}/>
    </div>
  )
}

export default App