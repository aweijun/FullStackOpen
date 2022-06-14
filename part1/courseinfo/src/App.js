const Header = ({name}) => {
  return <h1>{name}</h1>
}

const Part = ({part, exercises}) => {
  return (  <p>
    <p>{part}</p>
    <p>{exercises}</p>
  </p>)
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(x => <Part part ={x.name} exercises={x.exercises}/>)}
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <p>
      Number of exercises {parts.reduce((x, y) => x + y.exercises, 0)}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App