import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { lineCustomSeries } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';






const AreaChart = () => {
  const { currentColor } = useStateContext()
  return (
    <div className='flex justify-center '>

      <div className="bg-white pt-12 w-4/5 flex items-center flex-col">
        <div className='w-full px-8'>
          <span className=' text-gray-400'>chart</span>
          <h2 className='text-5xl font-semibold' style={{ color: `${currentColor}` }}>Area</h2>
        </div>
        <h1 className=' text-3xl font-semibold mb-4'>Inflation Rate in percentage</h1>
        <LineChart
          sx={{zIndex:0}}
          height={500}
          series={[
            { data: lineCustomSeries.country.india, label: 'India', valueFormatter: (v) => (v + '%') , area:true},
            { data: lineCustomSeries.country.america, label: 'America', valueFormatter: (v) => (v + '%'), area:true },
            { data: lineCustomSeries.country.japan, label: 'Japan', valueFormatter: (v) => (v + '%'), area:true },
          ]}
          yAxis={[
            {
              valueFormatter: (v) => (v + '%'),
            }
          ]}
          xAxis={[{ scaleType:"point", data: lineCustomSeries.xLabels }]}

        />

      </div>
    </div>
  )
}

export default AreaChart
