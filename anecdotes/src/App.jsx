/** @format */

import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const getRandomInt = (max) => {
    console.log("max int to generate: ", max);
    return Math.floor(Math.random() * max);
  };

  const onNewAnecdote = () => {
    console.log("should generate random int");
    const currentInt = selected;
    let randomInt = getRandomInt(anecdotes.length);
    console.log("randomInt genereated: ", randomInt);

    // prevent getting the same number in row
    while (randomInt === currentInt) {
      console.log("currentInt: ", currentInt);
      randomInt = getRandomInt(anecdotes.length);
      console.log("randomInt while loop: ", randomInt);
    }

    console.log("selected anectod: ", anecdotes[randomInt]);

    setSelected(randomInt);
  };

  const onVote = () => {
    let currentVote = votes[selected] ? votes[selected] : 0;
    console.log("current vote for ", selected, ": ", currentVote);

    const newTotalVote = currentVote + 1;
    console.log("new total votes", selected, ": ", newTotalVote);

    const updateVotes = { ...votes, [selected]: newTotalVote };
    console.log("updated votes", selected, ": ", updateVotes);
    setVotes(updateVotes);
  };

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected] ? votes[selected] : 0} votes</p>
      <button onClick={onVote}>vote</button>
      <button onClick={onNewAnecdote}>new anecdote</button>
    </div>
  );
};

export default App;
