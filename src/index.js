import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/Store/Store'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Provider store={store}>
      
        <App />

      </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>


);


reportWebVitals();
