import './index.scss';

function Summary({ amount, date }: { amount?: string, date: Date }){
    const formattedAmount = (amount ? parseInt(amount) : 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
    return (
        <div className='summary'>You're will be sending <b>{formattedAmount}</b> every month, until <b>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</b>. Thank you!</div>
    )
}

export default Summary;