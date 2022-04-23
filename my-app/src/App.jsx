import './App.css';
import './index.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import LogoTienda from './components/LogoTienda/LogoTienda';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LogoTienda/>
      <ItemListContainer title='Nuestros Productos'/>
    </div>
  );
}

export default App;
