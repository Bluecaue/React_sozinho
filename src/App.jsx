import simbolo from './assets/simbolo.jpg'
import simbolo2 from '/simbolo2.jpg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={simbolo2} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={simbolo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Exercicio</h1>
      <div className="card">
      </div>
      <p>Variavel String: Opa</p>
      <p>Variavel Numerica: 27</p>
    </>
  );
}

export default App;
