import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './app/store';
import {Provider} from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<React.StrictMode>
<ChakraProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>


);


reportWebVitals();
