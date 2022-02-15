import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon.js";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../Store/Cart-context.js";

const HeaderCartButton = (props) => {

const cartCtx = useContext(CartContext);
const numberOfItems = cartCtx.items.length;

 return(
         <button className={styles.button} onClick={props.onClick}>
             <span className={styles.icon}><CartIcon /></span>
             <span>Your Cart</span>
             <span className={styles.badge}>{numberOfItems}</span>
         </button>
 )
};

export default HeaderCartButton;