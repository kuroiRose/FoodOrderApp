import Header from './components/Header.jsx';
import Meals from './components/Meals.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

import { CartContextProvider } from './store/CartContext.jsx';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  )
}

export default App
//A food order app that allows users to browse different meals, add those meals to a cart, edit those meals in the cart, and then proceed to
//a ccheckout form where they can submit that order to a backend