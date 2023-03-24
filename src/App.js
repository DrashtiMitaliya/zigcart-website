// import from packages
import './App.css';
import { Toaster } from 'react-hot-toast';

// import from files
import {Router} from './Router/Routes/Router'

function App() {


  return (
    <div className="App">
      <Toaster />
      <Router/>
    </div>
  );
}

export default App;
