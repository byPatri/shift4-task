
import logo from '../../assets/giving-icon.png';
import './card.scss'

function Card() {

  return (
    <div className='card'>
      <div className='header'>
        <img src={logo} alt="card-logo" />
        <div>The giving block</div>
        <div>Set up your donation goal!</div>
      </div>
      <div className='container'>
        <div className='content'>
          <div className='inputs'>
            <div className='input_group'>
              <span>I can donate</span>
              <input placeholder='0.00'/>
            </div>
            <div>
              <span>Every month until</span>
            </div>
          </div>
          <div className='total'> Total amount: $200,00</div> 
          <div className='summary'>You're will be sending <b>$25,000</b> every month, until <b>August 2023</b>. Thank you!</div>
        </div>
        <div className='action'>
          <button className='cancel'>Cancel</button>
          <button className='continue'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Card