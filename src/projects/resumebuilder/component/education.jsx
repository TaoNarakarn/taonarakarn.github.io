// Core dependencies
import { useEffect, useState } from 'react'

// Static component
import { deleteConfirmationDialog } from './staticFunction'

// MUI imports
import {
  Typography, Grid, Stack, Button, InputLabel, TextField, Icon, IconButton, FormControl, Select, MenuItem, Collapse, Tooltip
} from "@mui/material"
import { AddCircle, DoNotDisturbOn, Cancel } from "@mui/icons-material"

function MainComponent (props) {
  return (<div>Main</div>)
}

function AddEntry (props) {
  const { setEducation } = props
  const dataTemplate = {
    language: '',
    level: '',
  }
  const [tempData, setTempData] = useState(dataTemplate)
  const [entryAddCollapse, setEntryAddCollapse] = useState(false)
  if (entryAddCollapse === false) { return <Button startIcon={<AddCircle />} onClick={() => setEntryAddCollapse(entryAddCollapse => true)}>Add skills</Button> }
  function handleChange (event) {
    event.preventDefault()
    const { name, value } = event.target
    setTempData(currentValue => ({ ...currentValue, [name]: value }))
  }

  function handleAdd (event) {
    event.preventDefault()
    setTempData(currentValue => dataTemplate)
    setEntryAddCollapse(() => false)
    setEducation(currentValue => ([...currentValue, tempData]))
  }

  function handleClearChange (event) {
    event.preventDefault()
    setTempData(currentValue => dataTemplate)
    setEntryAddCollapse(() => false)
  }
  // place [text]
  // from to [text MM YYYY - MM YYYY]
  // degree [text]
  // major [text]
  // logo [url]
  // grade [text]
  // activities [large text]
  return (
    <>
      <Button startIcon={<DoNotDisturbOn />} onClick={handleClearChange}>Close</Button>
      <Collapse in={entryAddCollapse}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField fullWidth size="small" variant="standard" id="language" name="language" placeholder="Language" label="Language" value={tempData.language} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={5}>
            {/* <FormControl fullWidth required size="small" variant="standard">
              <InputLabel id="language-level-label">Language level</InputLabel>
              <Select
                labelId="language-level-label"
                id="level"
                name="level"
                label="Language Level"
                value={tempData.level}
                onChange={handleChange}
                placeholder="Language level"
              >
                {languageLevel.map((value, index) =>
                  <MenuItem key={value} value={value}>{value}</MenuItem>
                )}
              </Select>
            </FormControl> */}
          </Grid>
          <Grid item xs={12} sm={2}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Tooltip title="Add"><IconButton id="saveSocial" name="saveSocial" onClick={handleAdd}><Icon>check</Icon></IconButton></ Tooltip>
              <Tooltip title="Cancel"><IconButton id="cancelSocial" name="cancelSocial" onClick={handleClearChange}><Icon>close</Icon></IconButton></ Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </Collapse>
    </>
  )
}

function Education (props) {
  const { state: education, setState: setEducation } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainComponent education={education} setEducation={setEducation} />
        <AddEntry setEducation={setEducation} />
      </Grid>
    </Grid>
  )
}

export default Education