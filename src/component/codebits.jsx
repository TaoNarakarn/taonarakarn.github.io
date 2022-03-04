// Dependencies import
import { useState } from 'react'
import PropTypes from 'prop-types'

// Import bits and pieces component
import RandomUser from '../bitsandpieces/randomuser'
import AWSLambda from '../bitsandpieces/awslambda'
import ChartJS from '../bitsandpieces/chartjs'

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
      <Box sx={{ paddingTop: 3 }}>
        <Typography variant='h5'>CodeBits</Typography>
        <Typography variant='subtitle1'>While is site is a project for me in itself to learn React and MaterialUI component, I will try to create bits and pieces for fun too</ Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tab} onChange={handleTabChange} aria-label="bitsandpieces-tabs">
          <Tab label="Get random user from API" {...a11yProps(0)} />
          <Tab label="AWS Lambda nodejs API" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={tab} index={0}>
        <RandomUser />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <AWSLambda />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <ChartJS />
      </TabPanel>
    </>
  )
}

export default CodeBits