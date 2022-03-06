// Dependencies import
import { useState } from 'react'
import PropTypes from 'prop-types'

// Import bits and pieces component
import RandomUser from '../bitsandpieces/randomuser'
// import AWSLambda from '../bitsandpieces/awslambda'
import ChartJS from '../bitsandpieces/chartjs'
import ProfileBuilder from '../bitsandpieces/profilebuilder'

// MUI imports
import { Typography, Box, Tabs, Tab } from "@mui/material"

function TabPanel (props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ padding: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const CodeBits = () => {
  const [tab, setTab] = useState(0)
  const handleTabChange = (event, tab) => {
    setTab(tab)
  }

  return (
    <>
      <Box mb={3} sx={{ paddingTop: 3 }}>
        <Typography variant='h5'>CodeBits</Typography>
        <Typography variant='subtitle1'>While is site is a project for me in itself to learn React and MaterialUI component, but I am create bits and pieces for fun too</ Typography>
        <Typography variant='subtitle1' fontWeight='bold'>State are for each component, when you switch tabs you will lose what was there</Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" aria-label="bitsandpieces-tabs">
          <Tab label="Get data from API" {...a11yProps(0)} />
          <Tab label="Chart JS" {...a11yProps(1)} />
          {/* <Tab label="Profile builder" {...a11yProps(2)} /> */}
          {/* <Tab label="AWS Lambda nodejs API" {...a11yProps(3)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <RandomUser />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <ChartJS />
      </TabPanel>
      {/* <TabPanel value={tab} index={2}>
        <ProfileBuilder />
      </TabPanel> */}
      {/* <TabPanel value={tab} index={3}>
        <Typography>Coming soon</Typography>
        <AWSLambda />
      </TabPanel> */}
    </>
  )
}

export default CodeBits