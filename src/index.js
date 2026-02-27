import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


const WarningNotUsed = () => {
  return <h1>Este componente no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
  return <p>{clicks.join(', ')}</p>
}
const App = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    // clicks: 0,
    message: 'Mensaje prueba en el estado'
  })

  const [clicks, setClicks] = useState([])
  

  const handleClickLeft = () => {
    setCounters({
      ...counters,
      left: counters.left + 1,
      // clicks: counters.clicks + 1
    })

    setClicks(prevClicks => [...prevClicks, 'L'])
  }

  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
      // clicks: counters.clicks + 1
    })

    setClicks(prevClicks => [...prevClicks, 'R'])
  }

  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {counters.right}
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0 ? 
        <WarningNotUsed /> : 
        <ListOfClicks clicks={clicks} />
      }

      <p>{counters.message}</p>
    </div>
  )
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
