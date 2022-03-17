// Core depenencies

// Component import
import ResumeTheme from './resumeTheme'
import PersonalDetail from './personalDetail'
import Social from './social'
import Skill from './skill'
import Experience from './experience'
import Education from './education'
import CertAndLicense from './certAndLicense'
import Language from './language'
// import honorAndAward from './honorAndAward'


// MUI Import
import {
  Grid, Typography,
  Accordion, AccordionSummary, AccordionDetails, Paper,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      default: return null
    }
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
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
  const { resumeTheme, setResumeTheme,
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
        <Typography variant='h5' align='center'>Details</Typography>
        <AccordionComponent title={'Personal Detail'} subTitle={''} state={personalDetail} setState={setPersonalDetail} />
        <AccordionComponent title={'Social'} subTitle={''} state={social} setState={setSocial} />
        <AccordionComponent title={'Skill'} subTitle={''} state={skill} setState={setSkill} />
        <AccordionComponent title={'Experience'} subTitle={'Job Experience'} state={experience} setState={setExperience} />
        <AccordionComponent title={'Language'} subTitle={''} state={language} setState={setLanguage} />
        <AccordionComponent title={'Education'} subTitle={''} state={education} setState={setEducation} />
        <AccordionComponent title={'Certification and License'} subTitle={''} state={certAndLicense} setState={setCertAndLicense} />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant='h5' align='center'>Style</Typography>
          <AccordionComponent title={'Resume Theme'} subTitle={'Choose theme'} state={resumeTheme} setState={setResumeTheme} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant='h5' align='center'>ToDos</Typography>
          Style editor
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Editor