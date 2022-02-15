import React, {useState} from "react";
import Header from "./Layout/Header.js";
import Meals from "./Meals/Meals.js";
import Cart from "./Cart/Cart.js";
import CartProvider from "./Store/CartProvider.js";


function App() {
  const [iscartActive, setiscartActive] = useState(false);

  const showCartHandler = () => {
    setiscartActive(true);
  };
  
  const hideCartHandler = () => {
    setiscartActive(false);
  };

  return (
    <CartProvider>
      {iscartActive && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
