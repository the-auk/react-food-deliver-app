import styles from "./Modal.module.css";
import React, {Fragment} from "react";
import ReactDOM from 'react-dom';

const portalElement = document.getElementById('overlays');

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>{props.children}</div> 
    </div>
};

const Modal = (props) => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onHideCart} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, 
        portalElement)}

    </Fragment>
};

export default Modal;
