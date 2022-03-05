// Dependencies import
import React, { useState } from 'react'
import axios from "axios"

import countryList from '../staticValue/countryList'

// MUI imports
import {
  Typography, Button, FormControl, Box, Grid,
  Card, CardContent, CardMedia, Link, Divider, Select, MenuItem, InputLabel, TextField, Paper,
  TableContainer, Table, TableHead, TableRow, TableBody, TableCell
} from "@mui/material"

// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const checkObj = (obj) => {
  // console.log(typeof (obj))
  if (obj === null) { return <span>No Data Ja</span> }
  if (typeof (obj) !== 'object') { return obj.toString() }
  let temp = Object.entries(obj)
  return (
    temp.map((value) => (
      ((typeof (value[1]) === 'object') ? checkObj(value[1]) :
        (value[0] === null || value[1] === null) ?
          <span>No Data</span> :
          (<React.Fragment key={value[0].toString()}><span>{value[0].toString()} : {value[1].toString()}</span><br /></React.Fragment>)
      )
    )
    )
  )
}

const cardify = (obj) => {
  if (obj === '') { return 'No user data' }
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {obj.name.first + " " + obj.name.last}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {obj.location.country + " / " + obj.location.city}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Phone : {obj.phone}
          </Typography>
          <Link href={`#`} variant="subtitle1">Edit Profile...</Link>
          {/* <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography> */}
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
          alt={obj.name.first + " " + obj.name.last}
          image={obj.picture.large}
        />
      </Card>
    </Grid>
  )
}

