import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useStateContext } from '../../context/ContextProvider';

 function BarChartPage() {
    const { currentColor } = useStateContext()
  return (
    <div className='flex justify-center '>

      <div className="bg-white pt-12 w-4/5 flex items-center flex-col">
        <div className='w-full px-8'>
          <span className=' text-gray-400'>chart</span>
          <h2 className='text-5xl font-semibold' style={{ color: `${currentColor}` }}>Bar</h2>
        </div>
        <h1 className=' text-3xl font-medium mb-4'>Olympic Medal Counts </h1>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ["India", "America", 'Japan'] }]}
      series={[
        { data: [4, 3, 5] ,label:"Gold", color:"#FFD700"}, 
        { data: [1, 6, 3],label:"Silver",color:"#C0C0C0" },
         { data: [2, 5, 6],label:"bronze",color:"#CD7F32"}]}
      height={300}
    />
    </div>
    </div>
  );
}

export default BarChartPage