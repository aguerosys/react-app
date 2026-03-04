import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const notes = [
  {
    id: 1,
    content: 'HTML es fácil',
    date: '2024-06-10T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2024-06-10T18:39:34.091Z',
    important: false
  }
]


root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
