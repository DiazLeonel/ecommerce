import '../styles/App.scss';
import NavBar from'../components/NavBar';
import ItemListContainer from '../components/itemListContainer';
function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Ahora si"/>
    </div>
  );
}

export default App;





