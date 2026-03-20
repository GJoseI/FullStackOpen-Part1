import { use, useState } from "react";

const Title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistics = (props) => {
  return props.total > 0 ? (
    <div>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.total} />
      <StatisticsLine text="average" value={props.average} />
      <StatisticsLine text="positive" value={props.positive} unit="%" />
    </div>
  ) : (
    <p>No feedback given</p>
  );
};

const StatisticsLine = (props) => {
  return (
    <div>
      {props.text} {props.value}{props.unit}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const [average, setAverage] = useState(0);

  const handleGood = () => {
    const updatedGood = good + 1;
    const updatedTotal = updatedGood + neutral + bad;
    setGood(updatedGood);
    setTotal(updatedTotal);
    setPositive((updatedGood / updatedTotal) * 100);
    setAverage(updatedTotal / 3);
  };

  const handleBad = () => {
    const updatedBad = bad + 1;
    const updatedTotal = updatedBad + neutral + good;
    setBad(updatedBad);
    setTotal(updatedTotal);
    setPositive((good / updatedTotal) * 100);
    setAverage(updatedTotal / 3);
  };

  const handleNeutral = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = updatedNeutral + good + bad;
    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
    setPositive((good / updatedTotal) * 100);
    setAverage(updatedTotal / 3);
  };

  return (
    <div>
      <Title text="give feedback" />
      <Button onClick={handleGood} text="good" />
      <Button onClick={handleNeutral} text="neutral" />
      <Button onClick={handleBad} text="bad" />
      <Title text="statistics" />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
