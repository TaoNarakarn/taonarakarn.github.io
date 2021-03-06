// Core depenencies

// Component import
// Detail section
import PersonalDetail from './dataComponent/personalDetail'
import Social from './dataComponent/social'
import Skill from './dataComponent/skill'
import Experience from './dataComponent/experience'
import Education from './dataComponent/education'
import CertAndLicense from './dataComponent/certAndLicense'
import Language from './dataComponent/language'
// import honorAndAward from './dataComponent/honorAndAward'
// Style section
import ResumeTheme from './styleComponent/resumeTheme'
import PhotoStyle from './styleComponent/photoStyle'
import SkillStyle from './styleComponent/skillStyle'

// MUI Import
import {
  Grid, Typography,
  Accordion, AccordionSummary, AccordionDetails, Paper,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material';

function AccordionComponent (props) {
  // State is the main state that will show on the preview
  const { title, subTitle, state, setState } = props
  function renderComponent (title) {
    switch (title) {
      case 'Personal Detail': return <PersonalDetail state={state} setState={setState} />
      case 'Skill': return <Skill state={state} setState={setState} />
      case 'Social': return <Social state={state} setState={setState} />
      case 'Experience': return <Experience state={state} setState={setState} />
      case 'Language': return <Language state={state} setState={setState} />
      case 'Education': return <Education state={state} setState={setState} />
      case 'Certification and License': return <CertAndLicense state={state} setState={setState} />
      case 'Resume Theme': return <ResumeTheme state={state} setState={setState} />
      case 'Photo Style': return <PhotoStyle state={state} setState={setState} />
      case 'Skill Style': return <SkillStyle state={state} setState={setState} />
      default: return null
    }
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={title}
        id={title}
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        <Typography variant="subtitle1" fontWeight="bold" sx={{ width: '33%', flexShrink: 0 }}>{title}</Typography>
        {subTitle === '' ? null : <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>{subTitle}</Typography>}
      </AccordionSummary>
      <AccordionDetails>
        {renderComponent(title)}
      </AccordionDetails>
    </Accordion>
  )
}

function Editor (props) {
  const {
    resumeTheme, setResumeTheme,
    photoStyle, setPhotoStyle,
    skillStyle, setSkillStyle,
    personalDetail, setPersonalDetail,
    social, setSocial,
    skill, setSkill,
    language, setLanguage,
    experience, setExperience,
    education, setEducation,
    certAndLicense, setCertAndLicense } = props
  return (
    <Grid container spacing={3} className="no-print">
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant='body1' sx={{ marginTop: 1, marginBottom: 1 }}>Input information here and see preview on the right</Typography>
          <AccordionComponent title={'Personal Detail'} subTitle={''} state={personalDetail} setState={setPersonalDetail} />
          <AccordionComponent title={'Social'} subTitle={''} state={social} setState={setSocial} />
          <AccordionComponent title={'Skill'} subTitle={''} state={skill} setState={setSkill} />
          <AccordionComponent title={'Experience'} subTitle={'Job Experience'} state={experience} setState={setExperience} />
          <AccordionComponent title={'Language'} subTitle={''} state={language} setState={setLanguage} />
          <AccordionComponent title={'Education'} subTitle={''} state={education} setState={setEducation} />
          <AccordionComponent title={'Certification and License'} subTitle={''} state={certAndLicense} setState={setCertAndLicense} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant='h5' align='center'>Style</Typography>
          <Typography variant='body1' sx={{ marginTop: 1, marginBottom: 1 }}>Here you can edit resume style from color to photo size and shape</Typography>
          <AccordionComponent title={'Resume Theme'} subTitle={'Choose theme'} state={resumeTheme} setState={setResumeTheme} />
          <AccordionComponent title={'Photo Style'} subTitle={'Change photo looks'} state={photoStyle} setState={setPhotoStyle} />
          <AccordionComponent title={'Skill Style'} subTitle={'Change skill looks'} state={skillStyle} setState={setSkillStyle} />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Editor