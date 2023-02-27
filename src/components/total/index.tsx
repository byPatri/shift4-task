import './index.scss'

function differenceInMonths(date: Date) {
  const now = new Date();
  return (date.getMonth() - now.getMonth() + 12 * (date.getFullYear() - now.getFullYear())) + 1;
}

const getTotal = (date: Date, amount?: string) => {
  if(!amount) return 0;
  const amountToNumber = amount.replace(/\,/g, '')
  return parseFloat(amountToNumber) * differenceInMonths(date);
}

function Total({ date, amount = '' }: { date: Date, amount: string }) {
  const total = getTotal(date, amount);
  const totalLabel = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits:  /\./g.test(amount) ? 2 : 0
  })
  return (
    <div className='total'>
        <span className='total_label'>Total amount</span>
        <span className='total_amount'>{totalLabel}</span>
    </div> 
)
}

export default Total