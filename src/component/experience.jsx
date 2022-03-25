import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

// MUI Import
import { Grid, Box, Link, Typography, Button, Icon, Tabs, Tab, Stack } from "@mui/material"
import { PictureAsPdf } from '@mui/icons-material'

// Static value
import { experience, certification } from "../staticValue/profile"

function TabPanel (props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`experiences-tabpanel-${index}`}
      aria-labelledby={`experiences-tab-${index}`}
      {...other}
    >
      {value === index && (
        <AnimatePresence exitBeforeEnter>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ paddingTop: 3, paddingBottom: 3 }}>
              {children}
            </Box>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const Experience = () => {
  const [tab, setTab] = useState(0)
  const handleTabChange = (event, tab) => {
    setTab(tab)
  }
  if (experience.length === 0) return (<Typography variant='h5' fontWeight='bold' align='center'>{'No experience'}</Typography>)
  function experienceBlock (experience) {
    return (
      experience.map((exp, index) =>
        <Grid key={index} item container xs={12} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid item xs={12} md={2} lg={2} align="center">
            {(exp.company.logo === '') ? <Icon>location_city</Icon> :
              <img src={exp.company.logo} alt={exp.company.name + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.company.name !== '') ? " - " : ''}
              <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.company.name}</Link></Typography>
            <Typography variant="subtitle1" fontWeight="500">{exp.from + ' - ' + exp.to}</Typography>
            <br />
            {exp.description.map((desc, index) => <Typography variant="subtitle1" key={index}>{desc}</Typography>)}
          </Grid>
        </Grid>
      )
    )
  }

  function certificationBlock (certification) {
    return (
      certification.map((cert, index) =>
        <Grid item container xs={12} key={index} sx={{ paddingBottom: 3 }}>
          <Grid item xs={12} md={2} lg={2} align="center">
            {(cert.certImage === '') ? null : <img src={cert.certImage} alt={cert.name + ' photo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Typography variant="h6" fontWeight="bold">{cert.name}</Typography>
            <Typography variant="subtitle2">by : {cert.organization}</Typography>
            <Typography variant="subtitle1" fontWeight="bold">Issued: {cert.issueDate} {cert.notExpire ? '  (No expriation date)' : ' - ' + cert.expireDate}</Typography>
            {(cert.certID !== '') ? <Typography variant="subtitle1">Credential ID: <strong>{cert.certID}</strong></Typography> : null}
            <Stack direction="row" spacing={1}>
              {(cert.certFile === '') ? null : <Stack direction="row"><PictureAsPdf /><a href={cert.certFile}>view PDF</a></Stack>}
              {(cert.certURL !== '') ? <Typography variant="subtitle1"><Link href={cert.certURL} target="_blank" rel="noopener noreferrer">Link to credential</Link></Typography> : null}
            </Stack>
          </Grid>
        </Grid>
      )
    )
  }

  return (
    <Grid container variant="containerGrid" sx={{ paddingLeft: { md: 'none', lg: 30 }, paddingRight: { md: 'none', lg: 30 } }}>
      <Grid item xs={12} className="mainGrid" variant="mainGrid" sx={{ paddingTop: { xs: 3, md: 7 }, paddingBottom: 5 }}>
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Grid item xs={12} md={11}>
              <Typography variant="h4">Work experiences</Typography>
              <Typography variant="h6">For PDF version click <Button variant="contained" href="https://drive.google.com/file/d/1ad9STGtWFWMHsVv0hXtVWPKz93fRLL6P/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</Button></Typography>
            </Grid>
            <Grid item xs={12}>
              {/* add tab menu here please :) with transition from frame-motion */}
              <Tabs value={tab} onChange={handleTabChange} aria-label="experience-tabs">
                <Tab label="Experience" id="experiences-tab-0" aria-controls='experiences-tabpanel-0' />
                <Tab label="Certification" id="experiences-tab-1" aria-controls='experiences-tabpanel-1' />
              </Tabs>
            </Grid>
            <Grid item xs={12}>
              <TabPanel value={tab} index={0}>
                {experienceBlock(experience)}
              </TabPanel>
              <TabPanel value={tab} index={1}>
                {certificationBlock(certification)}
              </TabPanel>
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid >
  )
}

export default Experience 