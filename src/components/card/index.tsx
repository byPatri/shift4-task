import { useState } from 'react';
import Actions from '../actions';
import CartHeader from '../cardHeader';
import MonthPicker from '../monthPicker';
import Summary from '../summary';
import Total from '../total';
import './index.scss'

function Card() {
  const [amount, setAmount] = useState<string>('')
  const [date, setDate] = useState(new Date())

  const changeDate = (months: number) => {
    const now = new Date();
    const yearsDiffInMonths = (date.getFullYear() - now.getFullYear()) * 12
    const updatedDate = new Date();
    updatedDate.setMonth(date.getMonth() + months + yearsDiffInMonths)
    if(updatedDate >= now)
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
                type="currency"
                className="input_icon"
                placeholder='0.00'
                onChange={(e) => setAmount(e.target.value)}
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
          <Summary amount={amount} date={date} />
        </div>
        <Actions />
      </div>
    </div>
  )
}

export default Card