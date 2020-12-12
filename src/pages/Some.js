import 'date-fns'
import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from '@material-ui/pickers'

function Some () {
  // gen one day
  const [info, setInfo] = useState([])
  const time = new Date()
  const bigData = []
  for (let i = 0; i < 144; i++) {
    bigData.push({ y: Math.floor((i - (0.9 * i)) + 15 - (0.03 * i)), x: (time.setMinutes(time.getMinutes() + 5)) })
  }

  for (let i = 0; i < 144; i++) {
    bigData.push({ y: Math.floor((25 - (i * 0.05))), x: (time.setMinutes(time.getMinutes() + 5)) })
  }

  const handleTime = () => {
    setInfo(bigData.map(index => index))
  }

  // gen  7 day
  const [avg, setAvg] = useState([])
  const bigData2 = []
  const time2 = new Date()
  for (let j = 0; j < 6; j++) {
    bigData2.push({
      value: {
        max: Math.floor((Math.random() * (10 - 5)) + 5),
        min: Math.floor((Math.random() * (10 - 5)) + 5),
        avg: Math.floor((Math.random() * (10 - 5)) + 5)
      },
      time: (new Date(time2.setDate(time2.getDate() + 1))).toLocaleString('default', { weekday: 'short' })
    })
  }
  const handleAvg = () => {
    setAvg(bigData2.map(index => index))
  }

  // styled-component
  const Container = styled.div`
  display:flex;
  width: 100vw;
  height: 100vh;
  background-color:coral;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
  `
  const Label = styled.div`
    width: ${props => (props.id === 'realtime' ? '90vw' : '45vw')};
    height:${props => (props.id === 'realtime' ? '40vh' : '60vh')};;
    background-color:powderblue;
    margin: 4%;
  
  `

  // chart option
  const chartSet = {
    options: {
      chart: {
        id: 'mychart',
        width: '100%',
        height: '100%',
        type: 'area',
        zoom: {
          autoScaleYaxis: true
        },
        background: '#404040'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FF1654'],
      xaxis: {
        type: 'datetime',
        min: (info.map(index => index.x))[0],
        labels: {
          datetimeUTC: false,
          style: {
            colors: '#FFf'
          }
        }
      },
      yaxis:
        {
          forceNiceScale: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true
          },
          labels: {
            style: {
              colors: '#FF1'
            }
          },
          title: {
            text: 'Series A',
            style: {
              color: '#FF1654'
            }
          },
          min: 0,

          // max: Math.max(...[...new Set(info.map(index => index.y))]) + 10,
          tickAmount: 6
        },
      series: [
        {
          name: 'data1',
          data: info
        }
      ],
      tooltip: {
        enabled: true,
        shared: false,
        followCursor: true,
        x: {
          show: true,
          format: 'MMMM dd, HH:mm'
        }

      },
      annotations: {
        yaxis: [
          {
            y: 35,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396'
              },
              text: 'Y-axis annotation on 5'
            }
          }
        ]
      },
      responsive: [
        {
          breakpoint: 300

        }
      ],
      grid: {
        show: true,
        borderColor: 'rgba(250,250,250,0.1)',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      selection: 'one_day'
    }
  }

  const barSet = {

    options: {
      chart: {
        type: 'bar',
        height: '100%',
        background: '#404040'

      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {

        labels: {
          style: {
            colors: '#fff'
          }
        },
        tickPlacement: 'on'

      },
      legend: {
        labels: {
          colors: '#fff'
        }
      },
      yaxis: {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true
        },
        title: {
          text: 'something',
          style: {
            color: '#fff'
          }
        },
        labels: {
          style: {
            colors: '#fff'
          }
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' thousands'
          }
        }
      },
      series: [{
        name: 'max',
        data: avg.map(index => ({ y: index.value.max, x: index.time }))
      }, {
        name: 'min',
        data: avg.map(index => ({ y: index.value.min, x: index.time }))
      }, {
        name: 'avg',
        data: avg.map(index => ({ y: index.value.avg, x: index.time }))
      }]
    }

  }

  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())

  const handleStartTime = (date) => {
    setStartTime(date)
    setEndTime((new Date(date)).setMinutes((new Date(date)).getMinutes() + 5))
  }
  const handleEndTime = (date) => {
    setEndTime(date)
  }

  function updateData (timeline) {
    chartSet.options.selection = timeline

    switch (timeline) {
      case 'half_minute':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (info.map(index => index.x))[info.length - 6],
          (info.map(index => index.x))[info.length - 1]
        )
        setStartTime(new Date())
        setEndTime(new Date())

        break
      case 'one_hour':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (info.map(index => index.x))[info.length - 12],
          (info.map(index => index.x))[info.length - 1]
        )
        setStartTime(new Date())
        setEndTime(new Date())
        break
      case 'six_hour':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (info.map(index => index.x))[info.length - 74],
          (info.map(index => index.x))[info.length - 1]
        )
        setStartTime(new Date())
        setEndTime(new Date())
        break
      case 'twelve_hour':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (info.map(index => index.x))[info.length - 144],
          (info.map(index => index.x))[info.length - 1]
        )
        setStartTime(new Date())
        setEndTime(new Date())
        break
      case 'one_day':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (info.map(index => index.x))[info.length - 288],
          (info.map(index => index.x))[info.length - 1]
        )
        setStartTime(new Date())
        setEndTime(new Date())
        break
      case 'custom':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          new Date(startTime).getTime(),
          new Date(endTime).getTime()
        )
        break
      default:
    }
  }

  useEffect(() => {
    handleTime()
    handleAvg()
  }, [])

  return (
    <Container>
      <Label id = 'realtime'>
      <button id="half_minute"
        onClick={() => updateData('half_minute')}
        className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
        children={'last 30 minute'}
        />
      <button id="one_hour"
        onClick={() => updateData('one_hour')}
        className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
        children={'last one hour'}
        />
        <button id="six_hour"
        onClick={() => updateData('six_hour')}
        className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
        children={'last six hour'}
        />
        <button id="twelve_hour"
        onClick={() => updateData('twelve_hour')}
        className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
        children={'last 12 hour'}
        />
        <button id="one_day"
        onClick={() => updateData('one_day')}
        className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
        children={'today'}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-evenly">
            <TimePicker
              ampm={false}
              variant="dialog"
              openTo="hours"
              label="select start times"
              format="HH:mm"
              margin="normal"
              value={startTime}
              onChange={handleStartTime}
            />
            <TimePicker
              ampm={false}
              variant="dialog"
              openTo="hours"
              label="select end times"
              format="HH:mm"
              margin="normal"
              value={endTime}
              onChange={handleEndTime}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <button id="custom"
        onClick={() => updateData('custom')}
        className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
        children={'ENTER'}
        />

        <Chart
          options={chartSet.options}
          type={chartSet.options.chart.type}
          series={chartSet.options.series}
          width= {chartSet.options.chart.width}
          height={chartSet.options.chart.height}
        />
      </Label>
      <Label id = 'weekly' >
      <Chart
          options={barSet.options}
          type={barSet.options.chart.type}
          series={barSet.options.series}
          width= {barSet.options.chart.width}
          height={barSet.options.chart.height}
        />
      </Label>

    </Container>
  )
}
export default Some
