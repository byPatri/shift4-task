import logo from '../../assets/giving_icon.svg';
import close from '../../assets/close_btn.svg';
import './index.scss';

function CartHeader(){
    return (
        <div className='card-header'>
            <img
                src={close}
                className="close-button"
                alt="close button"
            />
            <img src={logo} alt="card-logo" />
            <span className='card-header_title'>The giving block</span>
            <span className='card-header_subtitle'>Set up your donation goal!</span>
      </div>
    )
}

export default CartHeader;