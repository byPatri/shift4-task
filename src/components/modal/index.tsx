import { ReactNode } from 'react';
import ReactDom from 'react-dom';
import close from '../../assets/icons/close_btn.svg';
import './index.scss';

function Modal ({ children, isOpen }: { children: ReactNode, isOpen: boolean }){
    if (!isOpen) return null;
    return ReactDom.createPortal(
        <div className='modal'>
            <div className='modal_content'>
            <img
                src={close}
                className="close-button"
                alt="close button"
            />
            {children}
            </div>
        </div>,
        document.getElementById('modal')!
    )
}

export default Modal;