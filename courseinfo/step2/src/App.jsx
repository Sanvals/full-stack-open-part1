const Header = (p) => {
  return (
    <>
      <h1>{p.text}</h1>
    </>
  )
}

const Part = (p) => {
  return (
    <>
    <p>
      {p.text} {p.exercises}
    </p>
    </>
  )
}


const Content = ({parts}) => {

  return (
    <>
    <Part text={parts[0].name} exercises={parts[0].exercises}/>
    <Part text={parts[1].name} exercises={parts[1].exercises}/>
    <Part text={parts[2].name} exercises={parts[2].exercises}/>
    </>
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
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ]
  const total = parts.reduce((s, p) => s + p.exercises, 0)

  return (
    <div>
      <Header text={course}/>
      <Content parts={parts}/>
      <Total text={total}/>
    </div>
  )
}

export default App
