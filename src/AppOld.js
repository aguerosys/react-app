import './App.css';
import Message from './Message';


const Description = () => {
  return <p>Esta es una aplicación de React</p>;
}

const App = () => {
  return (
    <div className="App">
      <Message color='red' msg='Estamos trabajando' />
      <Message color='blue' msg='en un curso' />
      <Message color='green' msg='de react' />
      
      <Description />
    </div>
  )
}

export default App;
