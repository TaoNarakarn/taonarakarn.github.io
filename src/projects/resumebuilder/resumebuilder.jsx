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
  Grid,
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

function ResumeBuilder () {
  const [resumeTheme, setResumeTheme] = useState('') // for resume theme
  const [personalDetail, setPersonalDetail] = useState(personalDetailTemplate) // for photo, name, addresses, about, social and other personal details
  const [social, setSocial] = useState([]) // for social channels using Set
  const [skill, setSkill] = useState([]) // for skills using Set (I should use CSS chips for this and how to do auto suggests?)
  const [experience, setExperience] = useState([]) // for job experience
  const [education, setEducation] = useState('') // for education
  const [language, setLanguage] = useState('') // for language skills
  const [certAndAward, setCertAndAward] = useState('') // for certification and awards
  return (
    // tried to use context but didn't work
    // <ResumeContext.Provider value={{
    //   resumeTheme, setResumeTheme,
    //   personalDetail, setPersonalDetail,
    //   skill, setSkill,
    //   experience, setExperience,
    //   education, setEducation,
    //   certAndAward, setCertAndAward
    // }}>
    <>
      <Grid container spacing={2} sx={{ padding: 2 }} variant="containerGrid">
        <Grid item xs={12} md={6}>
          {/* <Drawer
            variant="persistent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 600 },
            }}
            open
          >
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 3, }}
            > */}
          <Editor
            resumeTheme={resumeTheme} setResumeTheme={setResumeTheme}
            personalDetail={personalDetail} setPersonalDetail={setPersonalDetail}
            social={social} setSocial={setSocial}
            skill={skill} setSkill={setSkill}
            language={language} setLanguage={setLanguage}
            experience={experience} setExperience={setExperience}
            education={education} setEducation={setEducation}
            certAndAward={certAndAward} setCertAndAward={setCertAndAward}
          />
          {/* </Box>
          </Drawer> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <Preview
            resumeTheme={resumeTheme}
            personalDetail={personalDetail}
            social={social}
            skill={skill}
            language={language}
            experience={experience}
            education={education}
            certAndAward={certAndAward}
          />
        </Grid>
      </Grid>
    </>
    // </ResumeContext.Provider>
  )
}

export default ResumeBuilder