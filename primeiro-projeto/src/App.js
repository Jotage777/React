import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {
  

  return (
    <div className="App">
      <h1>Meu primeiro projeto em React</h1>
      <HelloWorld/>
      <SayMyName nome='Gabriel' />
      <Pessoa 
      nome="Gabriel"
      idade="24"
      profissao="Programador"
      foto= "https://i.pinimg.com/originals/48/4d/82/484d829c4bf5b8103e1294e81a5413e8.png"
      />
      <List/>
    </div>
  );
}

export default App;
