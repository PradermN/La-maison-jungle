import Banner from './components/Banner';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import '../src/styles/Layout.css';
import { useState } from 'react';
import logo from './assets/logo.png'

function App() {
  // Ajout du state cart au parent et cart est initialisé comme un tableau
  const [cart, updateCart] = useState([])
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			<div className='lmj-layout-inner'>
				<Cart cart={cart} updateCart={updateCart} />
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<Footer />
		</div>
	);
}

export default App;
