import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      {/* <Message /> */}
      {/* <Greet name="Satyam">
        <p>This is IT Student</p>
      </Greet>
      <Greet name="Clark">
        <button>Submit</button>
      </Greet> */}
      <Welcome name="Satyam" heroname="Batman"/> 
    </div>
  );
}

export default App;
