import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => (
    <h1>{props.courseName}</h1>
);

const Part = (props) => {
  return (
    <p>
        {props.part} {props.exercise}
    </p>
  );
}
const Content = (props) => {
  return (
    <>
      <Part part={props.part[0].name} exercise={props.part[0].exercises}/>
      <Part part={props.part[1].name} exercise={props.part[1].exercises}/>
      <Part part={props.part[2].name} exercise={props.part[2].exercises}/>
    </>
  );
}

const Total = (props) => (
  <p>Number of exercises {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part:[
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
  };
  
  return (
    <div>
      <Header courseName={course.name}/>
      <Content part={course.part} />
      <Total part={course.part}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

