// core import
import { useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'

// pages component
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import Experience from './component/experience'
import Project from './component/project'
import ResumeBuilder from './projects/resumebuilder/resumebuilder'
import CodeBits from './component/codebits'
// import Note from './component/note'
import NotFound from './component/404'

// MUI import
import { CssBaseline } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiGrid: {
      variants: [
        {
          props: { variant: 'containerGrid' },
          style: {
            backgroundColor: '#121212',
            backgroundImage: `radial-gradient(
              650px circle at 0% 0%,
              hsl(218, 41%, 35%) 15%,
              hsl(218, 41%, 30%) 35%,
              hsl(218, 41%, 20%) 75%,
              hsl(218, 41%, 19%) 80%,
              transparent 100%
            ),
              radial-gradient(
                1250px circle at 100% 100%,
                hsl(218, 41%, 45%) 15%,
                hsl(218, 41%, 30%) 35%,
                hsl(218, 41%, 20%) 75%,
                hsl(218, 41%, 19%) 80%,
                transparent 100%
              );`,
            minHeight: '86vh',
          }
        },
        {
          props: { variant: 'mainGrid' },
          style: {
            backgroundColor: 'hsla(0, 0%, 100%, 0.15)',
            // backdropFilter: 'blur(30px)',
          }
        },
        {
          props: { variant: 'sideGrid' },
          style: { backgroundColor: '#0a1929' }
        },
      ]
    }
  }
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: "rgba(0, 0, 0, 0.08)"
    },
  },
  components: {
    MuiGrid: {
      variants: [
        {
          props: { variant: 'containerGrid' },
          style: { backgroundColor: '#efefef', minHeight: '86vh' }
        },
        {
          props: { variant: 'mainGrid' },
          style: {
            backgroundColor: 'rgba(255, 255, 255, 0.45);',
            // backdropFilter: 'blur(30px)',
          }
        },
        {
          props: { variant: 'sideGrid' },
          style: { backgroundColor: '#f0f0f0' }
        },
      ]
    }
  },
})

export const ThemeContext = createContext(null)

function App () {
  const [theme, setTheme] = useState(true)
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <CssBaseline />
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/resume-builder" element={<ResumeBuilder />} />
          <Route path="/codebits" element={<CodeBits />} />
          {/* <Route path="/note" element={<Note />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer title="Testing title props" description="Test description" />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
