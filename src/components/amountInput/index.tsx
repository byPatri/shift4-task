import './index.scss'

function AmountInput({ amount, setAmount }: { amount: string, setAmount: (value: string) => void}) {
  return (
    <input 
        value={amount}
        className="amount_input"
        placeholder='0.00'
        onChange={(e) => {
          setAmount(e.target.value);
        }}
    />
)
}

export default AmountInput
