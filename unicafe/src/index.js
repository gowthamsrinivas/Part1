import {React,useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({formName}) => (
  <h1>{formName}</h1>
);

const Button = ({handleClick,text}) => (
  <button onClick={handleClick} style={{marginLeft: 0.5+'em'}}>
    {text}
  </button>
);

const Statistic = ({text,value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

const Statistics = ({good,neutral,bad}) => {
  const total = good+bad+neutral;
  return (
    <>
      <h2>Statistics</h2>
      {
      good !== 0 || neutral !== 0 || bad !== 0 ?
      (<table>
          <tbody>
            <Statistic text="good" value={good}/>
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="bad" value={bad}/>
            <Statistic text="average" value={(good-bad)/total}/>
            <Statistic text="positive" value={`${(good/total)*100} %`}/>
        </tbody>
      </table>):(<div>No Feedback Given</div>)
      }
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => {
    setGood(good+1);
  }

  const neutralClick = () => {
    setNeutral(neutral+1);
  }

  const badClick = () => {
    setBad(bad+1);
  }

  return (
    <div>
      <Header formName="Give Feedback"/>
      <Button handleClick={goodClick} text="good"/>
      <Button handleClick={neutralClick} text="neutral"/>
      <Button handleClick={badClick} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);