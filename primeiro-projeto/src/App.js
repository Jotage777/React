import './App.css';
import Condicional from './components/Condicional';
import CondionalLista from './CondicionalLista';

function App() {
  
  const meusItens = ['React', "Vue", "python", "css"]
  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional/>

      <h1>Renderização Condicional com listas</h1>
      <CondionalLista itens={meusItens}/>
    </div>
    
  );
}

export default App;
