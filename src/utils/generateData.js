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

const bigData2 = []
const time2 = new Date()
time2.setHours(6)
time2.setMinutes(0)
time2.setSeconds(0)

const data = []
for (let j = 1; j <= 7; j++) {
  data.push({
    dataOn1stDay: {
      device1: [{
        device_id: 'A1',
        temperature: [
          {
            device_id: 1,
            max: Math.floor((Math.random() * (10 - 5)) + 5),
            min: Math.floor((Math.random() * (10 - 5)) + 5),
            avg: Math.floor((Math.random() * (10 - 5)) + 5)
          }
        ],
        humidity: [
          {
            device_id: 1,
            max: Math.floor((Math.random() * (10 - 5)) + 5),
            min: Math.floor((Math.random() * (10 - 5)) + 5),
            avg: Math.floor((Math.random() * (10 - 5)) + 5)
          }
        ],
        windvelocity: [
          {
            device_id: 1,
            max: Math.floor((Math.random() * (10 - 5)) + 5),
            min: Math.floor((Math.random() * (10 - 5)) + 5),
            avg: Math.floor((Math.random() * (10 - 5)) + 5)
          }
        ],
        pressure: [
          {
            device_id: 1,
            max: Math.floor((Math.random() * (10 - 5)) + 5),
            min: Math.floor((Math.random() * (10 - 5)) + 5),
            avg: Math.floor((Math.random() * (10 - 5)) + 5)
          }
        ]
      }]
    }
  })
}

bigData2.push({
  status: 200,
  data: {
    dataInOneWeek: {
      data: data
    }
  }
})
