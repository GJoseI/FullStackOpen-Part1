const Header = (header) => {
  return (
    <div>
      <h1>{header.course}</h1>
    </div>
  );
};

const Content = (content) => {
  return (
    <div>
      <Part part={content.part1} exercises={content.exercises1} />
      <Part part={content.part2} exercises={content.exercises2}/>
      <Part part={content.part3} exercises={content.exercises3}/>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Total = () => {

};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part1.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <p>Number of exercises {exercises1 + exercises2 + exercises3} </p>
    </div>
  );
};

export default App;
