/** @format */

const Header = (props) => {
  return <h1>{props.name}</h1>;
};

const Part = (props) => {
  const part = props.part;
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const parts = props.parts;
  const totalExercises = parts.reduce((acc, curr) => acc + curr.exercises, 0);

  return (
    <p>
      Total exercises: <b>{totalExercises}</b>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
