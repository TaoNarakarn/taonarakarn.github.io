import { useRef, useEffect } from 'react'

import { Divider, Grid, Paper, Typography, Link, Stack, Icon } from '@mui/material'
import { Email, Phone } from '@mui/icons-material'
import { skillLevelRate, socialIcon } from '../staticFunction'
import { dummyData } from './dummyData'

// import experience from "../staticValue/experience"

// Dummy


// Style
const leftPane = {
  backgroundColor: 'rgb(226, 196, 155, 0.46)',
  minHeight: '29.7cm',
  padding: '1.5rem'
}

// const photoStyle = {
//   width: '170px',
//   height: 'auto',
//   borderRadius: "50%",
//   align: 'center',
//   boxShadow: '5px 5px 15px grey'
// }

const rightPane = {
  padding: '1.5rem'
}


// Left pane
function addressBlock (personalDetail) {
  const { email, address, city, state, country, tel } = personalDetail
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Contact / Address</Typography>
      <Stack direction='row' alignContent='center' spacing={1}><Email /><Typography variant="body1">{email}</Typography></Stack>
      <Stack direction='row' alignContent='center' spacing={1}><Phone /><Typography variant="body1">{tel}</Typography></Stack>
      <br />
      <Typography variant="body2">{address}</Typography>
      <Typography variant="body2">{city}</Typography>
      <Typography variant="body2">{state + ', ' + country}</Typography>
    </Grid>
  )
}

function skillBlock (skill, skillStyle) {
  if (skill === undefined || skill.lenght === 0) return null
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Skills</Typography>
      {skill.map((value, index) =>
        <Grid container item xs={12} key={index}>
          <Grid item xs={7}>{value.skill}</Grid>
          {skillStyle.displayType === 'circle' ? <Grid item xs={5} align='center'>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>
            : <Grid item xs={5} align='center' sx={{ paddingTop: 1.275 }}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>}
        </Grid>
      )}
    </Grid>
  )
}

function socialBlock (social) {
  if (social === undefined || social.lenght === 0) return null
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Social</Typography>
      {social.map((value, index) =>
        <Typography key={index} variant="body1">
          <Link href={value.link} underline="hover" target="_blank" rel="noopener noreferrer" color="inherit">{socialIcon(value.platform)} {value.platform}</Link>
        </Typography>
      )}
    </Grid>
  )
}

function languageBlock (language) {
  if (language === undefined || language.lenght === 0) return null
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Language</Typography>
      {language.map((value, index) =>
        <Grid container item xs={12} key={index}>
          <Grid item xs={6}>{value.language}</Grid>
          <Grid item xs={5}>{value.level}</Grid>
        </Grid>
      )}
    </Grid>
  )
}

// Right pane
function nameAndCaptionblock (personalDetail) {
  const { fullname, caption } = personalDetail
  return (
    <Grid item xs={12}>
      <Typography variant='h4' fontWeight='bold'>{fullname}</Typography>
      <Typography variant='subtitle2' fontWeight='bold'>{caption}</Typography>
    </Grid>
  )
}

function aboutBlock (personalDetail) {
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Profile</Typography>
      <Typography variant='body1' sx={{ whiteSpace: 'pre-line' }}>{personalDetail.about}</Typography>
    </Grid>
  )
}

function experienceBlock (experience) {
  if (experience === undefined || experience.lenght === 0) return null
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Work Experience{experience.length > 1 ? 's' : null}</Typography>
      {experience.map((exp, index) =>
        <Grid key={index} container item xs={12} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* <Grid item xs={12} md={3} align="center">
            {(exp.company.logo === '') ? <Icon>location_city</Icon> :
              <img src={exp.company.logo} alt={exp.company.name + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid> */}
          <Grid item xs={12} md={12}>
            <Grid container item xs={12} gap={1}>
              <Grid item xs={2}>
                {(exp.companyLogo === '') ? <Icon>location_city</Icon> :
                  <img src={exp.companyLogo} alt={exp.companyName + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" fontWeight="bold">{exp.position}</Typography>
                <Typography variant="subtitle1" fontWeight="bold">{exp.companyName}</Typography>
                <Typography variant="subtitle1" fontWeight="500">{exp.from + ' - ' + exp.to}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <br />
              <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>{exp.description}</Typography>
            </Grid>
          </Grid>
        </Grid>)}
    </Grid>
  )
}

function educationBlock (education) {
  if (education === undefined || education.lenght === 0) return null
  return (
    <Grid item xs={12} sx={{ marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Education</Typography>
      {education.map((value, index) =>
        <Grid container key={index}>
          <Grid item xs={12} md={2} pt={2}>
            {(value.logo === '') ? null :
              <img src={value.logo} alt={value.place} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant="h6" fontWeight="bold">{value.place}</Typography>
            <Typography variant="subtitle1" fontWeight="bold">{value.degree}{' - '}{value.major}</Typography>
            <Typography variant="subtitle2" fontWeight="500">{value.from}{' - '}{value.to}</Typography>
            {(value.grade === '') ? null :
              <Typography variant="subtitle1">{"Grade:" + value.grade}</Typography>}
            <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line', marginTop: 1 }}>{value.activities}</Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

function certAndLicenseBlock (certAndLicense) {
  if (certAndLicense === undefined || certAndLicense.lenght === 0) return null
  return (
    <Grid item xs={12} sx={{ marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Certificate and License</Typography>
      {certAndLicense.map((value, index) =>
        <Grid container key={index}>
          <Grid item xs={12} md={2}>
            {/* {(value.certImage === '') ? null :
              <img src={value.certImage} alt={value.name} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
            <br /> */}
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography variant="h6" fontWeight="bold">{value.name}</Typography>
            <Typography variant="subtitle2">by : {value.organization}</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Issued: {value.issueDate} {value.notExpire ? '  (No expriation date)' : ' - ' + value.expireDate}</Typography>
            {(value.certID !== '') ? <Typography variant="subtitle1">Credential ID: {value.certID}</Typography> : null}
            {(value.certURL !== '') ? <Typography variant="subtitle1"><Link href={value.certURL} target="_blank" rel="noopener noreferrer">Link to credential</Link></Typography> : null}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

function RbTheme1 (props) {
  const resumeRef = useRef()
  const { personalDetail, social, skill, experience, language, education, certAndLicense } = props.data
  // const { personalDetail, social, skill, experience, language, education, certAndLicense } = dummyData
  const { setResumeTheme, photoStyle, skillStyle } = props.style
  useEffect(() => {
    setResumeTheme(current => ({ ...current, ref: resumeRef.current }))
  }, [setResumeTheme])
  return (
    <Grid item xs={12}>
      <Paper id='RbTheme1' className='a4' elevation={3} ref={resumeRef} >
        <Grid container>
          <Grid item xs={4} style={leftPane}>
            <Typography align='center'><img src={personalDetail.photo} alt={personalDetail.fullname}
              style={{ borderRadius: photoStyle.radius, width: photoStyle.width, boxShadow: '5px 5px 15px grey' }} /></Typography>
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {addressBlock(personalDetail)}
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {skillBlock(skill, skillStyle)}
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {socialBlock(social)}
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {languageBlock(language)}
          </Grid>
          <Grid item xs={8} style={rightPane}>
            {nameAndCaptionblock(personalDetail)}
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {aboutBlock(personalDetail)}
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {experienceBlock(experience)}
            {educationBlock(education)}
            <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
            {certAndLicenseBlock(certAndLicense)}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default RbTheme1