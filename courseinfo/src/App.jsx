/** @format */

const Header = (props) => {
  console.log(`props in Header: ${JSON.stringify(props)}`);
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  console.log(`props in Part: ${JSON.stringify(props)}`);
  const part = props.part;
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(`props in Content: ${JSON.stringify(props)}`);
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  console.log(`props in Total: ${JSON.stringify(props)}`);
  const parts = props.parts;
  return (
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
