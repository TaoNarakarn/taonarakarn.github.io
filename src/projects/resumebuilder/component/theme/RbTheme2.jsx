import { useRef, useEffect } from 'react'

import { Divider, Grid, Paper, Typography, Link, Stack, Icon, Box } from '@mui/material'
import { Email, PhoneRounded, LocationOn } from '@mui/icons-material'

import { skillLevelRate, socialIcon } from '../staticFunction'
import { dummyData } from './dummyData'


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
      <Typography variant='h6'></Typography>
      <Typography variant='body1' sx={{ whiteSpace: 'pre-line' }}>{personalDetail.about}</Typography>
    </Grid>
  )
}

function socialBlock (social) {
  if (social === undefined || social.lenght === 0) return null
  return (
    <Box display='flex' gap={2} xs={12}>
      {social.map((value, index) =>
        <Typography key={index} variant="body1">
          <Link href={value.link} underline="hover" target="_blank" rel="noopener noreferrer" color="inherit">{socialIcon(value.platform)} {value.link}</Link>
        </Typography>
      )}
    </Box>

  )
}

function experienceBlock (experience) {
  if (experience === undefined || experience.lenght === 0) return null
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Work Experience{experience.length > 1 ? 's' : null}</Typography>
      {experience.map((exp, index) =>
        <Grid key={index} container item xs={12} pt={2} pb={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
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

function skillBlock (skill, skillStyle) {
  if (skill === undefined || skill.lenght === 0) return null
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Skills</Typography>
      {skill.map((value, index) =>
        <Grid container item xs={12} key={index}>
          <Grid item xs={8}>{value.skill}</Grid>
          {skillStyle.displayType === 'circle' ? <Grid item xs={3}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>
            : <Grid item xs={4} align='center' sx={{ paddingTop: 1.275 }}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>}
        </Grid>
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
          <Grid item xs={8}>{value.language}</Grid>
          <Grid item xs={4}>{value.level}</Grid>
        </Grid>
      )}
    </Grid>
  )
}

function educationBlock (education) {
  if (education === undefined || education.lenght === 0) return null
  return (
    <Grid item xs={12} sx={{ marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Education</Typography>
      {education.map((value, index) =>
        <Grid item xs={12} key={index}>
          <Typography variant="subtitle1" fontWeight="bold">{value.place}</Typography>
          <Typography variant="subtitle1" fontWeight="bold">{value.degree}{' - '}{value.major}</Typography>
          <Typography variant="subtitle2" fontWeight="500">{value.from}{' - '}{value.to}</Typography>
          {(value.grade === '') ? null :
            <Typography variant="body1">{"Grade:" + value.grade}</Typography>}
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


function RbTheme2 (props) {
  const resumeRef = useRef()
  const { personalDetail, social, skill, experience, language, education, certAndLicense } = props.data
  // const { personalDetail, social, skill, experience, language, education, certAndLicense } = dummyData
  const { setResumeTheme, photoStyle, skillStyle } = props.style
  useEffect(() => {
    setResumeTheme(current => ({ ...current, ref: resumeRef.current }))
  }, [setResumeTheme])

  return (
    <Grid item xs={12}>
      <Paper id='RbTheme2' className='a4' elevation={3} ref={resumeRef}>
        <Grid item xs={12} sx={{ height: 14, backgroundColor: '#3a3a3b', marginBottom: 1 }} />
        <Grid container >
          <Grid item container xs={12} sx={{ padding: 3 }}>
            <Grid item xs={9}>
              {nameAndCaptionblock(personalDetail)}
              <br />
              {aboutBlock(personalDetail)}
              <br />
              {socialBlock(social)}
            </Grid>
            <Grid item xs={3}>
              <Typography align='center'><img src={personalDetail.photo} alt={personalDetail.fullname}
                style={{ borderRadius: photoStyle.radius, width: photoStyle.width, boxShadow: '5px 5px 15px grey' }} /></Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Box display='flex' sx={{ flex: 1, backgroundColor: '#3a3a3b', alignItems: 'center' }}>
              <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Stack direction='row' spacing={1} justifyContent="center">
                  <PhoneRounded sx={{ fontSize: 40, color: 'white', marginTop: 1 }} />
                  <Box>
                    <Typography variant='h6' fontWeight='bold' color="white">Phone</Typography>
                    <Typography variant='body1' color="#a6a6a6">{personalDetail.tel}</Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ flexGrow: 1, padding: 2 }}>
                <Stack direction='row' spacing={1} justifyContent="center">
                  <Email sx={{ fontSize: 40, color: 'white', marginTop: 1 }} />
                  <Box>
                    <Typography variant='h6' fontWeight='bold' color="white">Email</Typography>
                    <Typography variant='body1' color="#a6a6a6">{personalDetail.email}</Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ flexGrow: 1, padding: 2, backgroundColor: '#494949' }}>
                <Stack direction='row' spacing={1} justifyContent="center">
                  <LocationOn sx={{ fontSize: 40, color: 'white', marginTop: 1 }} />
                  <Box>
                    <Typography variant='h6' fontWeight='bold' color="white">Address</Typography>
                    <Typography variant='body1' color="#a6a6a6">{personalDetail.address + ',' + personalDetail.country}</Typography>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item container xs={12} sx={{ backgroundColor: '#e8e8e8', padding: 3 }} >
            <Grid item xs={8}>
              {experienceBlock(experience)}
              {certAndLicenseBlock(certAndLicense)}
            </Grid>
            <Grid item xs={4}>
              {skillBlock(skill, skillStyle)}
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {languageBlock(language)}
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {educationBlock(education)}
            </Grid>
          </Grid>
        </Grid>
      </Paper >
    </Grid >
  )
}

export default RbTheme2