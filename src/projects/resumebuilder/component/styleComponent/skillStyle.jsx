// MUI Import
import {
  Grid, Typography, Box, Tooltip, Stack,
  FormControl, FormControlLabel,
  Rating, LinearProgress, RadioGroup, Radio
} from '@mui/material'

import { Circle, CircleOutlined, } from '@mui/icons-material'


function SkillStyle (props) {
  const { state: skillStyle, setState: setSkillStlye } = props
  function handleDisplayChange (event) {
    setSkillStlye(currentValue => ({ ...currentValue, displayType: event.target.value }))
  }
  return (
    <Grid container>
      <Grid item xs={12}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography variant="body1">skill level display </Typography>
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="skill-display-style-radio-buttons-group"
              name="skill-display-style-radio-buttons-group"
              value={skillStyle.displayType}
              onChange={handleDisplayChange}
            >
              <Tooltip title="Circle rating style">
                <FormControlLabel
                  id="skill-display-circle"
                  name='skill-display-circle'
                  value="circle"
                  aria-label='skill-display-circle'
                  control={<Radio />}
                  label={<Rating sx={{ paddingTop: 0.75, }} value={3} readOnly size="small" icon={<Circle sx={{ color: 'gray' }} fontSize="inherit" />} emptyIcon={<CircleOutlined fontSize="inherit" />} />}
                />
              </Tooltip>
              <Tooltip title="Line style">
                <FormControlLabel
                  id="skill-display-line"
                  name='skill-display-line'
                  aria-label='skill-display-line'
                  value="line"
                  control={<Radio />}
                  label={<Box sx={{ width: 85, color: 'gray' }}><LinearProgress color="inherit" variant="determinate" value={60} /></Box>}
                /></Tooltip>
              <Tooltip title="None">
                <FormControlLabel
                  id="skill-display-none"
                  name='skill-display-none'
                  aria-label='skill-display-none'
                  value="none"
                  control={<Radio />}
                  label="None"
                /></Tooltip>
            </RadioGroup>
          </FormControl>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default SkillStyle