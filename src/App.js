import { Tooltip } from '@mui/material'
import React from 'react'
import { IoMdSettings } from "react-icons/io";
import Navbar from './components/Navbar';
import { useStateContext } from './context/ContextProvider';
import ThemeSettings from './components/ThemeSettings';
import Sidebar from './components/Sidebar';
import Ecommerce from './pages/Ecommerce';
import { Route, Routes } from 'react-router-dom';
import Calendar from './pages/Calender';
import KanabanBoard from './pages/KanabanBoard';
import LineChartPage from './pages/charts/LineChart';
import AreaChart from './pages/charts/AreaChart';
import BarChartPage from './pages/charts/BarChartPage';
import PieChartPage from './pages/charts/PieCahartPage';
import ColorPicker from './pages/ColorPicker';
import TextEditor from './pages/TextEditor';
const App = () => {
  const { currentColor, activeMenu, themeSettings, setThemeSettings } = useStateContext()
  return (
    <div className='flex relative dark:bg-main-dark-bg'>
      <div className='fixed right-4 bottom-4' style={{ zIndex: 10000 }}>
        <Tooltip title="Setting" placement="top" arrow>

          <button className=' text-3xl p-3 text-white  hover:drop-shadow-xl hover:bg-light-gray rounded-full'
            style={{ background: `${currentColor}` }}
            onClick={() => setThemeSettings(true)}
          >
            <IoMdSettings />
          </button>
        </Tooltip>
      </div>
      {
        activeMenu ? (<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg z-10' >
          <Sidebar />
        </div>) : (<div className='w-0 dark:bg-secondary-dark-bg'>

        </div>
        )}
      <div
        className={
          activeMenu
            ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
            : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
        }
      >
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full flex justify-center z-50'>
          <Navbar />
        </div>
        <div>
          {themeSettings && (<ThemeSettings />)}
          <Routes>
            {/* dashboard  */}
            <Route path="/" element={(<Ecommerce />)} />
            <Route path="/ecommerce" element={(<Ecommerce />)} />

            {/* pages  */}
            {/* <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} /> */}

            {/* apps  */}
                <Route path="/editor" element={<TextEditor />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/kanban" element={<KanabanBoard />} />
            {/* charts  */}
            <Route path="/line" element={<LineChartPage />} />
            <Route path="/area" element={<AreaChart />} />
            <Route path="/bar" element={<BarChartPage />} />
            <Route path="/pie" element={<PieChartPage />} />
            {/* 
                
            
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} /> */}

          </Routes>

        </div>



      </div>

    </div>
  )
}

export default App
