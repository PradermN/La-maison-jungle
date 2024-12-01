import Banner from './components/Banner';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ShoppingList from './components/ShoppingList';
import '../src/styles/Layout.css';

function App() {
  return (
    <div className="App">

      <Banner></Banner>

      <div className='lmj-layout-inner'>
				<Cart />
				<ShoppingList />
			</div>

      <Footer></Footer>

    </div>
  );
}

export default App;
