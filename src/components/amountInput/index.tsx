import './index.scss'

const formatMajor = (value: string) => {
  return value.replace(/\,/g, '').match(/.{1,3}(?=(.{3})*$)/g)?.join(',') || ''
};

const formatAmount = (current: string, value: string) => {
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
    <input 
        value={amount}
        className="amount_input"
        placeholder='0.00'
        onChange={(e) => {
          const formattedAmount = formatAmount(amount, e.target.value);
          setAmount(formattedAmount);
        }}
    />
  )
}

export default AmountInput
