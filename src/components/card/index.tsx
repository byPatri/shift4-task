import { useState } from 'react';
import logo from '../../assets/giving-icon.png';
import Actions from '../actions';
import MonthPicker from '../monthPicker';
import './index.scss'

function differenceInMonths(date: Date) {
  const now = new Date();
  return date.getMonth() - now.getMonth() + 12 * (date.getFullYear() - now.getFullYear())
}

const getTotal = (date: Date, amount?: string) => {
  console.log(amount, date);
  if(!amount){
    return 0
  }
  return parseInt(amount) * differenceInMonths(date)
}

function Card() {
  const [amount, setAmount] = useState<string>()
  const [date, setDate] = useState(new Date())
//Display value as money (1,234.56)
  const changeDate = (months: number) => {
    const updatedDate = new Date();
    updatedDate.setMonth(date.getMonth() + months)
    if(updatedDate >= new Date())
    setDate(updatedDate);
  }

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
              <span className='input_label'>I can donate</span>
              <input 
                value={amount}
                type="number"
                className="input_icon"
                placeholder='0.00'
                pattern="[0-9]*"
                data-politespace
                data-grouplength="3"
                data-delimiter=","
                onChange={(e) => {
                  setAmount(e.target.value)
                }}
              />
            </div>
            <div className='input_group'>
              <span className='input_label'>Every month until</span>
              <MonthPicker 
                date={date} 
                changeDate={changeDate} 
              />
            </div>
          </div>
          <div className='total'>
            <span>Total amount:</span>
            <span>${getTotal(date, amount)}</span>
          </div> 
          <div className='summary'>You're will be sending <b>${amount || 0}</b> every month, until <b>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</b>. Thank you!</div>
        </div>
        <Actions />
      </div>
    </div>
  )
}

export default Card