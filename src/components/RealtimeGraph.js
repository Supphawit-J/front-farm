import 'date-fns'
import React, { useState, useContext } from 'react'
import Chart from 'react-apexcharts'
import ApexCharts from 'apexcharts'
import { styled, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers'
import Container from '@material-ui/core/Container'
import { DataContext } from '../context/DataContext'
/* global alert */
function RealtimeGraph ({ status }) {
  const { temp, wind, light, humidity, select } = useContext(DataContext)

  function switchData () {
    switch (select) {
      case 'temp' :
        return temp
      case 'wind' :
        return wind
      case 'light':
        return light
      case 'humidity':
        return humidity
      default:
    }
  }

  // chart
  const chartSet = {
    options: {
      chart: {
        id: 'mychart',
        width: '100%',
        height: '85%',
        type: 'area',
        fontFamily: 'Poppins, sans-serif',
        zoom: {
          autoScaleYaxis: true
        },
        background: '#fff',
        toolbar: {
          show: false,
          autoSelected: 'zoom'
        },
        animations: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: select === 'temp' ? ['#00B'] : select === 'wind' ? ['#FF2'] : select === 'humidity' ? ['#DC143C'] : select === 'light' ? ['#F92'] : ['#000'],
      xaxis: {
        type: 'datetime',
        min: (temp.map(index => index.x))[0],
        labels: {
          datetimeUTC: false,
          style: { colors: '#000' }
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
              colors: '#000'
            }
          },
          title: {
            text: select,
            style: {
              color: '#000'
            }
          },

          // max: Math.max(...[...new Set(temp.map(index => index.y))]) + 10,
          tickAmount: 6
        },
      series:
        [{
          name: select,
          data: switchData()
        }],
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
            y: select === 'temp' ? 30 : select === 'wind' ? 8 : select === 'humidity' ? 80 : select === 'light' ? 300 : 0,
            width: '100%',
            borderColor: '#EA0000',
            label: {
              borderColor: '#EA0000',
              style: {
                color: '#fff',
                background: '#EA0000'
              },
              text: 'Risk point'
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
        borderColor: 'rgba(0,0,0,0.1)',
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
  const [startTime, setStartTime] = useState()
  const [endTime, setEndTime] = useState()

  function updateData (timeline) {
    chartSet.options.selection = timeline
    switch (timeline) {
      case 'half_minute':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (switchData().map(index => index.x))[switchData().length - 6],
          (switchData().map(index => index.x))[switchData().length - 1]
        )

        break
      case 'one_hour':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (switchData().map(index => index.x))[switchData().length - 12],
          (switchData().map(index => index.x))[switchData().length - 1]
        )

        break
      case 'six_hour':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (switchData().map(index => index.x))[switchData().length - 74],
          (switchData().map(index => index.x))[switchData().length - 1]
        )

        break
      case 'twelve_hour':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (switchData().map(index => index.x))[switchData().length - 144],
          (switchData().map(index => index.x))[switchData().length - 1]
        )

        break
      case 'one_day':
        ApexCharts.exec(
          'mychart',
          'zoomX',
          (switchData().map(index => index.x))[switchData().length - 288],
          (switchData().map(index => index.x))[switchData().length - 1]
        )

        break
      case 'custom':
        if (endTime && startTime) {
          ApexCharts.exec(
            'mychart',
            'zoomX',
            new Date(startTime).getTime(),
            new Date(endTime).getTime()
          )
        }
        break
      default:
    }
  }

  const handleStartTime = (date) => {
    if (endTime) {
      if (((new Date(endTime).getTime()) - (new Date(startTime).getTime())) <= 0) {
        setStartTime(date)
      } else {
        alert('Select new end time')
      }
    } else {
      setStartTime(date)
    }
  }
  const handleEndTime = (date) => {
    if (startTime) {
      if (((new Date(date).getTime()) - (new Date(startTime).getTime())) >= 0) {
        setEndTime(date)
      } else {
        alert('Select new start time')
      }
    } else {
      setEndTime(date)
    }
  }

  const filterBtn = [
    { id: 'half_minute', text: 'last 30 minutes' },
    { id: 'one_hour', text: 'last 1 hours' },
    { id: 'six_hour', text: 'last 6 hours' },
    { id: 'twelve_hour', text: 'last 12 hours' },
    { id: 'one_day', text: 'today' }
  ]

  const timeFilter = [
    { value: startTime, func: handleStartTime },
    { value: endTime, func: handleEndTime }
  ]

  // useEffect(() => {
  // }, [])

  // style
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#FAB672',
        main: '#F1B24A',
        dark: '#F19E4A',
        contrastText: '#fff'
      }
    },
    overrides: {
      TimePicker
    },
    typography: {
      fontFamily: 'Poppins, sans-serif'
    }
  })

  const GroupBtn = styled(ButtonGroup)({
    borderRadius: 10,
    height: props => props.id === 'custom' ? '4vh' : '6vh'

  })

  const FilterBtn = styled(Button)({
    borderRadius: 10,
    fontSize: props => props.id === 'custom' ? '1rem' : '0.7rem',
    fontWeight: props => props.id === 'custom' ? 'bold' : 'normal',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#F1B24A',
      boxShadow: 'none'
    }
  })

  const FilterLabel = styled(Container)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    marginBottom: '1.5rem'
  })

  const TimeSelector = styled(Container)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '45%'

  })

  const TimeLabel = styled(TimePicker)({
    width: '45%'
  })

  const GraphContainer = styled(Container)({
    padding: '1rem',
    width: '100%',
    height: '80%',
    display: status === true ? 'flex' : 'none',
    flexDirection: 'column'
  })

  return (
    <GraphContainer>
      <ThemeProvider theme={theme}>
        <FilterLabel >
          <GroupBtn color= "primary" variant="contained" >
            {filterBtn.map(index => (
              <FilterBtn id= {index.id}
                onClick={() => updateData(index.id)}
                className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
                children={index.text}
              />
            ))}
          </GroupBtn>
          <TimeSelector>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-evenly">
            {timeFilter.map(index => (
             <TimeLabel
                ampm={false}
                variant="dialog"
                openTo="hours"
                label="select start times"
                format="HH:mm"
                margin="normal"
                value={index.value}
                onChange={index.func}
              />
            ))}

          </Grid>
          </MuiPickersUtilsProvider>
          <FilterBtn
            id="custom"
            onClick={() => updateData('custom')}
            className={ (chartSet.options.selection === 'one_day' ? 'active' : '')}
            children={'ENTER'}
          />
          </TimeSelector>
        </FilterLabel>
      </ThemeProvider>
      <Chart
        options={chartSet.options}
        type={chartSet.options.chart.type}
        series={chartSet.options.series}
        width= {chartSet.options.chart.width}
        height={chartSet.options.chart.height}
      />
     </GraphContainer>
  )
}
export default RealtimeGraph
