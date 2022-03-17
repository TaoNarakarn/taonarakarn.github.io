// Core dependencies
import { useEffect, useState } from 'react'

// Static component
import { AddEntry, handleDelete, deleteConfirmationDialog } from './staticFunction'

// MUI imports
import {
  Typography, Grid, Stack, Button, TextField, Icon, IconButton, Collapse, Tooltip, Checkbox, Link
} from "@mui/material"
import { Cancel } from "@mui/icons-material"

const dataTemplate = {
  name: '',
  organization: '',
  issueDate: '',
  expireDate: '',
  notExpire: false,
  certID: '',
  certURL: '',
  certImage: '',
}

function mainInput (tempData, handleChange) {
  return (
    <>
      <Grid item xs={12}>
        <TextField fullWidth id="name" name="name" placeholder="Certificate or license name" label="Certificate or license name" value={tempData.name} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="certImage" name="certImage" placeholder="Certificate or license image link" label="Certificate or license image link" value={tempData.certImage} onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="organization" name="organization" placeholder="Certificate or license issuer" label="Certificate or license issuer" value={tempData.organization} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth id="issueDate" name="issueDate" placeholder="MMM YYYY" label="Issue date" value={tempData.issueDate} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField fullWidth disabled={tempData.notExpire} id="expireDate" name="expireDate" placeholder="MMM YYYY" label="Expire date" value={tempData.expireDate} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} md={4}>
        <Checkbox id="notExpire" name="notExpire" checked={tempData.notExpire} onChange={handleChange} /><label htmlFor='notExpire'>No expire date</label>
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="certID" name="certID" placeholder="Certificate or license ID" label="Certificate or license ID" value={tempData.certID} onChange={handleChange} />
      </Grid>
      <Grid item xs={12} >
        <TextField fullWidth id="certURL" name="certURL" placeholder="Certificate or license URL" label="Certificate or license URL" value={tempData.certURL} onChange={handleChange} />
      </Grid>
    </>
  )
}

function MainComponent (props) {
  const { state, setState } = props
  const [editing, setEditing] = useState()
  const [tempData, setTempData] = useState()
  const [dialogAction, setDialogAction] = useState({ open: false, index: '', entryName: '' })
  useEffect(() => {
    setEditing(Array(state.length).fill(false))
  }, [state])
  if (state === undefined || state.length === 0) { return null }

  function handleEdit (index) {
    let newEditing = Array(state.length).fill(false) // this way we can close other editng
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    let tempData = [...state]  // create a copy state of skill here (this is to save performance issue)
    setTempData(tempData[index])
  }

  function handleChange (event) {
    const { name, value } = event.target
    setTempData(currentValue => ({ ...currentValue, [name]: value }))
  }

  function handleSave (index) {
    setEditing(currentValue => Array(state.length).fill(false))
    let mergeData = [...state]
    mergeData[index] = tempData
    setState(mergeData)
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
      let newExp = [...state]
      newExp.splice(dialogAction.index, 1)
      setState(() => newExp)
      setEditing(currentValue => Array(state.length).fill(false))
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
    <Grid item xs={12} sx={{ borderTop: 1, borderColor: 'divider', marginTop: 1, paddingTop: 1 }}>
      {state.map((value, index) =>
        <Grid container key={index}>
          <Collapse in={!editing[index]} sx={{ width: "100%" }}>
            <Grid container >
              <Grid item xs={12} md={2}>
                {(value.certImage === '') ? null :
                  <img src={value.certImage} alt={value.name} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
                <br />
                <Tooltip title="Edit"><IconButton id="edit" name="edit" onClick={() => handleEdit(index)}><Icon>edit</Icon></IconButton></Tooltip>
                <Tooltip title="Delete"><IconButton id="delete" name="delete" onClick={() => handleDelete(index, state, setDialogAction, 'name')}><Icon>delete</Icon></IconButton></Tooltip>
              </Grid>
              <Grid item xs={12} md={10} >
                <Typography variant="h6" fontWeight="bold">{value.name}</Typography>
                <Typography variant="subtitle2">by : {value.organization}</Typography>
                <Typography variant="subtitle1" fontWeight="bold">Issued: {value.issueDate} {value.notExpire ? '  (No expriation date)' : ' - ' + value.expireDate}</Typography>
                {(value.certID !== '') ? <Typography variant="subtitle1">Credential ID: {value.certID}</Typography> : null}
                {(value.certURL !== '') ? <Typography variant="subtitle1"><Link href={value.certURL} target="_blank" rel="noopener noreferrer">Link to credential</Link></Typography> : null}
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



function CertAndLicense (props) {
  const { state: certAndLicense, setState: setCertAndLicense } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <AddEntry setState={setCertAndLicense} mainInput={mainInput} buttonDisplay={'button'} dataTemplate={dataTemplate} entryName={'Certification and License'} />
        <MainComponent state={certAndLicense} setState={setCertAndLicense} />
      </Grid>
    </Grid>
  )
}

export default CertAndLicense