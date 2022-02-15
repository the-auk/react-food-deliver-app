import Modal from "../UI/Modal.js";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartContext from "../Store/Cart-context.js";
import CartItem from "./CartItem.js";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount:1});
    };

    const cartItems = (<ul className={styles['cart-items']}>
        {cartCtx.items.map((item) => (
            <CartItem key={item.id} name={item.name} 
            amount={item.name} 
            price={item.price}
            amount={item.amount} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)} 
            onAdd={cartItemAddHandler.bind(null, item)}></CartItem>
        ))}
        </ul> 
        );

    return (<Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button-alt']} onClick={props.onHideCart}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>);
};

export default Cart;
