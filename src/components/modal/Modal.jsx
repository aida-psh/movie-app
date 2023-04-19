import React, { useEffect , useState , useRef } from "react";
import propTypes from 'prop-types';
import './modal.scss';

const Modal = props => {
    const [active , setActive] = useState(false);
    useEffect(() =>{
        setActive(props.active);

    }, [props.active])
    return(
        <div id={props.id} className={`modal ${active ? 'active' : ''}`}>
             {props.children}
        </div>
    )
}

Modal.prototype = {
    active : propTypes.bool,
    id: propTypes.string
}

export const ModalContent = props => {
    const contentRef = useRef(null);
    const closeModal = () =>{
        contentRef.current.parentNode.classList.remove('active');
        if(props.onClose) props.onClose();

    }

    return(
        <div ref={contentRef} className="modal__content">
            {props.children}
            <div className="modal__content__close" onClick={closeModal}>
                <i children="bx bx-x"></i>
            </div>

        </div>

    )
}

export default Modal;