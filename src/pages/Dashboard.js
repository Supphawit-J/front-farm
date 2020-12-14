import React from 'react'
import LayoutDashboard from '../components/LayoutDashboard'
// import { GenerateData } from '../utils/generateData'

import { Actioncontext } from '../context/Actioncontext'

function Dashboard () {
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
          titlename: 'Temperature Dashboard',
          titledata: 'Temperature',
          titlenumber: '10',
          titleunit: 'Celsius ( °C )'
        },
        wind: {
          titlename: 'Wind Dashboard',
          titledata: 'Wind Speed',
          titlenumber: '20',
          titleunit: 'Km / Hr'
        },
        humi: {
          titlename: 'Humidity Dashboard',
          titledata: 'Humidity',
          titlenumber: '30',
          titleunit: 'Percent ( % )'
        },
        light: {
          titelname: 'Light Dashboard',
          titledata: 'Light',
          titlenumber: '40',
          titleunit: 'Lux'
        }
      }}>
      <LayoutDashboard />
    </Actioncontext.Provider>
  )
}
export default Dashboard
