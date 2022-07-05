import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/Component/App';
import store from './Store/store';
import { Provider } from 'react-redux';


 export default ReactDOM.render(
 
    <Provider store={store} className="App" data-test="App">
    <App />
    </Provider>
  ,
  document.getElementById('root')
);


