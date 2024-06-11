import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { lineCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';






const LineChartPage = () => {
  const { currentColor } = useStateContext()
  return (
    <div className='flex justify-center '>

      <div className="bg-white pt-12 w-4/5 flex items-center flex-col">
        <div className='w-full px-8'>
          <span className=' text-gray-400'>Chart</span>
          <h2 className='text-5xl font-semibold' style={{ color: `${currentColor}` }}>Line</h2>
        </div>
        <LineChart
          sx={{zIndex:0}}
          height={500}
          series={[
            { data: lineCustomSeries.country.india, label: 'India', valueFormatter: (v) => (v + '%') , },
            { data: lineCustomSeries.country.america, label: 'America', valueFormatter: (v) => (v + '%') },
            { data: lineCustomSeries.country.japan, label: 'Japan', valueFormatter: (v) => (v + '%') },
          ]}
          yAxis={[
            {
              valueFormatter: (v) => (v + '%'),
            }
          ]}
          xAxis={[{ scaleType: 'point', data: lineCustomSeries.xLabels }]}

        />

      </div>
    </div>
  )
}

export default LineChartPage
