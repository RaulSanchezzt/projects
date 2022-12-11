import './App.css';
import Mensaje from "./Mensaje.js";


const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='yellow' message='En un curso'/>
      <Mensaje color='green' message='De react'/>
    </div>
  );
}

export default App;
