import { useState } from 'react'
export function GenerateData () {
  const time = new Date()
  time.setHours(6)
  time.setMinutes(0)
  time.setSeconds(0)
  const [bigData, setBigdata] = useState([])
  const [bigData2, setBigdata2] = useState([])

  async function useData () {
    for (let i = 0; i < 288; i++) {
      setBigdata(bigData.push({
        device_id: 'D1',
        device_status: 'on',
        temp: Math.floor(Math.random() * (30 - 25) + 25),
        humidity: Math.floor(Math.random() * (30 - 25) + 25),
        wind: Math.floor(Math.random() * (30 - 25) + 25),
        lux: Math.floor(Math.random() * (30 - 25) + 25),
        timestamp: new Date(time.setMinutes(time.getMinutes() + 5))
      }))
      // console.log(bigData[bigData.length - 1])
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
      device_id: 'D1',
      device_status: 'on',
      temp: Math.floor(Math.random() * (30 - 25) + 25),
      humidity: Math.floor(Math.random() * (30 - 25) + 25),
      wind: Math.floor(Math.random() * (30 - 25) + 25),
      lux: Math.floor(Math.random() * (30 - 25) + 25),
      timestamp: new Date(time.setMinutes(time.getMinutes() + 5))
    })
    // console.log(bigData[bigData.length - 1], bigData.length)
  }
  async function clearData () {
    setBigdata(bigData.splice(0, bigData.length))
    console.log(bigData.length)
  }
  async function weekData () {
    const device = []

    for (let l = 1; l <= 7; l++) {
      for (let j = 1; j <= 3; j++) {
        device.push({
          device_id: 'D' + j,
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
          wind_velocity: [
            {
              device_id: 1,
              max: Math.floor((Math.random() * (10 - 5)) + 5),
              min: Math.floor((Math.random() * (10 - 5)) + 5),
              avg: Math.floor((Math.random() * (10 - 5)) + 5)
            }
          ],
          sun_lux: [
            {
              device_id: 1,
              max: Math.floor((Math.random() * (10 - 5)) + 5),
              min: Math.floor((Math.random() * (10 - 5)) + 5),
              avg: Math.floor((Math.random() * (10 - 5)) + 5)
            }
          ]
        })
      }
    }

    // const count = 0

    // for (let a = 0; a < 7; a++) {
    //   for (let b = 0; b < 3; b++) {
    //     data2.push({ device: [device[0]] })
    //   }
    //   data.push({ device: data2[a] })
    // }
    setBigdata2(bigData2.push({
      status: 200,
      data: {
        dataInOneDay: {
          data: bigData
        },
        dataInOneWeek: {
          data: {
            dataOn1stDay: {
              device: device.slice(0, 3)
            },
            dataOn2stDay: {
              device: device.slice(3, 6)
            },
            dataOn3stDay: {
              device: device.slice(6, 9)
            },
            dataOn4stDay: {
              device: device.slice(9, 12)
            },
            dataOn5stDay: {
              device: device.slice(12, 15)
            },
            dataOn6stDay: {
              device: device.slice(15, 18)
            },
            dataOn7stDay: {
              device: device.slice(18, 21)
            }
          }
        }
      }
    }))
  }

  return [{ bigData, bigData2 }, { useData, handleUpdate, clearData, weekData }]
}

// const time2 = new Date()
// time2.setHours(6)
// time2.setMinutes(0)
// time2.setSeconds(0)

// console.log(bigData2)
