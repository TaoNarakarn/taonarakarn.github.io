

import {
  AppBar, Container, Toolbar, Box, Tabs, Tab
  // Tooltip, Avatar 
} from '@mui/material'

function Header (props) {
  const { tab, setTab } = props
  const handleTabChange = (event, tab) => {
    setTab(tab)
  }

  function a11yProps (index) {
    return {
      id: `codebits-tab-${index}`,
      'aria-controls': `codebits-tabpanel-${index}`,
    };
  }
  return (
    <AppBar position='sticky' sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="x1">
        <Toolbar>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" aria-label="codebits-tabs">
              <Tab label="Home/Logo" {...a11yProps(0)} sx={{ color: 'gray' }} />
              <Tab label="About Us" {...a11yProps(1)} sx={{ color: 'gray' }} />
              <Tab label="Product/Service" {...a11yProps(2)} sx={{ color: 'gray' }} />
              <Tab label="Contact" {...a11yProps(3)} sx={{ color: 'gray' }} />
            </Tabs>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header