import styles from "./Input.module.css";
import React, { forwardRef, useRef } from "react";

const Input = React.forwardRef((props, ref) => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id} className={styles.label}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
});

export default Input;