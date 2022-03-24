import React, { useEffect, useRef } from 'react'
// static component
import { socialIcon, skillDisplay } from '../staticFunction'
import { dummyData } from './dummyData'

// MUI import
import {
  Grid, Box, Paper, Typography, Link, Stack, Icon,
} from "@mui/material"
import { Email, Phone } from '@mui/icons-material'

const socialSection = (social) => {
  if (social === undefined || social.length === 0) { return null }
  return (
    <Grid item xs={12}>
      <Box sx={{ display: 'flex', flexBasis: 'auto', gap: 2 }}>
        {social.map((value, index) =>
          <Stack key={index} direction="row" alignItems="center" spacing={0.5}>
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
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingRight: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>About</Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>{about}</Typography>
    </Grid>
  )
}

// 2 Column display
// function skillSection (skill, skillStyle) {
//   if (skill === undefined || skill.length === 0) { return null }
//   return (
//     <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
//       <Typography variant="h6" fontWeight={'bold'}>Skills</Typography>
//       <Grid container>
//         {skill.map((value, index) => {
//           return (index % 2 === 0) ?
//             <React.Fragment key={index}>
//               <Grid item xs={3}><Typography variant='body1'>{value.skill}</Typography></Grid>
//               {skillStyle.displayType === 'circle' ? <Grid item xs={3}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>
//                 : <Grid item xs={3} align='center' sx={{ paddingTop: 1.275, paddingRight: 1 }}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>}
//             </React.Fragment>
//             : (index % 2 === 1) ?
//               <React.Fragment key={index}>
//                 <Divider />
//                 <Grid item xs={3}><Typography variant='body1'>{value.skill}</Typography></Grid>
//                 {skillStyle.displayType === 'circle' ? <Grid item xs={3}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>
//                   : <Grid item xs={3} align='center' sx={{ paddingTop: 1.275, paddingRight: 1 }}>{skillLevelRate(value.level, skillStyle.displayType)}</Grid>}
//               </React.Fragment>
//               : null
//         }
//         )}
//       </Grid>
//     </Grid >
//   )
// }


function skillSection (skill, skillStyle) {
  if (skill === undefined || skill.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderLeft: 1, borderColor: 'divider', marginTop: 1, paddingLeft: 1, paddingTop: 1, paddingBottom: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Skills</Typography>
      {skill.map((value, index) =>
        <Grid item container xs={12} key={index}>
          {skillDisplay(value, index, skillStyle, 7, 5)}
        </Grid>
      )}
    </Grid >
  )
}

function languageSection (language) {
  if (language === undefined || language.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderLeft: 1, borderColor: 'divider', paddingLeft: 1, paddingTop: 1, paddingBottom: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Language</Typography>
      <Grid container>
        {language.map((value, index) =>
          <React.Fragment key={index}>
            <Grid item xs={6}><Typography variant='body1'>{value.language}</Typography></Grid>
            <Grid item xs={6} align='center'>{value.level}</Grid>
          </React.Fragment>
        )}
      </Grid>
    </Grid>
  )
}

// 2 column display
// function languageSection (language) {
//   if (language === undefined || language.length === 0) { return null }
//   return (
//     <Grid item xs={12} sx={{ borderTop: 1, borderLeft: 1, borderColor: 'divider', paddingLeft: 1, paddingTop: 1, paddingBottom: 1 }}>
//       <Typography variant="h6" fontWeight={'bold'}>Language</Typography>
//       <Grid container>
//         {language.map((value, index) => {
//           return (index % 2 === 0) ?
//             <React.Fragment key={index}>
//               <Grid item xs={3}><Typography variant='body1'>{value.language}</Typography></Grid>
//               <Grid item xs={3}>{value.level}</Grid>
//             </React.Fragment>
//             : (index % 2 === 1) ?
//               <React.Fragment key={index}>
//                 <Divider />
//                 <Grid item xs={3}><Typography variant='body1'>{value.language}</Typography></Grid>
//                 <Grid item xs={3}>{value.level}</Grid>
//               </React.Fragment>
//               : null
//         }
//         )}
//       </Grid>
//     </Grid>
//   )
// }

function experienceSection (experience) {
  if (experience === undefined || experience.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', paddingTop: 2 }}>
      <Typography variant="h6" fontWeight={'bold'}>Work Experience</Typography>
      {experience.map((exp, index) =>
        <Grid item xs={12} key={index} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid container>
            {/* Logo */}
            <Grid item md={2}>
              {(exp.companyLogo === '') ? <Icon>location_city</Icon> :
                <img src={exp.companyLogo} alt={exp.companyName + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
              <br />
            </Grid>
            <Grid item md={10}>
              <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.companyName !== '') ? " - " : ''}{exp.companyName}</Typography>
              <Typography variant="subtitle1" fontWeight="500">{exp.from} {(exp.from !== '') ? ' - ' : ''} {(exp.workHere) ? 'Present' : exp.to}</Typography>
              <br />
              <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>{exp.description}</Typography>
            </Grid>
          </Grid>
        </Grid>)}
    </Grid>
  )
}

function educationSection (education) {
  if (education === undefined || education.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Education</Typography>
      {education.map((value, index) =>
        <Grid container key={index}>
          <Grid item md={2} pt={2}>
            {(value.logo === '') ? null :
              <img src={value.logo} alt={value.place} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
            <br />
          </Grid>
          <Grid item md={10}>
            <Typography variant="h6" fontWeight="bold">{value.place}</Typography>
            <Typography variant="subtitle1" fontWeight="bold">{value.degree}{' - '}{value.major}</Typography>
            <Typography variant="subtitle2" fontWeight="500">{value.from}{' - '}{value.to}</Typography>
            {(value.grade === '') ? null :
              <Typography variant="subtitle1">{"Grade:" + value.grade}</Typography>}
            <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>{value.activities}</Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

function certAndLicenseSection (certAndLicense) {
  if (certAndLicense === undefined || certAndLicense.length === 0) { return null }
  return (
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
      <Typography variant="h6" fontWeight={'bold'}>Certificate and License</Typography>
      {certAndLicense.map((value, index) =>
        <Grid container key={index}>
          <Grid item md={2}>
            {(value.certImage === '') ? null :
              <img src={value.certImage} alt={value.name} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
            <br />
          </Grid>
          <Grid item md={10}>
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

function DefaultTheme (props) {
  const resumeRef = useRef()
  // const { personalDetail, social, skill, experience, language, education, certAndLicense } = props.data
  const { personalDetail, social, skill, experience, language, education, certAndLicense } = dummyData
  const { setResumeTheme, photoStyle, skillStyle } = props.style
  useEffect(() => {
    setResumeTheme(current => ({ ...current, ref: resumeRef.current }))
  }, [setResumeTheme])
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className='a4' sx={{ border: 'none' }}>
          <Box ref={resumeRef} sx={{ pageBreakAfter: 'always' }}>
            <Grid container sx={{ padding: 4, }}>
              <Grid item xs={9}>
                <Typography variant="h4" fontWeight='bold'>{personalDetail.fullname}</Typography>
                <Typography variant="subtitle1">{personalDetail.caption}</Typography>
                <br />
                <Typography variant="subtitle2" color="gray">{personalDetail.address + ' ' + personalDetail.city} {personalDetail.state !== '' ? ' ,' + personalDetail.state : ''} {personalDetail.country !== '' ? ' ,' + personalDetail.country : ''}</Typography>
                <Stack direction="row" spacing={1}>
                  <Phone fontSize="small" /><Typography variant="subtitle2" fontWeight="bold">{personalDetail.tel}</Typography>
                  <Email fontSize="small" /><Typography variant="subtitle2" fontWeight="bold">{personalDetail.email}</Typography>
                </Stack>
                <br />
                {socialSection(social)}
              </Grid>
              <Grid item xs={3} align="right">
                <img src={personalDetail.photo} alt={personalDetail.fullname} height="auto"
                  style={{ borderRadius: photoStyle.radius, width: photoStyle.width }}
                />
              </Grid>
              <Grid container item xs={12}>
                <Grid item xs={8}>
                  {aboutSection(personalDetail.about)}
                </Grid>
                <Grid item xs={4}>
                  {skillSection(skill, skillStyle)}
                  {languageSection(language)}
                </Grid>
              </Grid>
              {experienceSection(experience)}
              {educationSection(education)}
              {certAndLicenseSection(certAndLicense)}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default DefaultTheme