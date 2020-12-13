import React, { useEffect } from 'react'
import LayoutDashboard from '../components/LayoutDashboard'
import { FetchData } from '../services/FetchData'
function Dashboard () {
  const [{ bigData }, { useData, handleUpdate }] = FetchData()

  const CronJob = require('cron').CronJob

  const job = new CronJob('* * * * * *', function () {
    if (bigData.length < 12) {
      handleUpdate()
    } else {
      // clearData()
      // handleUpdate()
      console.log(bigData.map(index => index).filter(fil => fil.device_id === 'D5').map(humi => ({ x: new Date(humi.timestamp).getTime(), y: humi.humidity })))
      job.stop()
    }
  })

  useEffect(() => {
    useData()
    job.start()
  }, [])
  return (
  <>
    <LayoutDashboard/>
  </>
  )
}
export default Dashboard
