import '../styles/style.scss'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/itemListContainer'
import ItemCount from '../components/itemCount'


function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting="Buenas"/>
        <ItemCount initial="1" stock="10"/>
    </div>
  );
}

export default App;





