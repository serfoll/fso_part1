/** @format */
import { useState } from "react";

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    {text === "positive" ? <td>{value} %</td> : <td>{value}</td>}
  </tr>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
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
            <StatisticLine text={"average"} value={average} />
            <StatisticLine text={"positive"} value={positive} />
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
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const onFeedback = (feedback) => {
    let countUpdated = 0;
    let allUpdated = 0;
    let averageUpdate = 0;
    let positiveUpdate = 0;

    switch (feedback) {
      case "good":
        countUpdated = good + 1;
        allUpdated = countUpdated + neutral + bad;
        averageUpdate = (countUpdated + bad * -1) / allUpdated;
        positiveUpdate = (countUpdated / allUpdated) * 100;

        setGood(countUpdated);
        setAll(allUpdated);
        setAverage(averageUpdate);
        setPositive(positiveUpdate);
        break;
      case "neutral":
        countUpdated = neutral + 1;
        allUpdated = good + countUpdated + bad;
        positiveUpdate = (good / allUpdated) * 100;

        setNeutral(countUpdated);
        setAll(allUpdated);
        setPositive(positiveUpdate);
        break;
      case "bad":
        countUpdated = bad + 1;
        allUpdated = good + neutral + countUpdated;
        averageUpdate = (good + countUpdated * -1) / allUpdated;
        positiveUpdate = (good / allUpdated) * 100;

        setBad(countUpdated);
        setAll(allUpdated);
        setAverage(averageUpdate);
        setPositive(positiveUpdate);
        break;
      default:
    }

    console.log("given feedback is: ", feedback, countUpdated);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button label={"good"} onClick={onFeedback} />
      <Button label={"neutral"} onClick={onFeedback} />
      <Button label={"bad"} onClick={onFeedback} />

      <h2>statistics</h2>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
