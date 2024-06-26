import React, {useState} from 'react'
import './styles/styles.css'
import Chart from './components/Chart'
import TimeframeSelector from './components/TimeframeSelector'

function App() {
  const [timeframe, setTimeframe] = useState('daily')

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <img
            className='logo'
            src='https://res.cloudinary.com/dbusahm1c/image/upload/v1719412923/ckywfgihjen3bvbcguym.jpg'
            alt='wensite-logo'
          />
        </div>
        <h1 className='heading'>Chart App</h1>
      </header>
      <TimeframeSelector onSelect={setTimeframe} />
      <Chart timeframe={timeframe} />
    </div>
  )
}

export default App
