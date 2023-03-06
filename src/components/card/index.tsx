import { useState } from 'react';
import Actions from '../actions';
import AmountInput from '../amountInput';
import CartHeader from '../cardHeader';
import MonthPicker from '../monthPicker';
import Summary from '../summary';
import Total from '../total';
import './index.scss'

const getUpatedDate = (date: Date, months: number): [Date, number] => {
  const now = new Date();
  const yearsDiffInMonths = (date.getFullYear() - now.getFullYear()) * 12
  const updatedDate = new Date();
  updatedDate.setMonth(date.getMonth() + months + yearsDiffInMonths)
  const monthsQty = date.getMonth() - now.getMonth() + months + yearsDiffInMonths
  return [updatedDate, monthsQty];
}

function Card() {
  const [amount, setAmount] = useState<string>('')
  const [months, setMonths] = useState<number>(0)
  const [date, setDate] = useState(new Date())

  const changeDate = (months: number) => {
    const [updatedDate, monthsQty] = getUpatedDate(date, months)
    if(updatedDate >= new Date())
    setDate(updatedDate);
    setMonths(monthsQty)
  }

  return (
    <div className='card'>
      <CartHeader />
      <div className='card_container'>
        <div className='card_content'>
          <div className='card_inputs'>
            <div className='card_input_group'>
              <span className='card_input_label'>I can donate</span>
              <AmountInput amount={amount} setAmount={setAmount} />
            </div>
            <div className='card_input_group'>
              <span className='card_input_label'>Every month until</span>
              <MonthPicker 
                date={date} 
                changeDate={changeDate} 
              />
            </div>
          </div>
          <Total amount={amount} date={date} />
          <Summary amount={amount} date={date} months={`${months}`} />
        </div>
        <Actions isContinueDisabled={true}/>
      </div>
    </div>
  )
}

export default Card