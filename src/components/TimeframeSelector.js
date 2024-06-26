import React from 'react'

const TimeframeSelector = props => {
  const {onSelect} = props
  return (
    <div className='timeframe-selector'>
      <button className='button' onClick={() => onSelect('daily')}>
        Daily
      </button>
      <button className='button' onClick={() => onSelect('weekly')}>
        Weekly
      </button>
      <button className='button' onClick={() => onSelect('monthly')}>
        Monthly
      </button>
    </div>
  )
}

export default TimeframeSelector
