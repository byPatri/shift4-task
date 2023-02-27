import './index.scss';

function Summary({ amount, date }: { amount?: string, date: Date }){
    return (
        <div className='summary'>
            You're will be sending <b>${amount || 0}</b> every month, until <b>
            {date.toLocaleString('default', { month: 'long', year: 'numeric' })}</b>. Thank you!
        </div>
    )
}

export default Summary;