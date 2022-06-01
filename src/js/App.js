import '../styles/style.scss'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/itemListContainer'
import ItemDetailContainer from '../components/itemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/:categoryId' element={<ItemListContainer/>} />
          <Route path='/:categoryId/:productId/:title' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





