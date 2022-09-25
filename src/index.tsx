import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './renderer/page/home/App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

