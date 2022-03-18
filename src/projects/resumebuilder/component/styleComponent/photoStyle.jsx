
// MUI Import
import {
  Grid, Typography, Paper, RadioGroup, Radio
} from '@mui/material'

let imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
function PhotoStyle (props) {
  const { state: photoStyle, setState: setPhotoStyle } = props
  if (photoStyle === undefined) { return null }
  function handleChange (event, value) {
    const { name } = event.target
    setPhotoStyle(currentvalue => ({ ...currentvalue, [name]: value }))
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='subtitle1' fontWeight='bold' align='center'>Border</Typography>
        <Grid container align={'center'}>
          <RadioGroup row>
            <Grid item xs={4}>
              {/* <Radio id="radius" name="radius" onClick={(event) => handleChange(event, 1)} />
              <label htmlFor="radius"><img src={imgSrc} alt="preview" width="40%" height="auto" /></label> */}
              <img id="radius" name="radius" src={imgSrc} alt="preview" width="40%" height="auto" onClick={(event) => handleChange(event, 1)} />
            </Grid>
            <Grid item xs={4}>
              <img id="radius" name="radius" src={imgSrc} alt="preview" width="40%" height="auto" onClick={(event) => handleChange(event, 30)} style={{ borderRadius: 30 }} />
            </Grid>
            <Grid item xs={4}>
              <img id="radius" name="radius" src={imgSrc} alt="preview" width="40%" height="auto" onClick={(event) => handleChange(event, '50%')} style={{ borderRadius: '50%' }} />
            </Grid>
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        {/* <Typography>Photo size</Typography> */}
      </Grid>
    </Grid>
  )
}

export default PhotoStyle