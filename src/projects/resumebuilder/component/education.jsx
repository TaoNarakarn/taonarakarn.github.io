// Core dependencies
import { useEffect, useState } from 'react'

// Static component
import { AddEntry, handleDelete, deleteConfirmationDialog } from './staticFunction'

// MUI imports
import {
  Typography, Grid, Stack, Button, TextField, Icon, IconButton, Collapse, Tooltip
} from "@mui/material"
import { Cancel } from "@mui/icons-material"

function mainInput (tempData, handleChange) {
  return (
    <>
      <Grid item xs={12}>
        <TextField fullWidth id="place" name="place" placeholder="School / University name" label="School / University name" value={tempData.place} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="logo" name="logo" placeholder="Link to School / University logo" label="Link to School / University logo" value={tempData.logo} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth id="degree" name="degree" placeholder="Degree / Education level" label="Degree / Education level" value={tempData.degree} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth id="major" name="major" placeholder="Major" label="Major" value={tempData.major} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth id="from" name="from" placeholder="MMM YYYY" label="From" value={tempData.from} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth id="to" name="to" placeholder="MMM YYYY" label="To" value={tempData.to} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth id="grade" name="grade" placeholder="Grade" label="Grade" value={tempData.grade} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth multiline rows={3} id="activities" name="activities" placeholder="Link to School / University activities" label="Link to School / University activities" value={tempData.activities} onChange={handleChange} />
      </Grid>
    </>
  )
}

function MainComponent (props) {
  const { education, setEducation } = props
  const [editing, setEditing] = useState()
  const [tempData, setTempData] = useState()
  const [dialogAction, setDialogAction] = useState({ open: false, index: '', entryName: '' })
  useEffect(() => {
    setEditing(Array(education.length).fill(false))
  }, [education])
  if (education === undefined || education.length === 0) { return null }

  function handleEdit (index) {
    let newEditing = Array(education.length).fill(false) // this way we can close other editng
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    let tempData = [...education]  // create a copy state of skill here (this is to save performance issue)
    setTempData(tempData[index])
  }

  function handleChange (event) {
    const { name, value } = event.target
    setTempData(currentValue => ({ ...currentValue, [name]: value }))
  }

  function handleSave (index) {
    setEditing(currentValue => Array(education.length).fill(false))
    let mergeData = [...education]
    mergeData[index] = tempData
    setEducation(mergeData)
    setTempData()
  }

  function handleCancelEdit (index) {
    let newEditing = [...editing]
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    setTempData()
  }

  function handleDialogClose (event) { // after dialog is close (yes, no, click anywhere else)
    const { value } = event.target
    if (value === undefined || value === 'No') {
      // nothing happens if click out of bound or click no just close dialog
    } else if (value === 'Yes') {
      // Click yes, do stuff
      let newExp = [...education]
      newExp.splice(dialogAction.index, 1)
      setEducation(() => newExp)
      setEditing(currentValue => Array(education.length).fill(false))
    } else throw Error('Error happen during dialog closing')
    setDialogAction({ open: false, index: '', entryName: '', })
  }

  function editingCollapse (index) { // collapse when click edit button
    if (tempData === undefined) { return null }
    return (
      <Collapse in={editing[index]} >
        <Grid container spacing={2}>
          {mainInput(tempData, handleChange)}
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
      {education.map((value, index) =>
        <Grid key={index} item xs={12} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Collapse in={!editing[index]} sx={{ width: "100%" }}>
            <Grid container>
              <Grid item xs={12} md={2} pt={2}>
                {(value.logo === '') ? null :
                  <img src={value.logo} alt={value.place} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
                <br />
                <Tooltip title="Edit"><IconButton id="edit" name="edit" onClick={() => handleEdit(index)}><Icon>edit</Icon></IconButton></Tooltip>
                <Tooltip title="Delete"><IconButton id="delete" name="delete" onClick={() => handleDelete(index, education, setDialogAction, 'place')}><Icon>delete</Icon></IconButton></Tooltip>
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography variant="h6" fontWeight="bold">{value.place}</Typography>
                <Typography variant="subtitle1" fontWeight="bold">{value.degree}{' - '}{value.major}</Typography>
                <Typography variant="subtitle2" fontWeight="500">{value.from}{' - '}{value.to}</Typography>
                {(value.grade === '') ? null :
                  <Typography variant="subtitle1">{"Grade:" + value.grade}</Typography>}
                <br />
                <Typography variant="subtitle1" sx={{ whiteSpace: 'pre-line' }}>{value.activities}</Typography>
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

const dataTemplate = {
  place: '',
  logo: '',
  from: '',
  to: '',
  degree: '',
  major: '',
  grade: '',
  activities: '',
}

function Education (props) {
  const { state: education, setState: setEducation } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <AddEntry setState={setEducation} mainInput={mainInput} buttonDisplay={'button'} dataTemplate={dataTemplate} entryName={'education'} />
        <MainComponent education={education} setEducation={setEducation} />
      </Grid>
    </Grid>
  )
}

export default Education