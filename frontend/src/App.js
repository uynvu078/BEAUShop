import './App.css';
import Navbar from './components/navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup.jsx';
import Footer from './components/footer/Footer.jsx';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/sunglasses' element={<ShopCategory banner={kids_banner} category="sunglasses"/>} />
        <Route path='/product' element={<Product/>} >
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignup/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
