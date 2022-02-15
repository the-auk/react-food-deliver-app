import React, {Fragment} from "react";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>theAUk Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
                </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Food on table"></img>
            </div>
        </Fragment>
    )
};



export default Header;
