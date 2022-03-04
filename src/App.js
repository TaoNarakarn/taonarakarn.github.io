// core import
import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// pages component
import Header from './component/header'
import Footer from './component/footer'
import Home from './component/home'
import CodeBits from './component/codebits'
import Experience from './component/experience'
// import Note from './component/note'
import NotFound from './component/404'

// MUI import
import { CssBaseline, Container } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    // background: {
    //   default: "#e3f2fd"
    // }
  },
})

export const AppContext = createContext(null)

function App () {
  const [theme, setTheme] = useState(true)
  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <CssBaseline />
        <HashRouter>
          <Header theme={theme} setTheme={setTheme} />
          <Container maxWidth="xl" sx={{ borderLeft: 1, borderRight: 1, borderColor: 'divider', minHeight: '86vh', }} >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/codebits" element={<CodeBits />} />
              {/* <Route path="/note" element={<Note />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
          <Footer title="Testing title props" description="Test description" />
        </HashRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