const generateTable = (obj) => {
  if (obj === '') { return 'No user data' }
  let user = Object.entries(obj)
  // Test MUI DataGrid
  // const column = []
  // const row = []
  // row = { id: index, col1: value1, col2L value2 }
  // row = { id: index, ...col${ index }: value
  // user.map((value, index) => {
  //   column.push({ field: value[0], headerName: value[0] })
  //   let rowId = user.length - (user.length - index)

  //   row.push({ id: rowId, [value[0]]: value[1] })
  // })
  // console.log(column)
  // console.log(row)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, maxWidth: "100%" }} aria-label="user table">
        <TableHead>
          <TableRow>
            <TableCell component="th"></TableCell>
            {user.map((value, index) =>
              <TableCell component="th" key={index}>{value[0]}</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell></TableCell>
            {user.map((value, index) =>
              <TableCell key={value[0]}>{typeof (obj) === 'object' ? checkObj(value[1]) : value[1]}</TableCell>
            )}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const userDetail = (user) => {
  if (user === undefined || user === '') { return <Typography variant='h6'>No  Data</Typography> }

  let pronounce = ''
  switch (user.gender) {
    case 'female':
      pronounce = 'She/Her'
      break
    case 'male':
      pronounce = 'He/Him'
      break
    default: pronounce = 'NotSay'
  }
  const handleGenderChange = (event) => {
    event.preventDefault()
    user.gender = event.target.value
  }
  const handlePronounceChange = (event) => {
    event.preventDefault()
    pronounce = event.target.value
  }
  const handleTitleChange = (event) => {
    event.preventDefault()
    user.title = event.target.value
  }
  const handleCountryChange = (event) => {
    event.preventDefault()
    user.location.country = event.target.value
  }
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}><Typography variant='h6'>Personal Infomation : </Typography></Grid>
        <Grid item xs={12} md={3}>
          <img style={{ width: '100%' }} src={user.picture.large} alt={user.name.first + " " + user.name.last} />
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={1} sx={{ marginBottom: 2 }}>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="gender-select-label">Gender</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender-select"
                  label="Gender"
                  value={user.gender}
                  onChange={handleGenderChange}
                >
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                  <MenuItem value={'NotSay'}>Prefer not to say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="pronounce-select-label">Pronounce</InputLabel>
                <Select
                  labelId="pronounce-select-label"
                  id="pronounce-select"
                  label="Pronounce"
                  value={pronounce}
                  onChange={handlePronounceChange}
                >
                  <MenuItem value={'He/Him'}>He/Him</MenuItem>
                  <MenuItem value={'She/Her'}>She/Her</MenuItem>
                  <MenuItem value={'They/Them'}>They/Them</MenuItem>
                  <MenuItem value={'NotSay'}>Prefer not to say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="title-select-label">title</InputLabel>
                <Select
                  labelId="title-select-label"
                  id="title-select"
                  label="title"
                  value={user.name.title}
                  onChange={handleTitleChange}
                >
                  <MenuItem value={'Mr'}>Mister (Mr)</MenuItem>
                  <MenuItem value={'Miss'}>Miss</MenuItem>
                  <MenuItem value={'Mrs'}>Misses (Mrs)</MenuItem>
                  <MenuItem value={'Ms'}>Miss (Ms)</MenuItem>
                  <MenuItem value={'Doctor'}>Doctor</MenuItem>
                  <MenuItem value={'NotSay'}>Prefer not to say</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField fullWidth id="dateofbirth" name="dateofbirth" label="Date of birth" value={user.dob.date} />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth required id="firstname" name="firstname" label="Firstname" value={user.name.first} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth required id="lastname" name="lastname" label="Lastname" value={user.name.last} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth required id="tel" name="tel" label="Contact" value={user.cell} />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth required id="email" name="email" label="Email" value={user.email} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}><Divider /><Typography variant='h6'>Address : </Typography></Grid>
        {/* Address left */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth id="streetaddress" name="streetaddress" label="Street Address" value={user.location.street.number + " " + user.location.street.name} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required id="city" name="city" label="City" value={user.location.city} />
            </Grid>
          </Grid>
        </Grid>
        {/* Address right */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth required id="state" name="state" label="State" value={user.location.state} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="country-select-label">Country</InputLabel>
                <Select
                  labelId="country-select-label"
                  id="country-select"
                  label="country"
                  value={user.location.country}
                  onChange={handleCountryChange}
                  placeholder="Select Country"
                >
                  {countryList.map((value) =>
                    <MenuItem value={value}>{value}</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}><Divider /><Typography variant='h6'>System : </Typography></Grid>
        {/* System left */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='body1'>Registered : {user.registered.date} </Typography>
              <Typography variant='body1'>Registered for : {user.registered.age} years</Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* System Right */}
        <Grid item xs={12} md={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant='body1'>Username : {user.login.username} </Typography>
              <Typography variant='body1'>UUID : {user.login.uuid}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper >
  )
}

const userDisplay = (user) => {
  if (user === undefined || user === '') { return <Typography variant='h6' sx={{ paddingTop: 3 }}>{'No data yet!'}</Typography> }
  return (
    <>
      <br /><Divider /><br />
      <Typography variant='h6'>Display as card from MUI</Typography>
      <Box>{cardify(user)}</Box>
      <br /><Divider /><br />
      <Typography variant='h6'>Raw data (in table format) table header is dynamic it is a list of keys from returned object</Typography>
      <Box>{generateTable(user)}</Box>
      <br /><Divider /><br />
      <Typography variant='h6'>Above looks really bad, If make it to looks more presentable <strong>(Can't edit because I didn't setup state control for these inputs)</strong></Typography>
      <br /><Divider /><br />
      <Box>{userDetail(user)}</Box>
      <br /><Divider /><br />
      <Typography variant='h6'><strong>Whats raw data looks like (stringify)</strong></Typography>
      <Box><Typography variant='body1' sx={{ wordWrap: 'break-word' }}>{JSON.stringify(user)}</Typography></Box>
    </>
  )
}

const RandomUser = () => {
  const [user, setUser] = useState('')
  const handleClick = async () => {
    let result = await axios.get('https://randomuser.me/api/')
    const { data: { results } } = result
    setUser(results[0] || 'No user data found')
  }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Typography variant='h4'>Get random user data from randomuser API using Axios</Typography>
      <Typography variant='subtitle1'>Get 1 user data every click and put them on different display style</Typography>
      <Typography variant='subtitle1'>Click button below to get user</Typography>
      <br />
      <Button variant="contained" onClick={handleClick}>Get user</Button>
      <br />
      {userDisplay(user)}
    </Box >
  )
}

export default RandomUser