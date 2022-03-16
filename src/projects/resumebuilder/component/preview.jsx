
// static component
import { socialIcon, skillLevelRate } from './staticFunction'

// MUI import
import {
  Grid, Box, Paper, Typography, Link, Stack, Icon,
} from "@mui/material"


// function resumeOrder (props) {

// }

const socialSection = (social) => {
  if (social === undefined || social.length === 0) { return null }
  return (
    <Grid item xs={12}>
      <Box sx={{ display: 'flex', flexBasis: 'auto', gap: 2 }}>
        {social.map((value, index) =>
          <Stack key={index} direction="row" alignItems="center">
            {socialIcon(value.platform)}
            <Link href={value.link} target="_blank" rel="noopener noreferrer">
              <Typography variant="body2"> {value.link}</Typography>
            </Link>
          </Stack>)}
      </Box>
    </Grid>
  )
}

function aboutSection (about) {
  if (about === undefined || about === '') { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>About</Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>{about}</Typography>
    </Grid>
  )
}

function skillSection (skill) {
  if (skill === undefined || skill.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Skills</Typography>
      {skill.map((value, index) =>
        <Typography key={index}>{value.skill}{' - '}{skillLevelRate(value.level)}</Typography>
      )}
    </Grid>
  )
}

function experienceSection (experience) {
  if (experience === undefined || experience.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Experience</Typography>
      {experience.map((exp, index) =>
        <Grid item xs={12} key={index} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid container>
            {/* Logo */}
            <Grid item xs={12} md={2}>
              {(exp.companyLogo === '') ? <Icon>location_city</Icon> :
                <img src={exp.companyLogo} alt={exp.companyName + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
              <br />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.companyName !== '') ? " - " : ''}
                {/* <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.companyName}</Link> */}
                {exp.companyName}
              </Typography>
              <Typography variant="subtitle1" fontWeight="500">{exp.from} {(exp.from !== '') ? ' - ' : ''} {(exp.workHere) ? 'Present' : exp.to}</Typography>
              <br />
              <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>{exp.description}</Typography>
            </Grid>
          </Grid>
        </Grid>)}
    </Grid>
  )
}

function languageSection (language) {
  if (language === undefined || language.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
      <Typography variant="subtitle1" fontWeight={'bold'} align="center">Language</Typography>
      {language.map((value, index) =>
        <Typography key={index}>{value.language}{' - '}{value.level}</Typography>
      )}
    </Grid>
  )
}

function Preview (props) {
  const { personalDetail, social, skill, experience, language } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">Preview</Typography>
        <Paper sx={{ displayPrint: 'contents', padding: 4 }}>
          <Grid container>
            <Grid item xs={9}>
              <Typography variant="subtitle2" color="gray">{personalDetail.address}</Typography>
              <Typography variant="subtitle2" color="gray">{personalDetail.city} {personalDetail.state !== '' ? ' ,' + personalDetail.state : ''} {personalDetail.country !== '' ? ' ,' + personalDetail.country : ''}</Typography>
              <Typography variant="subtitle2" fontWeight="bold">{personalDetail.tel}</Typography>
              <Typography variant="subtitle2" fontWeight="bold">{personalDetail.email}</Typography>
              <br />
              <Typography variant="h5">{personalDetail.fullname}</Typography>
              <Typography variant="subtitle2">{personalDetail.caption}</Typography>
              {socialSection(social)}
            </Grid>

            <Grid item xs={3} align="right">
              <img src={personalDetail.photo} alt={personalDetail.fullname} width="185px" height="auto" />
            </Grid>

            {aboutSection(personalDetail.about)}
            {skillSection(skill)}
            {experienceSection(experience)}
            {languageSection(language)}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Preview