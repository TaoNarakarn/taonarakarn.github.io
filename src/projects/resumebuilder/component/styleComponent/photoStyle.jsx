
// MUI Import
import {
  Grid, Typography, Box, Tooltip, Slider
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
        <Typography variant='subtitle1' fontWeight='bold' align='center'>Border style (can use both click and slide)</Typography>
        <Box display="flex" justifyContent={'space-between'}>
          <Tooltip title="0"><img id="radius" name="radius" className="imageStyle" src={imgSrc} alt="preview" width="15%" height="auto" onClick={(event) => handleChange(event, 1)} /></Tooltip>
          <Tooltip title="50"><img id="radius" name="radius" className="imageStyle" src={imgSrc} alt="preview" width="15%" height="auto" onClick={(event) => handleChange(event, 30)} style={{ borderRadius: 30 }} /></Tooltip>
          <Tooltip title="100"><img id="radius" name="radius" className="imageStyle" src={imgSrc} alt="preview" width="15%" height="auto" onClick={(event) => handleChange(event, '50%')} style={{ borderRadius: '50%' }} /></Tooltip>
        </Box>
        <br />
        <Slider
          id="radius"
          name="radius"
          area-label="photo-border-style"
          defaultValue={20}
          getAriaValueText={() => photoStyle.radius}
          valueLabelDisplay="auto"
          marks
          step={10}
          max={100}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Photo size</Typography>
        <Box display="flex" justifyContent={'space-between'} alignItems="flex-end">
          <Tooltip title="small"><img id="width" name="width" className="imageStyle" src={imgSrc} alt="preview" width="9%" height="9%" onClick={(event) => handleChange(event, 100)} /></Tooltip>
          <Tooltip title="big"><img id="width" name="width" className="imageStyle" src={imgSrc} alt="preview" width="15%" height="auto" onClick={(event) => handleChange(event, 170)} /></Tooltip>
        </Box>
        <Slider
          id="width"
          name="width"
          area-label="photo-border-style"
          defaultValue={170}
          getAriaValueText={() => photoStyle.width}
          valueLabelDisplay="auto"
          marks
          step={10}
          min={100}
          max={170}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  )
}

export default PhotoStyle