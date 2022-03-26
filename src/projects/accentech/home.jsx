import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

// MUI import
import { Box, Grid, Typography } from '@mui/material'

// Component
import Header from "./component/header"
import Footer from './component/footer'
import About from './component/about'
import ProductAndService from './component/productAndService'
import Contact from './component/contact'


function TabPanel (props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`codebits-tabpanel-${index}`}
      aria-labelledby={`codebits-tab-${index}`}
      {...other}
    >
      <AnimatePresence>
        {value === index && (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Box sx={{ paddingBottom: 3 }}>
              {children}
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function homeContent () {
  return (
    <Grid container>
      <Grid item xs={12} sx={{ height: '25vh', backgroundColor: 'darkgrey' }}>
        <Typography variant="h1" align='center'>Home image</Typography>
      </Grid>
      <Grid container item xs={12} spacing={3} sx={{ padding: 3, paddingBottom: 6, spacing: 2 }}>
        <Grid item xs={6}>
          <Box sx={{ height: '25vh', border: 1, backgroundColor: '#363a46', borderRadius: 3 }}>
            <Typography variant="h4" align='center'>Content</Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ height: '25vh', border: 1, backgroundColor: '#363a46', borderRadius: 3 }}>
            <Typography variant="h4" align='center'>Content</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3} sx={{ paddingLeft: 3, paddingRight: 3, paddingBottom: 6 }}>
        <Grid item xs={4}>
          <Box sx={{ height: '25vh', border: 1, backgroundColor: '#363a46', borderRadius: 3 }}>
            <Typography variant="h4" align='center'>Sub content</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ height: '25vh', border: 1, backgroundColor: '#363a46', borderRadius: 3 }}>
            <Typography variant="h4" align='center'>Sub content</Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{ height: '25vh', border: 1, backgroundColor: '#363a46', borderRadius: 3 }}>
            <Typography variant="h4" align='center'>Sub content</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3} sx={{ paddingLeft: 3, paddingRight: 3, paddingBottom: 6 }}>
        <Grid item xs={12}>
          <Box sx={{ height: '25vh', border: 1, backgroundColor: '#363a46', borderRadius: 3 }}>
            <Typography variant="h4" align='center'>Sub content</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

function Home () {
  const [tab, setTab] = useState(0)
  return (
    <div>
      <Header tab={tab} setTab={setTab} />
      <Grid container sx={{ minHeight: '100vh', backgroundColor: '#141a29' }}>
        <Grid item xs={12}>

          <TabPanel value={tab} index={0}>
            {homeContent()}
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <About />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <ProductAndService />
          </TabPanel>
          <TabPanel value={tab} index={3}>
            <Contact />
          </TabPanel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Home