/** @format */
import { useState } from "react";

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <h2>statistics</h2>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {all}</p>
          <p>average {average}</p>
          <p>positive {positive} %</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const onFeedback = (feedback) => {
    console.log("given feedback is: ", feedback);

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
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => onFeedback("good")}>good</button>
      <button onClick={() => onFeedback("neutral")}>neutral</button>
      <button onClick={() => onFeedback("bad")}>bad</button>

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
