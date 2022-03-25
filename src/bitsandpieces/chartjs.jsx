// Dependencies import
import { useState, useEffect } from 'react'
import axios from 'axios'

// Charts dependencies
import { Chart, CategoryScale, LinearScale, Tooltip, BarElement, ArcElement, PointElement, Legend, Title } from 'chart.js'
import { Bar, Pie, Bubble } from 'react-chartjs-2'

// MUI imports
import { Grid, Paper, Typography, FormControl, Button, Select, InputLabel, MenuItem } from "@mui/material"
import { DataGrid } from '@mui/x-data-grid'

const dataGridData = (user) => {
  const col = Object.keys(user[0])
  let column = []
  col.forEach(col => {
    if (col === 'id') { return }
    column = [...column, { field: col, headerName: col, flex: 1 }]
  })

  let row = []
  user.forEach((u, index) => {
    row = [...row, {
      id: index,
      [col[0]]: u.gender,
      [col[1]]: u.name,
      [col[2]]: u.location,
      [col[3]]: u.email,
      [col[4]]: u.login,
      [col[5]]: u.dob,
      [col[6]]: u.registered,
      [col[7]]: u.phone,
      [col[8]]: u.cell,
      // [col[9]]: u.id,
      [col[10]]: u.picture,
      [col[11]]: u.nat,
    }]
  })
  return { column, row }
}

// Data aggregation for chart display
// By Gender
const getGender = (user) => {
  if (user === '') return 'no user data'
  let male = 0
  let female = 0
  user.forEach((user) =>
    user.gender === 'male' ? male += 1 : female += 1
  )
  return ({ male, female })
}

// By country
const getCountry = (user) => {
  if (user === '') return 'no user data'
  let countryList = {}
  user.forEach(user => {
    let country = user.location.country
    if (country in countryList) { countryList[country] += 1 } else if (country in countryList === false) { countryList[country] = 1 }
  })
  return countryList
}

const getAge = (user) => {
  if (user === '') return 'no user data'
  let ageList = {}
  user.forEach(user => {
    let age = user.dob.age
    if (age in ageList) { ageList[age] += 1 } else if (age in ageList === false) { ageList[age] = 1 }
  })
  return ageList
}

// just a meme to check how many same photo are in 1 set
// const getSamePhoto = (user) => {

// }

const chartElements = {
  backgroundColor: [
    'rgba(255, 99, 132, 0.3)',
    'rgba(255, 159, 64, 0.3)',
    'rgba(255, 205, 86, 0.3)',
    'rgba(75, 192, 192, 0.3)',
    'rgba(54, 162, 235, 0.3)',
    'rgba(153, 102, 255, 0.3)',
    'rgba(201, 203, 207, 0.3)'
  ],
  borderColor: [
    'rgb(255, 99, 132)',
    'rgb(255, 159, 64)',
    'rgb(255, 205, 86)',
    'rgb(75, 192, 192)',
    'rgb(54, 162, 235)',
    'rgb(153, 102, 255)',
    'rgb(201, 203, 207)'
  ],
}

