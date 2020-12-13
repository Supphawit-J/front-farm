import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import styled from 'styled-components'

function WeeklyGraph ({ status }) {
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
  const GraphContainer = styled.div`
    padding: 1rem;
    width: 95%;
    height: 90%;
`

  const barSet = {

    options: {
      chart: {
        type: 'bar',
        height: '100%',
        background: '#fff'

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
            colors: '#000'
          }
        },
        tickPlacement: 'on'

      },
      legend: {
        labels: {
          colors: '#000'
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
            color: '#000'
          }
        },
        labels: {
          style: {
            colors: '#000'
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

  useEffect(() => {
    handleAvg()
  }, [])
  console.log(status)
  return (
    <GraphContainer style={{ display: status === true ? 'block' : 'none' }}>

      <Chart
          options={barSet.options}
          type={barSet.options.chart.type}
          series={barSet.options.series}
          width= {barSet.options.chart.width}
          height={barSet.options.chart.height}
        />

    </GraphContainer>
  )
}
export default WeeklyGraph
