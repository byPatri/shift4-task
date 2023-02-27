import { ReactNode } from 'react';
import close from '../../assets/icons/close_btn.svg';
import './index.scss';

function Modal ({ children }: { children: ReactNode }){
    return (
        <div className='modal'>
            <div className='modal_content'>
            <img
                src={close}
                className="close-button"
                alt="close button"
            />
            {children}
            </div>
        </div>
    )
}

export default Modal;