import React from 'react'
import '../styles/style.scss'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/itemListContainer'
import ItemDetailContainer from '../components/itemDetailContainer'
import Cart from '../components/cart'
import OrderEnd from '../components/form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from '../context/cartContext'
import { NotificationProvider } from '../notification/notification';

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
      <NotificationProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/:categoryId/:productId/:title' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<h1>PAGE NOT FOUND</h1>} />
            <Route path='/order' element={<OrderEnd />}/>
          </Routes>
        </BrowserRouter>
        </NotificationProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;





