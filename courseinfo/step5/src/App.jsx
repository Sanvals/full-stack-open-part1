const Header = (p) => {
  // console.log(p)
  return (
    <>
      <h1>{p.text}</h1>
    </>
  )
}

const Part = (p) => {
  // console.log(p)
  return (
    <>
    <p>
      {p.text} {p.exercises}
    </p>
    </>
  )
}


const Content = ({parts}) => {
  // console.log(parts)
  return (
    <>
    <Part text={parts[0].name} exercises={parts[0].exercises}/>
    <Part text={parts[1].name} exercises={parts[1].exercises}/>
    <Part text={parts[2].name} exercises={parts[2].exercises}/>
    </>
  )
}

const Total = (p) => {
  // console.log(p)
  return (
    <>
    <p>Number of exercises {p.text}</p>
    </>
  )
}
const App = () => {
  const course = "Half Stack application development"
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header text={course}/>
      <Content parts={[part1, part2, part3]}/>
      <Total text={part1.exercises + part2.exercises + part3.exercises}/>
    </div>
  )
}

export default App
