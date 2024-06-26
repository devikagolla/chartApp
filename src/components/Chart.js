import React, {useEffect, useState} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Brush,
} from 'recharts'
import data from '../data/chartData.json'

const Chart = ({timeframe}) => {
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    setChartData(data[timeframe])
  }, [timeframe])

  const handleClick = data => {
    alert(`Clicked data point: ${JSON.stringify(data)}`)
  }

  return (
    <div className='chart-container'>
      <LineChart
        width={800}
        height={400}
        data={chartData}
        margin={{top: 5, right: 20, bottom: 5, left: 0}}
        onClick={handleClick}
      >
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey='date' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='value' stroke='#8884d8' />
        <Brush />
      </LineChart>
    </div>
  )
}

export default Chart
