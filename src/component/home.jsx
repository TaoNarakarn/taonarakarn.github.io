// Core dependencies import
import { motion, AnimatePresence } from 'framer-motion'

// Asset import
import meHeader from '../static/image/meHeaderSmall.png'
import googlecert from '../static/image/googlecert.png'
import docximport from '../static/image/docximport.jpg'
import selection from '../static/image/selection.jpg'

// MUI import
import { Grid, Typography, Link, Stack, IconButton, Card, CardActions, CardContent, CardMedia, Divider } from "@mui/material";
import { LinkedIn, GitHub } from '@mui/icons-material';

const Home = () => {
  function introduction () { // Introduction Section
    return (
      <Grid item xs={12} pt={3}>
        <Grid container direction="row">
          <Grid item xs={12} md={9}>
            <Typography variant="h6" >Hello visitor! my name is:</Typography>
            <Typography variant="h3" fontWeight="bold">Narakarn (Tao)</Typography>
            <Typography variant="h5" fontWeight="bold">I'm an IT professional</Typography>
            <Stack pt={2} direction="row" align="center" gap={1}>
              <IconButton aria-label="Linkedin">
                <Link href="https://www.linkedin.com/in/taonarakarn/" underline="hover" target="_blank" rel="noopener noreferrer"><LinkedIn /></Link>
              </IconButton>
              <IconButton aria-label="Github">
                <Link href="https://github.com/TaoNarakarn" underline="hover" target="_blank" rel="noopener noreferrer"><GitHub /></Link>
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} align="center">
            <img src={meHeader} alt="TaoNarakarn" style={{ width: '180px', height: '180px', borderRadius: '50%' }} ></img>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8}>
          <br />
          <Typography variant="subtitle1">{"I'm Thailand based IT operation with some coding experience"}</Typography>
          <br />
          <Typography variant="subtitle1">{'Currently learning JavaScript, ReactJS with NodeJS and MongoDB in the backend'}</Typography>
          <br />
          <Typography variant="subtitle1">{'That is why this site is created, it is a project to create a website with ReactJS and Material UI Framework'}</Typography>
        </Grid>
      </Grid>
    )
  }

  function about () { // About section
    return (
      <Grid item xs={12}>
        <Grid item xs={12}>
          <Typography variant='h4' fontWeight="bold">About me</Typography>
          <br />
          <Typography variant="subtitle1">
            {'I start my IT journey since graduate from University, its been over 10 years since then.'}
            {' I also have MBA in Marketing which I accidentally enrolled in'}
          </Typography>
          <br />
          <Typography variant="subtitle1">{'I worked with multinational enterprises that have branched in Bangkok Thailand, and currently own '}
            <Link href="https://itselect.co.th" underline="hover" target="_blank" rel="noopener noreferrer">itselect.co.th</Link>
            {' which provide effordable IT equipements and supplies to businesses'}
          </Typography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <br />
            <Typography variant="subtitle1">
              {'I recently finished Google Data Analysis Professional certificate course on '}
              <Link href="https://www.coursera.org/professional-certificates/google-data-analytics" underline="hover" target="_blank" rel="noopener noreferrer">Coursera</Link>
              {' and learned more SQL and R programming language from there'}
            </Typography>
            <br />
            <Typography variant="subtitle1">
              {'Check to see more at '}<Link href="/experience" underline="hover">experience</Link>{' page'}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} textAlign={'center'}>
            <img src={googlecert} alt="Google Data Analyst Certification" style={{ width: '150px', height: '150px' }} />
          </Grid>
        </Grid>
      </Grid>
    )
  }

  function project () { // Project section
    return (
      <Grid item xs={12}>
        <Typography variant='h4' fontWeight="bold">Projects</Typography>
        <br />
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={docximport}
                alt="docx import"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              />
              <CardContent>
                <Typography variant='h6' fontWeight="bold">Legacy system docx import</Typography>
                <br />
                <Typography variant='subtitle1'>Import docx generated from legacy system and organized it by user department and display on website same as paper format using NodeJS, MongoDB</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="Github">
                  <Link href="https://github.com/TaoNarakarn/claim" underline="hover" target="_blank" rel="noopener noreferrer"><GitHub /></Link>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 2 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="240"
                image={selection}
                alt="biling systems"
                sx={{ borderBottom: 1, borderColor: 'divider' }}
              />
              <CardContent>
                <Typography variant='h6' fontWeight="bold">IT Select billing system</Typography>
                <br />
                <Typography variant='subtitle1'>Generate Quotation, Invoice and Billing notes, then calculate profit margin from Quotation using in IT select backend system</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="Github">
                  <Link href="https://github.com/TaoNarakarn/selection" underline="hover" target="_blank" rel="noopener noreferrer"><GitHub /></Link>
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          {/* Project 3 */}
          <Grid item xs={12} md={4}>

          </Grid>
        </Grid>
      </Grid>
    )
  }

  // main return
  return (
    <Grid container variant="containerGrid" sx={{ paddingLeft: { md: 'none', lg: 30 }, paddingRight: { md: 'none', lg: 30 } }}>
      {/* content grid */}
      <Grid item xs={12} className="mainGrid" variant="mainGrid" sx={{ paddingTop: { xs: 3, md: 7 }, paddingBottom: 5 }}>
        <AnimatePresence>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
          >
            {introduction()}
            <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
            {about()}
            <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
            {project()}
          </motion.div>
        </AnimatePresence>
      </Grid>
    </Grid >
  )
}

export default Home