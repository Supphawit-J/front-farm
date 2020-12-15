import React, { useState, useEffect, useContext } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import styled from 'styled-components'
import { DataContext } from '../context/DataContext'

function WeeklyGraph ({ status }) {
  // gen  7 day
  const { select, weekTemp, weekHumidity, weekLight, weekWind } = useContext(DataContext)
  const time = new Date()
  time.setDate(time.getDate() - 8)
  const category = []
  for (let i = 0; i < 7; i++) {
    category.push(new Date(time.setDate(time.getDate() + 1)).toLocaleString('default', { weekday: 'short' }))
  }
  console.log(category)
  function switchData () {
    switch (select) {
      case 'temp' :
        return weekTemp
      case 'wind' :
        return weekWind
      case 'light':
        return weekLight
      case 'humidity':
        return weekHumidity
      default:
    }
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
        background: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        toolbar: {
          show: false,
          autoSelected: 'zoom'
        }

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
        type: 'category',
        categories: category,
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
          text: select,
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
            return val
          }
        }
      },
      series: [{
        name: 'max',
        data: switchData().map(index => index[0].max)
      }, {
        name: 'min',
        data: switchData().map(index => index[0].min)
      }, {
        name: 'avg',
        data: switchData().map(index => index[0].avg)
      }]
    }

  }

  useEffect(() => {
  }, [])
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
