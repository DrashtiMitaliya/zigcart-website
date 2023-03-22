// import from packages
import './App.css';
import { Toaster } from 'react-hot-toast';

// import from files
import {Router} from './Router/Routes/Router'
import { Header } from './Components/HeaderSection/Header';
function App() {


  return (
    <div className="App">
      <Toaster />
      <Header />
      <Router/>

    </div>
  );
}

export default App;
