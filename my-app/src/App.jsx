import './App.css';
import './index.css';

import NavBar from './components/NavBar/NavBar';
/*import ItemListContainer from './components/ItemListContainer/ItemListContainer';*/
import LogoTienda from './components/LogoTienda/LogoTienda';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LogoTienda/>
      {/*<ItemListContainer mostrar='Mis Productos'/>*/}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
