/** @format */

import { useState } from "react";

const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>has {votes} votes</p>
    </div>
  );
};

const AnecdoteMostVoted = ({ anecdote, votes }) => {
  return votes === 0 ? (
    <p>No votes available yet</p>
  ) : (
    <Anecdote anecdote={anecdote} votes={votes} />
  );
};

const Button = ({ action, label }) => <button onClick={action}>{label}</button>;

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
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  console.log("votes initial state: ", votes);

  const onNewAnecdote = () => {
    let randomInt;

    // prevent getting the same number in row
    do {
      randomInt = Math.floor(Math.random() * anecdotes.length);
    } while (randomInt === selected);

    console.log("randomInt: ", randomInt);

    setSelected(randomInt);
  };

  const onVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    console.log("new vote: ", newVotes[selected]);
    setVotes(newVotes);
  };

  const maxVotes = Math.max(...votes);
  const mostVoted = votes.indexOf(maxVotes);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected] || 0} />
      <Button action={onVote} label={"vote"} />
      <Button action={onNewAnecdote} label={"new anecdote"} />

      <h2>Anecdote with most votes</h2>
      <AnecdoteMostVoted anecdote={anecdotes[mostVoted]} votes={maxVotes} />
    </div>
  );
};

export default App;
