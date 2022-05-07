import './App.css';
/*import './index.css';*/

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import LogoTienda from './components/LogoTienda/LogoTienda';
import ItemDetailContainer from './Pages/ItemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import Cart from './Pages/Cart/Cart';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <LogoTienda/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </div>
  );
}

export default App;
