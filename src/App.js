
import './App.css';

import Countapp from './Countapp';
import CountdownTimer from './CountdownTimer';
import Todo from './Todolistapp';
import VotingSystem from './VotingSystemApp';

function App() {
  return (
    <div className="App">
      <Countapp/> <br></br>
      <Todo/> <br></br>
      <VotingSystem/> <br></br>
      <CountdownTimer/>
    </div>
  );
}

export default App;
