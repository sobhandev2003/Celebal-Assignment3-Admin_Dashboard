import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

function PieChartPage() {
    const { currentColor } = useStateContext()
    return (
        <div className='flex justify-center '>

            <div className="bg-white pt-12 w-4/5 flex items-center flex-col">
                <div className='w-full px-8'>
                    <span className=' text-gray-400'>chart</span>
                    <h2 className='text-5xl font-semibold' style={{ color: `${currentColor}` }}>Pie</h2>
                </div>
                <h1 className=' text-3xl font-medium mb-4'>Project Cost Breakdown</h1>
                <PieChart
                    series={[
                        {
                            data: pieChartData,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            arcLabel: (params) => params.value + "%" ?? '',

                        },
                    ]}
                    height={400}
                />
            </div>
        </div>
    );
}
export default PieChartPage