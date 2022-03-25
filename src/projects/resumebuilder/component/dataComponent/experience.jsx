// Core dependencies
import { useEffect, useState } from 'react'

// Static component
import { deleteConfirmationDialog } from '../staticFunction'

// MUI imports
import {
  Typography, Grid, Stack, Button, InputLabel, TextField, Icon, IconButton, FormControl, Select, MenuItem, Collapse, Tooltip,
} from "@mui/material"
import { AddCircle, DoNotDisturbOn, Cancel } from "@mui/icons-material"

function MainExperience (props) {
  const { experience, setExperience } = props
  const [editing, setEditing] = useState()
  const [tempExp, setTempExp] = useState()
  const [dialogAction, setDialogAction] = useState({ open: false, index: '', entryName: '', })
  useEffect(() => {
    setEditing(Array(experience.length).fill(false))
  }, [experience])
  if (experience === undefined || experience.length === 0) { return null }

  function handleEdit (index) {
    let newEditing = [...editing]
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    let temp = [...experience][index]
    setTempExp(temp)
  }

  function handleChange (event) {
    const { name, value } = event.target
    setTempExp(currentValue => ({ ...currentValue, [name]: value }))
  }
  function handleSave (index) {
    setEditing(Array(experience.length).fill(false))
    let newExperience = [...experience]
    newExperience[index] = tempExp
    setExperience(currentValue => newExperience)
    setTempExp()
  }
  function handleCancelEdit (index) {
    let newEditing = [...editing]
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    setTempExp()
  }
  function handleDelete (index) {
    let exp = [...experience][index]
    let entryName = exp.position + " - " + exp.companyName
    setDialogAction({ open: true, index, entryName })
  }

  function handleDialogClose (event) { // after dialog is close (yes, no, click anywhere else)
    const { value } = event.target
    if (value === undefined || value === 'No') {
      // nothing happens if click out of bound or click no just close dialog
    } else if (value === 'Yes') {
      // Click yes, do stuff
      let newExp = [...experience]
      newExp.splice(dialogAction.index, 1)
      setExperience(() => newExp)
      setEditing(currentValue => Array(experience.length).fill(false))
    } else throw Error('Error happen during dialog closing')
    setDialogAction({ open: false, index: '', entryName: '', })
  }

  function editingCollapse (index) { // collapse when click edit button
    if (tempExp === undefined) { return null }
    return (
      <Collapse in={editing[index]} >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <br />
            <TextField fullWidth id="position" name="position" type="text" placeholder="Position" label="Position" onChange={handleChange} value={tempExp.position} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="companyName" name="companyName" type="text" placeholder="Company Name" label="Company Name" onChange={handleChange} value={tempExp.companyName} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="location" name="location" type="text" placeholder="City, Country" label="Location" onChange={handleChange} value={tempExp.location} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="companyLogo" name="companyLogo" type="text" placeholder="Link to company logo" label="Link to company logo" onChange={handleChange} value={tempExp.companyLogo} />
            <Typography variant='caption'>* Make sure link can be hot link to image</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth id="from" name="from" type="text" placeholder="Apr 2018" label="From" onChange={handleChange} value={tempExp.from} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth id="to" name="to" type="text" placeholder="Feb 2022" label="To" disabled={tempExp.workHere} onChange={handleChange} value={tempExp.to} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="workHere">Currently working here?</InputLabel>
              <Select id="workHere" name="workHere" label="Currently working here?" placeholder="Work Here?" onChange={handleChange} value={tempExp.workHere} >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="description" name="description" placeholder="Description" multiline rows={4} onChange={handleChange} value={tempExp.description}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Button startIcon={<Icon>save</Icon>} variant='contained' onClick={() => handleSave(index)}>Save</Button>
              <Button startIcon={<Cancel />} variant='contained' color='warning' onClick={() => handleCancelEdit(index)}>Cancel</Button>
            </Stack>
          </Grid>
        </Grid>
      </Collapse>
    )
  }

  return (
    // <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
    <Grid item>
      {experience.map((exp, index) =>
        <Grid key={index} item xs={12} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Collapse in={!editing[index]} sx={{ width: "100%" }}>
            <Grid container>
              <Grid item xs={12} md={2}> {/* Logo */}
                {(exp.companyLogo === '') ? <Icon>location_city</Icon> :
                  <img src={exp.companyLogo} alt={exp.companyName + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
                <br />
                <Tooltip title="Edit"><IconButton id="editExp" name="editExp" onClick={() => handleEdit(index)}><Icon>edit</Icon></IconButton></Tooltip>
                <Tooltip title="Delete"><IconButton id="deleteExp" name="deleteExp" onClick={() => handleDelete(index)}><Icon>delete</Icon></IconButton></Tooltip>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.companyName !== '') ? " - " : ''}
                  {/* <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.companyName}</Link> */}
                  {exp.companyName}
                </Typography>
                <Typography variant="subtitle1" fontWeight="500">{exp.from} {(exp.from !== '') ? ' - ' : ''} {(exp.workHere) ? 'Present' : exp.to}</Typography>
                <br />
                <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>{exp.description}</Typography>
              </Grid>
            </Grid>
          </Collapse>
          {editingCollapse(index)}
        </Grid>
      )}
      {deleteConfirmationDialog(dialogAction, handleDialogClose)}
    </Grid>
  )
}

