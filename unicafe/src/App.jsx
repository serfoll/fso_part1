/** @format */
import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all === 0 ? 0 : (good - bad) / all;
  const positive = all === 0 ? 0 : (good / all) * 100;

  return (
    <div>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={`${average.toFixed(1)}`} />
            <StatisticLine
              text={"positive"}
              value={`${positive.toFixed(1)}%`}
            />
          </tbody>
        </table>
      )}
    </div>
  );
};

const Button = ({ onClick, label }) => (
  <button onClick={() => onClick(label)}>{label}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = (feedback) => {
    if (feedback === "good") setGood(good + 1);
    else if (feedback === "neutral") setNeutral(neutral + 1);
    else setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button label={"good"} onClick={onFeedback} />
      <Button label={"neutral"} onClick={onFeedback} />
      <Button label={"bad"} onClick={onFeedback} />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
