import React, { useState } from 'react';

function VotingSystem() {
  const [votes, setVotes] = useState([0, 0, 0]);

  function handleVote(index) {
    const newVotes = [...votes];
    newVotes[index] += 1;
    setVotes(newVotes);
  }

  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div>
      <h1>Voting System</h1>
      {options.map((option, index) => (
        <div key={index}>
          <h2>{option}</h2>
          <p>Votes: {votes[index]}</p>
          <button onClick={() => handleVote(index)}>Vote</button>
        </div>
      ))}
    </div>
  );
}

export default VotingSystem;
