import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ChatBot from './components/ChatBot';
//import TestBot from './components/TestBot';
import HomePage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <HomePage mars="./mars.png" />
      <ChatBot />
    </div>
  );
}

export default App;
