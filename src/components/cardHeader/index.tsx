import logo from '../../assets/icons/giving_icon.svg';
import close from '../../assets/icons/close_btn.svg';
import './index.scss';

function CartHeader(){
    return (
        <div className='card-header'>
            <img
                src={close}
                className="close-button"
                alt="close button"
            />
            <img src={logo} className="card-header_logo" alt="card-logo" />
            <div className='card-header_text'>
                <span className='card-header_title'>The giving block</span>
                <span className='card-header_subtitle'>Set up your donation goal!</span>
            </div>
      </div>
    )
}

export default CartHeader;