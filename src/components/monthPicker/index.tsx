import chevronLeft from '../../assets/icons/chevron_left.svg';
import chevronRight from '../../assets/icons/chevron_right.svg';
import './index.scss'

function MonthPicker({ date, changeDate }: { date: Date, changeDate: (months: number) => void}) {

  return (
    <div className='picker'>
      <img
        src={chevronLeft}
        className="picker_chevron"
        alt="chevron left"
        onClick={() => changeDate(-1)}
      />
      <div className='picker_date'>
        <span className='picker_month'>{date.toLocaleString('default', { month: 'long' })}</span>
        <span className='picker_year'>{date.toLocaleString('default', { year: 'numeric' })}</span>
      </div>
      <img
        src={chevronRight}
        className="picker_chevron"
        alt="chevron right"
        onClick={() => changeDate(1)}
      />
    </div>
)
}

export default MonthPicker