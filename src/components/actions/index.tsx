import './index.scss'

function Actions({ isContinueDisabled }: { isContinueDisabled: boolean }) {

  return (
    <div className='actions'>
      <button className='action cancel'>Cancel</button>
      <button className='action continue' disabled={isContinueDisabled}>Continue</button>
    </div>
)
}

export default Actions