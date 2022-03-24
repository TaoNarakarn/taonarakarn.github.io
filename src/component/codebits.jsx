// Dependencies import
import { useState } from 'react'
import PropTypes from 'prop-types'

// Import bits and pieces component
import RandomUser from '../bitsandpieces/randomuser'
// import AWSLambda from '../bitsandpieces/awslambda'
import ChartJS from '../bitsandpieces/chartjs'

// MUI imports
import { Typography, Grid, Box, Tabs, Tab, Divider } from "@mui/material"

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
        <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
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
    <Grid container variant="containerGrid" sx={{ paddingLeft: { md: 'none', lg: 30 }, paddingRight: { md: 'none', lg: 30 } }}>
      <Grid item xs={12} className="mainGrid" variant="mainGrid" sx={{ paddingTop: { xs: 3, md: 7 }, paddingBottom: 5 }}>
        <Box mb={3}>
          <Typography variant='h4'>CodeBits</Typography>
          <Typography variant='subtitle1'>While is site is a project for me in itself to learn React and MaterialUI component, I am create bits and pieces for fun too</ Typography>
          <Typography variant='subtitle1' fontWeight='bold'>State are for each component, when you switch tabs you will lose what was there</Typography>
        </Box>
        <Divider />
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto" aria-label="bitsandpieces-tabs" >
            <Tab label="Get data from API" {...a11yProps(0)} />
            <Tab label="Chart JS" {...a11yProps(1)} />
            <Tab label="" {...a11yProps(2)} />
            {/* <Tab label="AWS Lambda nodejs API" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <RandomUser />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <ChartJS />
        </TabPanel>
        {/* <TabPanel value={tab} index={2}>
          <AWSLambda />
        </TabPanel> */}
        <TabPanel value={tab} index={2}>

        </TabPanel>
        {/* <TabPanel value={tab} index={3}>
        <Typography>Coming soon</Typography>
        
      </TabPanel> */}
      </Grid>
    </Grid>
  )
}

export default CodeBits