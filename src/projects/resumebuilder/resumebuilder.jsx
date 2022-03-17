// Dependencies
import {
  useState,
  // createContext 
} from "react"

// Component import
import Editor from "./component/editor"
import Preview from "./component/preview"

// MUI Import
import {
  Grid, Typography, Paper,
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

const visibilityTemplate = {
  social: true,
  skill: true,
  education: true,
  language: true,
  certAndLicense: true,
}

const menuTemplate = {
  social: {
    visibility: true,
    showInEditor: true,
  },
}

function ResumeBuilder () {
  // Visual section
  const [visibility, setVisibility] = useState(visibilityTemplate)
  const [resumeTheme, setResumeTheme] = useState('') // for resume theme

  // Data section
  const [personalDetail, setPersonalDetail] = useState(personalDetailTemplate) // for photo, name, addresses, about, social and other personal details
  const [social, setSocial] = useState([]) // for social channels using Set
  const [skill, setSkill] = useState([]) // for skills using Set (I should use CSS chips for this and how to do auto suggests?)
  const [experience, setExperience] = useState([]) // for job experience
  const [education, setEducation] = useState([]) // for education
  const [language, setLanguage] = useState([]) // for language skills
  const [certAndLicense, setCertAndLicense] = useState([]) // for certification and awards
  return (
    // tried to use context but didn't work
    // <ResumeContext.Provider value={{
    //   resumeTheme, setResumeTheme,
    //   personalDetail, setPersonalDetail,
    //   skill, setSkill,
    //   experience, setExperience,
    //   education, setEducation,
    //   certAndLicense, setCertAndLicense
    // }}>
    <>
      <Grid container spacing={2} sx={{ padding: 3, }} variant="containerGrid" >
        <Grid item xs={12} sx={{ displayPrint: 'none' }}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h4" fontWeight="bold">Resume Builder</Typography>
            <Typography variant="subtitle1">Type in detail, choose style and print!</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Editor
            visibility={visibility} setVisibility={setVisibility}
            resumeTheme={resumeTheme} setResumeTheme={setResumeTheme}
            personalDetail={personalDetail} setPersonalDetail={setPersonalDetail}
            social={social} setSocial={setSocial}
            skill={skill} setSkill={setSkill}
            language={language} setLanguage={setLanguage}
            experience={experience} setExperience={setExperience}
            education={education} setEducation={setEducation}
            certAndLicense={certAndLicense} setCertAndLicense={setCertAndLicense}
          />
        </Grid>
        <Grid item xs={12} md={6} >
          <Preview
            resumeTheme={resumeTheme}
            personalDetail={personalDetail}
            social={social}
            skill={skill}
            language={language}
            experience={experience}
            education={education}
            certAndLicense={certAndLicense}
          />
        </Grid>
      </Grid>
    </>
    // </ResumeContext.Provider>
  )
}

export default ResumeBuilder