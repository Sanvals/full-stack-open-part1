const Header = (p) => {
  return (
    <>
      <h1>{p.text}</h1>
    </>
  )
}

const Content = (p) => {
  return (
    <>
    <p>
      {p.text} {p.exercises}
    </p></>
  )
}

const Total = (p) => {
  return (
    <>
    <p>Number of exercises {p.text}</p>
    </>
  )
}
const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <div>
      <Header text={course}/>
      <Content text={part1} exercises={exercises1}/>
      <Content text={part2} exercises={exercises2}/>
      <Content text={part3} exercises={exercises3}/>
      <Total text={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
