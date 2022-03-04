// Core dependencies import
import meHeader from '../image/meHeaderSmall.png'
import googlecert from '../image/googlecert.png'

// MUI import
import { Grid, Typography, Link, Stack, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
  return (
    <>
      <Grid container>
        {/* Introduction */}
        <Grid item xs={12} sx={{ paddingTop: 10, paddingBottom: 5, borderBottom: 1, borderColor: 'divider' }}>
          <Grid container spacing={2} >
            <Grid item xs>
              {/* Blank grid for pagination this should also helps with flex */}
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container direction="row">
                <Grid item xs={12} md={9}>
                  <Typography variant="h6" >Hello visitor! my name is:</Typography>
                  <Typography variant="h3" fontWeight="bold">Narakarn (Tao)</Typography>
                  <Typography variant="h5" fontWeight="bold">I'm an IT professional</Typography>
                  <Stack pt={2} direction="row" align="center" gap={1}>
                    <IconButton aria-label="Linkedin">
                      <Link href="https://www.linkedin.com/in/taonarakarn/" underline="hover" target="_blank" rel="noopener"><LinkedInIcon /></Link>
                    </IconButton>
                    <IconButton aria-label="Github">
                      <Link href="https://github.com/TaoNarakarn" underline="hover" target="_blank" rel="noopener"><GitHubIcon /></Link>
                    </IconButton>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={3} align="center">
                  <img src={meHeader} alt="TaoNarakarn" style={{ width: '180px', height: '180px', borderRadius: '50%' }} ></img>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6}>
                <br />
                <Typography variant="subtitle1">{"I'm Thailand based IT operation with some coding experience"}</Typography>
                <br />
                <Typography variant="subtitle1">{'Currently learning JavaScript, ReactJS with NodeJS and MongoDB in the backend'}</Typography>
                <br />
                <Typography variant="subtitle1">{'That is why this site is created, it is a project to create a website with ReactJS and Material UI Framework'}</Typography>
              </Grid>
            </Grid>
            <Grid item xs>
              {/* Blank grid for pagination this should also helps with flex */}
            </Grid>
          </Grid>
        </Grid>
        {/* About grid */}
        <Grid item xs={12} sx={{ paddingTop: 10 }}>
          <Grid container spacing={2} >
            <Grid item xs>
              {/* Blank grid for pagination this should also helps with flex */}
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid item xs={12}>
                <Typography variant='h5' fontWeight="bold">About me</Typography>
                <br />
                <Typography variant="subtitle1">
                  {'I start my IT journey since graduate from University, its been over 10 years since then.'}
                  {' I also have MBA in Marketing which I accidentally enrolled in'}
                </Typography>
                <br />
                <Typography variant="subtitle1">{'I worked with multinational enterprises that have branched in Bangkok Thailand, and currently own '}
                  <Link href="https://itselect.co.th" underline="hover" target="_blank" rel="noopener">itselect.co.th</Link>
                  {' which provide effordable IT equipements and supplies to businesses'}
                </Typography>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <br />
                  <Typography variant="subtitle1">
                    {'I recently finished Google Data Analysis Professional certificate course on '}
                    <Link href="https://www.coursera.org/professional-certificates/google-data-analytics" underline="hover" target="_blank" rel="noopener">Coursera</Link>
                    {' and learned more SQL and R programming language from there'}
                  </Typography>
                  <br />
                  <Typography variant="subtitle1">
                    {'Check my to see more '}<Link href="/experience" underline="hover">experience</Link>{' page'}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4} textAlign={'center'}>
                  <img src={googlecert} alt="Google Data Analyst Certification" style={{ width: '150px', height: '150px' }} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs>
              {/* Blank grid for pagination this should also helps with flex */}
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    </>
  )
}

export default Home