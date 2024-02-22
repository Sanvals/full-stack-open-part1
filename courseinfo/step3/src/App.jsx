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

const Total = ({parts}) => {
  // console.log(p)
  const total = parts.reduce((s, p) => s + p.exercises, 0)
  return (
    <>
    <p>Number of exercises {total}</p>
    </>
  )
}
const App = () => {
  const course = {
      name: "Half Stack application development",
      parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header text={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}
export default App
