import logo from '../../assets/giving-icon.png';
import './index.scss';

function CartHeader(){
    return (
        <div className='card-header'>
            <img src={logo} alt="card-logo" />
            <span className='card-header_title'>The giving block</span>
            <span className='card-header_subtitle'>Set up your donation goal!</span>
      </div>
    )
}

export default CartHeader;