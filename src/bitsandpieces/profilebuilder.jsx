// Core dependencies
import { useEffect, useState } from 'react'

// MUI imports
import { Typography, Grid, Button, InputLabel, TextField, Link, Paper, Icon } from "@mui/material"

const demoData = [{
  company: {
    name: 'The black order',
    logo: 'https://steamuserimages-a.akamaihd.net/ugc/784123877860954963/FF2B74D482EC8DE4E2C9108E2B52F3868C8DCDB7/',
    // website: 'https://en.wikipedia.org/wiki/Thanos_(Marvel_Cinematic_Universe)',
  },
  position: 'John Doe',
  location: 'Titan, Saturn',
  from: 'Jan 2000',
  to: 'Dec 2020',
  workHere: true,
  description: [
    'Found all infinity stones',
    'Able to get a giant to build the infinity gaunlet',
    'Responsible for self initiated project "balance of the galaxy" and completed it',
    'Trade 1 daughter for 1 Soul stone',
    'Stab Tony Stark in the gut'
  ],
}]

let template = {
  company: {
    name: '',
    logo: '',
  },
  position: '',
  location: '',
  from: '',
  to: '',
  workHere: false,
  description: [
    '',
  ],
}


const fetchExperience = (experience) => {
  if (experience === '' || experience.length === 0) return (<Typography variant='h5' fontWeight='bold' align='center'>{'You need more experience'}</Typography>)
  return (
    experience.map((exp, index) =>
      <Grid item xs={12} key={index} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid container>
          <Grid item xs={12} md={1} align="center">
            {(exp.company.logo === '') ? <Icon>location_city</Icon> :
              <img src={exp.company.logo} alt={exp.company.name + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid>
          <Grid item xs={12} md={11}>
            <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.company.name !== '') ? " - " : ''}
              {/* <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.company.name}</Link> */}
              {exp.company.name}
            </Typography>
            <Typography variant="subtitle1" fontWeight="500">{exp.from + ' - ' + exp.to}</Typography>
            <br />
            {exp.description.map((desc, index) => <Typography variant="subtitle1" key={index}>{desc}</Typography>)}
          </Grid>
        </Grid>
      </Grid>
    )
  )
}

// Start with only experience first (add,update,delete) then move up to name, title, photo

const ProfileBuilder = () => {
  const [experience, setExperience] = useState('') // all experience
  const [exp, setExp] = useState(template) // current add,update,delete experience

  const handleExpChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    switch (name) {
      case 'companyName':
        setExp(currentExp => ({ ...currentExp, company: { name: value } }))
        break
      case 'companyLogo':
        setExp(currentExp => ({ ...currentExp, company: { logo: value } }))
        break
      default: setExp(currentExp => ({ ...currentExp, [name]: value }))
    }

  }
  useEffect(() => {
    setExperience(current => demoData)
  }, [])
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid item xs={12} pb={3} borderBottom={1} borderColor='divider'>
          <Typography variant='h4'>Profile builder</Typography>
          <Typography variant='subtitle1'>Got this idea from experience page to keep data in JSON and map them out</Typography>
        </Grid>
      </Grid>
      {/* fill area */}
      <Grid item xs={12} mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* form */}
            <Paper elevation={5}>
              <Grid container>
                <Grid item xs={12}>
                  {/* <Typography variant='h6' fontWeight='bold'>Company</Typography> */}
                  <TextField id="position" name="position" type="text" placeholder="Position" label="Position" onChange={handleExpChange} value={exp.position} />
                  <TextField id="companyName" name="companyName" type="text" placeholder="Company Name" label="Company Name" onChange={handleExpChange} value={exp.company.name} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* json preview */}
            <Paper elevation={5}>
              <Grid container>
                <Grid item xs={12}>
                  JSON preview in here
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* Profile area */}
        {fetchExperience(experience)}
      </Grid>
    </Grid>
  )
}

export default ProfileBuilder