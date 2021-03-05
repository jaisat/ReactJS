import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Message from './components/message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
      <EventBinding />
      {/* <FunctionClick />
      <ClassClick/> */}
      {/* <Counter/>
      {/* <Message /> */}
      {/* <Greet name="Satyam">
        <p>This is IT Student</p>
      </Greet>
      <Greet name="Clark">
        <button>Submit</button>
      </Greet> */}
      {/* <Welcome name="Satyam" heroname="Batman"/>  */}
    </div>
  );
}

export default App;
