import React, { useContext } from 'react'
import LayoutDashboard from '../components/LayoutDashboard'
// import { GenerateData } from '../utils/generateData'

import { Actioncontext } from '../context/Actioncontext'
import { DataContext } from '../context/DataContext'

function Dashboard () {
  const { text } = useContext(DataContext)
  // const [{ bigData }, { useData, handleUpdate }] = GenerateData()

  // const CronJob = require('cron').CronJob

  // const job = new CronJob('* * * * * *', function () {
  //   if (bigData.length < 12) {
  //     handleUpdate()
  //   } else {
  //     // clearData()
  //     // handleUpdate()
  //     console.log(bigData.map(index => index).filter(fil => fil.device_id === 'D5').map(humi => ({ x: new Date(humi.timestamp).getTime(), y: humi.humidity })))
  //     job.stop()
  //   }
  // })

  // useEffect(() => {
  //   useData()
  //   job.start()
  // }, [])
  return (
    <Actioncontext.Provider
      value={{
        dashboard: { titlename: ' Sensor Dashboard ' },
        temp: {
          id: 'temp',
          titlename: 'Temperature Dashboard',
          titledata: 'Temperature',
          titlenumber: text.temp,
          titleunit: 'Celsius ( °C )'
        },
        wind: {
          id: 'wind',
          titlename: 'Wind Dashboard',
          titledata: 'Wind Speed',
          titlenumber: text.wind,
          titleunit: 'Km / Hr'
        },
        humi: {
          id: 'wind',
          titlename: 'Humidity Dashboard',
          titledata: 'Humidity',
          titlenumber: text.humi,
          titleunit: 'Percent ( % )'
        },
        light: {
          id: 'light',
          titelname: 'Light Dashboard',
          titledata: 'Light',
          titlenumber: text.light,
          titleunit: 'Lux'
        }
      }}>
      <LayoutDashboard />
    </Actioncontext.Provider>
  )
}
export default Dashboard
