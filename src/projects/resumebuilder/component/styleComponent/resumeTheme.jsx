import { Grid, Button, Stack } from "@mui/material"


import default_thumbnail from '../../image/default_Thumbnail.jpg'
import RbTheme1_Thumbnail from '../../image/RbTheme1_Thumbnail.jpg'
import RbTheme2_Thumbnail from '../../image/RbTheme2_Thumbnail.jpg'

function ResumeTheme (props) {
  const {
    // state: resumeTheme,
    setState: setResumeTheme } = props
  function handleSetTheme (event) {
    const { name } = event.target

    setResumeTheme(current => ({ ...current, theme: name }))
  }
  // const selected = {
  //   lastTheme : '',
  //   Default : true,
  //   RbTheme1: false,
  //   RbTheme2: false,
  // }
  // function setBorder () {
  //   switch (resumeTheme.name) {
  //     case 'Default': 
  //     default:
  //   }
  // }
  return (
    <Grid container sx={{ maxHeight: '30vh', overflow: 'auto' }}>
      <Grid item md={6} lg={4} align="center">
        <Button id="theme" name="Default" value="Default" onClick={handleSetTheme}>
          <Stack>
            <img id="theme" name="Default" src={default_thumbnail} alt='default_theme_thumbnail' className="imageStyle" width='150px' height='auto' onClick={handleSetTheme} />
            Default
          </Stack>
        </Button>
      </Grid>
      <Grid item md={6} lg={4} align="center">
        <Button id="theme" name="RbTheme1" value="RbTheme1" onClick={handleSetTheme} >
          <Stack>
            <img id="theme" name="RbTheme1" src={RbTheme1_Thumbnail} alt='theme1_thumbnail' className="imageStyle" width='150px' height='auto' onClick={handleSetTheme} />
            Theme 1
          </Stack>
        </Button>
      </Grid>
      <Grid item md={6} lg={4} align="center">
        <Button id="theme" name="RbTheme2" value="RbTheme2" onClick={handleSetTheme}>
          <Stack>
            <img id="theme" name="RbTheme2" src={RbTheme2_Thumbnail} alt='theme2_thumbnail' className="imageStyle" width='150px' height='auto' onClick={handleSetTheme} />
            Theme 2
          </Stack>
        </Button>
      </Grid>
    </Grid>
  )
}

export default ResumeTheme