import './index.scss';

function Summary({ amount = '0', date, months = '0' }: { amount: string, date: Date, months: string }){
    return (
        <div className='summary'>
            You're will be sending <b>${amount}</b> every month, for {months} months until <b>
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}</b>. Thank you!
        </div>
    )
}

export default Summary;