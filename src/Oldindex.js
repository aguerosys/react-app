import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Counter = (props) => {
  return (<h1>{props.number}</h1>)
}

const App = (props) => {
  /* const contador = useState(0)
  const contadorValue = contador[0]
  const updateContador = contador[1] */

  // const [contadorValue, updateContador] = useState(0)

  const [state, setState] = useState(1)
  const [delta, setDelta] = useState(1)

  const handleClick = () => {
    setState(state + 1)
  }

  const handleReset = () => {
    setState(0)
    setDelta(1)
  }

   const handleToggleIncrementDecrement = () => {
    setState((prevState) => prevState + delta)
    setDelta((prevDelta) => -prevDelta)
  }

  const isEven = state % 2 === 0
  const message = isEven ? 'El número es par' : 'El número es impar'

  /* setInterval(() => {
    updateContador(contadorValue + 1)
  }, 2000) */

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={state} />
      <small>{message}</small>
      <button 
        onClick={handleClick}
        //onClick={() => 
          //setState(state + 1)
          /* setState(prevState => {
            return prevState + 1
          }) 
            Esta manera es util cuando necesitas 
            utilizar el estado anterior 
          */
          
        //}
      >
          Incrementar contador
      </button>
      <button onClick={handleToggleIncrementDecrement}>
          Icrementar / decrementar
      </button>
      <button onClick={handleReset} > Reset </button>
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