function AddExperience (props) {
  const { setExperience } = props
  const experienceTemplate = {
    companyName: '',
    companyLogo: '',
    position: '',
    location: '',
    from: '',
    to: '',
    workHere: false,
    description: '',
  }
  const [addExperience, setAddExperience] = useState(false)
  const [tempExperience, setTempExperience] = useState(experienceTemplate)
  if (addExperience === false) { return <Button startIcon={<AddCircle />} onClick={() => setAddExperience(addExperience => true)}>Add Experience</Button> }
  function handleChange (event) {
    const { name, value } = event.target
    setTempExperience(currentValue => ({ ...currentValue, [name]: value }))
  }
  function handleAdd () {
    setAddExperience(false)
    setExperience(currentValue => [tempExperience, ...currentValue])
    setTempExperience(experienceTemplate)
  }
  function handleCancelAdd () {
    setAddExperience(false)
    setTempExperience(experienceTemplate)
  }

  return (
    <>
      <Button startIcon={<DoNotDisturbOn />} onClick={handleCancelAdd}>Close</Button>
      <Collapse in={addExperience}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <br />
            <TextField fullWidth id="position" name="position" type="text" placeholder="Position" label="Position" onChange={handleChange} value={tempExperience.position} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="companyName" name="companyName" type="text" placeholder="Company Name" label="Company Name" onChange={handleChange} value={tempExperience.companyName} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="location" name="location" type="text" placeholder="City, Country" label="Location" onChange={handleChange} value={tempExperience.location} />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="companyLogo" name="companyLogo" type="text" placeholder="Link to company logo" label="Link to company logo" onChange={handleChange} value={tempExperience.companyLogo} />
            <Typography variant='caption'>* Make sure link can be hot link to image</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth id="from" name="from" type="text" placeholder="Apr 2018" label="From" onChange={handleChange} value={tempExperience.from} />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField fullWidth id="to" name="to" type="text" placeholder="Feb 2022" label="To" disabled={tempExperience.workHere} onChange={handleChange} value={tempExperience.to} />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel htmlFor="workHere">Currently working here?</InputLabel>
              <Select id="workHere" name="workHere" label="Currently working here?" placeholder="Work Here?" onChange={handleChange} value={tempExperience.workHere} >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth id="description" name="description" placeholder="Description" multiline rows={4} onChange={handleChange} value={tempExperience.description}></TextField>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" justifyContent="center" spacing={3}>
              <Button startIcon={<AddCircle />} variant='contained' onClick={handleAdd}>Add</Button>
              <Button startIcon={<Cancel />} variant='contained' color='warning' onClick={handleCancelAdd}>Cancel</Button>
            </Stack>
          </Grid>
        </Grid>
      </Collapse>
    </>
  )
}

function Experience (props) {
  const { state: experience, setState: setExperience } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <AddExperience setExperience={setExperience} />
        <MainExperience experience={experience} setExperience={setExperience} />
      </Grid>
    </Grid>
  )
}

export default Experience