import { useState } from 'react';
import Actions from '../actions';
import CartHeader from '../cardHeader';
import MonthPicker from '../monthPicker';
import Total from '../total';
import './index.scss'

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
      <CartHeader />
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
          <Total amount={amount} date={date} />
          <div className='summary'>You're will be sending <b>${amount || 0}</b> every month, until <b>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</b>. Thank you!</div>
        </div>
        <Actions />
      </div>
    </div>
  )
}

export default Card