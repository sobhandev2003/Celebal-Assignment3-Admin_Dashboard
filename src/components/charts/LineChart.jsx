import * as React from 'react';
import { LineChart ,
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';
import { SparklineAreaData, lineChartData } from '../../data/dummy';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { useStateContext } from '../../context/ContextProvider';

export default function BasicLineChart() {
  return (
    <LineChart
      xAxis={[{
        dataKey:"year",
        scaleType:"point",
        data:lineChartData.years,        
    }]}
      series={lineChartData.sales}
      // width={400}
      height={300}
    />
  );
}




export  function TinyLineChart() {
  const {currentColor}=useStateContext()
  return (
    <ChartContainer
      width={270}
      height={150}
      series={[{ type: 'line', data: SparklineAreaData.y }]}
      xAxis={[{ scaleType: 'point', data: SparklineAreaData.x}]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: currentColor,
          strokeWidth: 2,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: currentColor,
          scale: '0.6',
          fill: '#fff',
          strokeWidth: 2,
        },
      }}
      disableAxisListener
    >
      <LinePlot />
      <MarkPlot />
    </ChartContainer>
  );
}
