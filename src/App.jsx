import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer texto='¡Bienvenido, aca encontraras productos exlusivos de las mejores marcas!'/>
    </>
  );
}

export default App;
