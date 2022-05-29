import '../styles/style.scss'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/itemListContainer'
import ItemDetailContainer from '../components/itemDetailContainer'

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer />
        <ItemDetailContainer />
    </div>
  );
}

export default App;





