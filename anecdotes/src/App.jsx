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

const AnecdoteMostVoted = ({ mostVoted }) => {
  const anecdote = mostVoted.anecdote;
  const votes = mostVoted.votes;

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
  const [votes, setVotes] = useState({});
  const [mostVoted, setMostVoted] = useState({ anecdote: "", votes: 0 });

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const onNewAnecdote = () => {
    const currentInt = selected;
    let randomInt = getRandomInt(anecdotes.length);

    // prevent getting the same number in row
    while (randomInt === currentInt) {
      randomInt = getRandomInt(anecdotes.length);
    }

    setSelected(randomInt);
  };

  const onVote = () => {
    let currentVote = votes[selected] || 0;
    const newTotalVote = currentVote + 1;
    const votesUpdated = { ...votes, [selected]: newTotalVote };

    setVotes(votesUpdated);

    // update most voted on anecdote
    if (newTotalVote > mostVoted.votes) {
      const newMostVoted = {
        anecdote: anecdotes[selected],
        votes: newTotalVote,
      };
      setMostVoted(newMostVoted);
    }
  };

  return (
    <div>
      <h1>Anectode of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected] || 0} />
      <Button action={onVote} label={"vote"} />
      <Button action={onNewAnecdote} label={"new anecdote"} />

      <h2>Anecdote with most votes</h2>
      <AnecdoteMostVoted mostVoted={mostVoted} />
    </div>
  );
};

export default App;
