// MUI Import
import { Grid, Link, Typography, Button, Icon } from "@mui/material"

// Static value
import experience from "../staticValue/experience"

const Experience = () => {
  if (experience.length === 0) return (<Typography variant='h5' fontWeight='bold' align='center'>{'No experience'}</Typography>)
  const fetchExperience = (experience) => {
    return (
      experience.map((exp, index) =>
        <Grid key={index} item container xs={12} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid item xs={12} md={2} lg={2} align="center">
            {(exp.company.logo === '') ? <Icon>location_city</Icon> :
              <img src={exp.company.logo} alt={exp.company.name + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.company.name !== '') ? " - " : ''}
              <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.company.name}</Link></Typography>
            <Typography variant="subtitle1" fontWeight="500">{exp.from + ' - ' + exp.to}</Typography>
            <br />
            {exp.description.map((desc, index) => <Typography variant="subtitle1" key={index}>{desc}</Typography>)}
          </Grid>
        </Grid>
      )
    )
  }

  return (
    <Grid container variant="containerGrid" sx={{ paddingLeft: { md: 'none', lg: 30 }, paddingRight: { md: 'none', lg: 30 } }}>
      <Grid item xs={12} className="mainGrid" variant="mainGrid" sx={{ paddingTop: { xs: 3, md: 7 }, paddingBottom: 5 }}>
        <Grid item xs={12} md={11}>
          <Typography variant="h4">Work experiences</Typography>
          <Typography variant="h6">For PDF version click <Button variant="contained" href="https://drive.google.com/file/d/1ad9STGtWFWMHsVv0hXtVWPKz93fRLL6P/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Button></Typography>
        </Grid>
        <Grid item xs={12}>
          {/* add tab menu here please :) with transition from frame-motion */}
        </Grid>
        {fetchExperience(experience)}
      </Grid>
    </Grid >
  )
}

export default Experience 