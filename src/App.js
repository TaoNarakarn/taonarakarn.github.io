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
          style: { backgroundColor: '#121212', minHeight: '86vh' }
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
          style: { backgroundColor: '#fafafa', minHeight: '86vh' }
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
          <Route path="/" element={<Home theme={theme} />} />
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
