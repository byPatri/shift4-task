import './index.scss'

const formatMajor = (value: string) => {
  return value.replace(/\,/g, '').match(/.{1,3}(?=(.{3})*$)/g)?.join(',') || ''
};

const formatAmount = (current: string, value: string) => {
  if((value.match(/\D/g) || []).length > 0){
    return current
  }
  if((value.match(/\./g) || []).length > 1){
    return current
  }
  if((value.match(/\./g) || []).length === 1){
    const [major, decimal] = value.split('.');
    if(decimal.length > 2){
      return current
    }
    return `${formatMajor(major)}.${decimal}`
  }
  return value.length > 3 ? formatMajor(value): value;
};

function AmountInput({ amount, setAmount }: { amount: string, setAmount: (value: string) => void}) {
  return (
    <div className='wrapper'>
      <input 
          value={amount}
          className="amount_input"
          placeholder='0.00'
          onChange={(e) => {
            const formattedAmount = formatAmount(amount, e.target.value);
            setAmount(formattedAmount);
          }}
          onBlur={(e) => {
            if(amount.match(/\.$/g)){
              setAmount(amount.replace(/\.$/g, ''));
            }
          }}
      />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PLN">PLN</option>
      </select>
    </div>
  )
}

export default AmountInput
