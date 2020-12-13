import { useState } from 'react'
export function GenerateData () {
  const time = new Date()
  time.setHours(6)
  time.setMinutes(0)
  time.setSeconds(0)
  const [bigData, setBigdata] = useState([])

  async function useData () {
    for (let i = 0; i < 10; i++) {
      setBigdata(bigData.push({
        device_id: 'D5',
        device_status: 'on',
        temp: Math.floor((i - (0.9 * i)) + 15 - (0.03 * i)),
        humidity: Math.floor(Math.random() * 100) + 40,
        wind: Math.floor(Math.random() * 10),
        lux: Math.floor(Math.random() * 400) + 50,
        timestamp: new Date(time.setMinutes(time.getMinutes() + 5))
      }))
      console.log(bigData[bigData.length - 1])
    }
  }

  // for (let i = 0; i < 144; i++) {
  //   bigData.push({
  //     device_id: 'DFG615',
  //     device_status: 'on',
  //     temp: Math.floor((25 - (i * 0.05))),
  //     humidity: Math.floor(Math.random() * 100) + 40,
  //     wind: Math.floor(Math.random() * 10),
  //     lux: Math.floor(Math.random() * 400) + 50,
  //     timestamp: (time.setMinutes(time.getMinutes() + 5))
  //   })
  // }

  async function handleUpdate () {
    bigData.push({
      device_id: 'DFG615',
      device_status: 'on',
      temp: Math.floor(Math.random() * (30 - 25) + 25),
      humidity: Math.floor(Math.random() * (30 - 25) + 25),
      wind: Math.floor(Math.random() * (30 - 25) + 25),
      lux: Math.floor(Math.random() * (30 - 25) + 25),
      timestamp: new Date(time.setMinutes(time.getMinutes() + 5))
    })
    console.log(bigData[bigData.length - 1], bigData.length)
  }
  async function clearData () {
    setBigdata(bigData.splice(0, bigData.length))
    console.log(bigData.length)
  }

  // const CronJob = require('cron').CronJob

  // const job = new CronJob('* * * * * *', function () {
  //   handleUpdate()
  //   console.log(bigData[bigData.length - 1].timestamp, bigData.length)
  // })
  // job.start()
  return [{ bigData }, { useData, handleUpdate, clearData }]
}