const ChartJS = () => {
  const [user, setUser] = useState('')
  // just to create list of 100 to 5000 in a controlled component
  const [userSelect] = useState(() => {
    let nums = []
    for (let i = 100; i <= 5000; i += 100) {
      nums.push(i)
    }
    return nums
  })
  const [userNum, setUserNum] = useState('100')

  const handleClick = async () => {
    let result = await axios.get(`https://randomuser.me/api/?results=${userNum}`)
    const { data: { results } } = result
    setUser(results || 'No user data found')
    // Register chart type here since its needs to be render anyway

  }

  const handleUserNumChange = (event) => {
    event.preventDefault()
    const num = event.target.value
    setUserNum(userNum => num)
  }

  // Building Data grid!!!
  const parseObjData = (obj) => {
    if (obj === null) { return "No Data" }
    let temp = Object.entries(obj)
    let answer = ''
    temp.forEach(value => {
      if ((typeof (value[1])) === 'object') {
        let innerAnswer = parseObjData(value[1])
        answer += (innerAnswer)
      }
      answer += (value[1] + " ")
    })
    return answer
  }



  const dataGridSection = () => {
    if (user === '') return ('')

    const createDataGrid = () => {
      if (user === '') { return null }
      let { row, column } = dataGridData(user)
      let userWithID = row.map((c) => {
        let newObj = c
        newObj.name = parseObjData(c.name)
        newObj.location = parseObjData(c.location)
        newObj.login = parseObjData(c.login)
        newObj.dob = parseObjData(c.dob)
        newObj.registered = parseObjData(c.registered)
        // newObj.picture = <img src={c.picture.thumbnail} alt={newObj.name} />
        newObj.picture = c.picture.thumbnail
        return newObj
      })
      return <DataGrid rows={userWithID} columns={column} />
    }

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant='h4' align='center'>Data table</Typography>
        </Grid>
        <Grid item xs={12} sx={{ minHeight: 400, maxHeight: "100%", display: "flex", flexGrow: 1 }}>
          {createDataGrid()}
        </Grid>
      </Grid>)
  }

  // Create Chart!!!
  const createBarChart = () => {
    if (user === '') return <Typography variant='h6' fontWeight='bold' mt={3}>{'No data yet, click button above to see charts and table'}</Typography>
    let countryList = getCountry(user)
    let dataArray = Object.values(countryList)
    let labels = Object.keys(countryList)
    Chart.register(
      CategoryScale, // for label category in the chart
      LinearScale,
      BarElement, // for Bar chart
      Title,
    )
    return (<Bar
      datasetIdKey={labels}
      data={{
        labels,
        datasets: [
          {
            data: dataArray,
            backgroundColor: chartElements.backgroundColor,
            borderColor: chartElements.borderColor,
            borderWidth: 1
          }
        ]
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Random user by country',
          },
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          y: {
            // max: 20,
          }
        }
      }}
    />)
  }

  const createPieChart = () => {
    if (user === '') { return null }
    const gender = getGender(user)
    const labels = Object.keys(gender)
    const dataValue = Object.values(gender)
    Chart.register(
      CategoryScale, // for label category in the chart
      ArcElement, Tooltip, Legend)
    return (
      <Pie
        data={{
          labels,
          datasets: [{
            label: 'Gender',
            data: dataValue,
            backgroundColor: chartElements.backgroundColor,
            borderColor: chartElements.borderColor,
            borderWidth: 1
          }]
        }}
      />
    )
  }

  const createBubbleChart = () => {
    if (user === '') { return null }
    const age = getAge(user)
    let datax = Object.keys(age)
    let datay = Object.values(age)
    const dataSet = datax.map((value, index) => {
      return {
        x: value,
        y: datay[index],
        r: datay[index]
      }
    })
    const data = {
      datasets: [{
        label: 'Age',
        data: dataSet,
        backgroundColor: chartElements.backgroundColor,
      }]
    }
    Chart.register(PointElement)
    return (
      <Bubble data={data} />
    )
  }

  useEffect(() => { }, [user])

  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Grid item xs={12} pb={3} borderBottom={1} borderColor='divider'>
        <Typography variant='h5'>Data visualization and table</Typography>
        <Typography variant='subtitle1'>Expand from previous bits and take data to make it more presentatable by aggregate data into "Data Viz"</Typography>
      </Grid>
      <Grid container align='center'>
        <Grid item xs={12} mt={3}>
          <FormControl>
            <InputLabel id="user-amount-select-label">Number of random people</InputLabel>
            <Select
              labelId="user-amount-select-label"
              id="user-amount-select"
              label="Select number of users"
              placeholder="Select number of users"
              value={userNum}
              onChange={handleUserNumChange}
              sx={{ height: 37.5 }}
            >
              {userSelect.map(value => <MenuItem key={value} value={value.toString()}>{value}</MenuItem>)}
            </Select>
          </FormControl>
          {'         '}
          <Button variant='contained' onClick={handleClick}>Go!</Button>
          <Typography variant='subtitle1'>{'Call API for '}{userNum}{' users from '} https://randomuser.me/api/?results={userNum}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} align='center'>
          <Grid item xs={12}>
            {createBarChart()}
          </Grid>
          <Grid item xs={12} md={4}>
            {createPieChart()}
          </Grid>
          <Grid item xs={12} md={8}>
            {createBubbleChart()}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={3}>
        {dataGridSection()}
      </Grid>
    </Paper >
  )
}

export default ChartJS