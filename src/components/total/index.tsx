import './index.scss'

function differenceInMonths(date: Date) {
  const now = new Date();
  return date.getMonth() - now.getMonth() + 12 * (date.getFullYear() - now.getFullYear());
}

const getTotal = (date: Date, amount?: string) => {
  if(!amount) return 0;
  return parseInt(amount) * differenceInMonths(date);
}

function Total({ date, amount }: { date: Date, amount?: string }) {
  return (
    <div className='total'>
        <span>Total amount:</span>
        <span>${getTotal(date, amount)}</span>
    </div> 
)
}

export default Total