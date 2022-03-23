
import resumeBuilderLogo from '../image/ResumeBuilderLogo.jpg'
import googlecert from '../image/googlecert.png'

// MUI import
import { Box, Breadcrumbs, Button, Card, CardContent, CardMedia, Grid, Paper, Typography, Link } from "@mui/material"

function Project () {

  function breadCrumbs () {
    return (
      <Breadcrumbs />
    )
  }

  return (
    <Grid container variant="containerGrid">
      <Grid item xs variant="sideGrid">
        {/* Blank grid for flex this should also helps with custom style */}
      </Grid>
      <Grid item xs={12} md={9} sx={{ paddingTop: { xs: 3, md: 7 } }} className="mainGrid">
        {breadCrumbs()}
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h3" fontWeight="bold">Projects</Typography>
          <Typography variant="subtitle1">Below are list of projects that I have done and currently doing</Typography>
          <Typography variant="subtitle1">There currently few, but I plan to add more in the future</Typography>

          <Card sx={{ marginTop: 3, display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">Resume Builder</Typography>
                <br />
                <Typography variant="subtitle1">I started this project beacuse, many "free resume" website are free to create but charge you when you wanted to download them</Typography>
                <Typography variant="subtitle1" fontWeight={'bold'}>*** this project is work in progress ***</Typography>
                <br />
                <Button href="/#/project/resume-builder">Go to project</Button>
              </CardContent>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingRight: { xs: 0, md: 2 } }}>
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                alt="Resume Builder Logo"
                image={resumeBuilderLogo}
              />
            </Box>
          </Card>

          <Card sx={{ marginTop: 3, display: 'flex', gap: 2, flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h5" fontWeight="bold">Google Analytic capstone project</Typography>
                <br />
                <Typography variant="subtitle1">
                  This project is a part of {" "}
                  <Link href="https://www.coursera.org/professional-certificates/google-data-analytics?" target="_blank" rel="noopener noreferrer">Google Analytic Professional Certificate</Link>
                </Typography>
                <Typography variant="subtitle1">
                  This case study is about getting an insight of bike sharing company that wanted to know how "Casual Rider" and "Member rider" are different in their riding behavior
                </Typography>
                <Typography variant="subtitle1">
                  I did this case study using R studio (R language), and have the process log in Kaggle notebook link below
                </Typography>
                <br />
                <Button href="https://docs.google.com/presentation/d/1Fy-VW9jJe1yq9llHK06IQiVYQmSOUgRbKAF5eFI-EGQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Presentation</Button>
                <Button href="https://www.kaggle.com/taonarakarn/gcc-capstone-track-1/notebook" target="_blank" rel="noopener noreferrer">Project notebook (Kaggle)</Button>
              </CardContent>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingRight: { xs: 0, md: 2 } }}>
              <CardMedia
                component="img"
                sx={{ width: 230, height: "100%" }}
                alt="Google Analytic Certificate Professional Logo"
                image={googlecert}
              />
            </Box>
          </Card>
        </Paper>
      </Grid>
      <Grid item xs variant="sideGrid">
        {/* Blank grid for flex this should also helps with custom style */}
      </Grid>
    </Grid>
  )
}

export default Project