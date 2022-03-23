// Dependencies
import { useState, } from "react"
import ReactToPrint from 'react-to-print'

// Component import
import Editor from "./component/editor"
import DefaultTheme from "./component/theme/defaultTheme"
import RbTheme1 from "./component/theme/RbTheme1"
import RbTheme2 from "./component/theme/RbTheme2"

// MUI Import
import {
  Grid, Typography, Paper, Button
  // Drawer, Box 
} from "@mui/material"

// export const ResumeContext = createContext(null)

const personalDetailTemplate = {
  fullname: '',
  email: '',
  caption: '',
  address: '',
  city: '',
  state: '',
  country: '',
  tel: '',
  about: '',
  photo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
}

const resumeThemeTemplate = {
  theme: 'Default',
  ref: '',
}

const visibilityTemplate = {
  social: true,
  skill: true,
  education: true,
  language: true,
  certAndLicense: true,
}

const photoStyleTemplate = {
  radius: 20,
  width: '185px',
  boxShadow: '0px 0px 0px black',
}

const skillStyleTemplate = {
  displayType: 'circle',
  color: 'inherit'
}

// const menuTemplate = {
//   social: {
//     visibility: true,
//     showInEditor: true,
//   },
// }

// ToDo
// create a template done 1 need 2 more
// switching template
// learn about export to PDF jsPDF? React-PDF? (I can print now but user still need to click save to PDF from their printing page)
// add a style component (font family, size and color)
// change from hotlink to image to upload image to browser local storage

function ResumeBuilder () {
  // Visual section
  const [componentVisibility, setComponentVisibility] = useState(visibilityTemplate)
  const [resumeTheme, setResumeTheme] = useState(resumeThemeTemplate) // for resume theme
  const [photoStyle, setPhotoStyle] = useState(photoStyleTemplate) // for Photo Style
  const [skillStyle, setSkillStyle] = useState(skillStyleTemplate) // Skill style

  // Data section
  const [personalDetail, setPersonalDetail] = useState(personalDetailTemplate) // for photo, name, addresses, about, social and other personal details
  const [social, setSocial] = useState([]) // for social channels using Set
  const [skill, setSkill] = useState([]) // for skills using Set (I should use CSS chips for this and how to do auto suggests?)
  const [experience, setExperience] = useState([]) // for job experience
  const [education, setEducation] = useState([]) // for education
  const [language, setLanguage] = useState([]) // for language skills
  const [certAndLicense, setCertAndLicense] = useState([]) // for certification and awards

  const dataBundle = {
    personalDetail,
    social,
    skill,
    experience,
    education,
    language,
    certAndLicense,
  }
  const styleBundle = {
    setResumeTheme,
    componentVisibility,
    photoStyle,
    skillStyle
  }

  function templateSwtich () {
    switch (resumeTheme.theme) {
      case 'RbTheme1': return <RbTheme1 data={dataBundle} style={styleBundle} />
      case 'RbTheme2': return <RbTheme2 data={dataBundle} style={styleBundle} />
      default: return <DefaultTheme data={dataBundle} style={styleBundle} />
    }
  }

  function previewMenu () {
    if (resumeTheme.ref === undefined) { return null }
    return (
      <Grid item xs={12} mb={3}>
        <ReactToPrint
          content={() => resumeTheme.ref}
          removeAfterPrint
          trigger={() => <Button variant="contained">Print</Button>}
        />
      </Grid>
    )
  }

  return (
    <Grid container spacing={2} sx={{ padding: 3, }} variant="containerGrid" >
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" fontWeight="bold">Resume Builder</Typography>
          <Typography variant="subtitle1">Type in detail, choose style and print!</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h5" align='center' sx={{ marginBottom: 3 }}>Details</Typography>
        <Editor
          // Data
          personalDetail={personalDetail} setPersonalDetail={setPersonalDetail}
          social={social} setSocial={setSocial}
          skill={skill} setSkill={setSkill}
          language={language} setLanguage={setLanguage}
          experience={experience} setExperience={setExperience}
          education={education} setEducation={setEducation}
          certAndLicense={certAndLicense} setCertAndLicense={setCertAndLicense}
          // Style
          visibility={componentVisibility} setVisibility={setComponentVisibility}
          resumeTheme={resumeTheme} setResumeTheme={setResumeTheme}
          photoStyle={photoStyle} setPhotoStyle={setPhotoStyle}
          skillStyle={skillStyle} setSkillStyle={setSkillStyle}
        />
      </Grid>
      <Grid item xs={12} md={6} >
        <Typography variant="h5" align='center' sx={{ marginBottom: 3 }}>Preview</Typography>
        <Grid item xs={12}>
          {previewMenu()}
        </Grid>
        {templateSwtich()}
      </Grid>
    </Grid>
  )
}

export default ResumeBuilder