import React from 'react'
import '../styles/style.scss'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/itemListContainer'
import ItemDetailContainer from '../components/itemDetailContainer'
import Cart from '../components/cart'
import Form from '../components/form'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from '../context/cartContext'
import { NotificationProvider } from '../notification/notification';
import Footer from '../components/footer'
import Error from '../components/error'

const App = () => {

  return (
    <div className="App">
      <CartContextProvider>
        <NotificationProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='*' element={<Error/>} />
              <Route path='/:categoryId' element={<ItemListContainer />} />
              <Route path='/:categoryId/:productId/:title' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/order' element={<Form />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </NotificationProvider>
      </CartContextProvider>
    </div>
  )
}

export default App;