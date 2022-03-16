// Core dependencies
import { useState } from 'react'

// MUI imports
import {
  Typography, Grid, Stack, Button, InputLabel, TextField, Paper, Icon, IconButton, FormControl, Select, MenuItem,
  Dialog, DialogActions, DialogContent, DialogContentText
} from "@mui/material"

const demoData = [{
  companyName: 'The black order',
  companyLogo: 'https://steamuserimages-a.akamaihd.net/ugc/784123877860954963/FF2B74D482EC8DE4E2C9108E2B52F3868C8DCDB7/',
  // website: 'https://en.wikipedia.org/wiki/Thanos_(Marvel_Cinematic_Universe)',
  position: 'Founder of Thanos children',
  // location: 'Titan, Saturn',
  from: 'Jan 2000',
  to: 'Dec 2020',
  workHere: true,
  description: [
    'Found all infinity stones',
    'Able to get a giant to build the infinity gauntlet',
    'Responsible for self initiated project "balance of the galaxy" and completed it',
    'Trade 1 daughter for 1 Soul gem',
    'Stab Tony Stark in the gut while taking Time gem'
  ],
}]

let template = {
  companyName: '',
  companyLogo: '',
  position: '',
  // location: '',
  from: '',
  to: '',
  workHere: false,
  description: '',
}

const ActionDialog = (props) => {
  const { action, setDialogAction, handleExpEdit, handleExpDelete } = props
  const { open, title } = action
  const handleClose = (event) => {
    const { value } = event.target
    if (value === undefined || value === 'No') {
      setDialogAction({ open: false })
    } else if (value === 'Yes') {
      // Click yes, do stuff
      if (action.actionType === 'edit') {
        handleExpEdit(action.index)
      } else if (action.actionType === 'delete') {
        handleExpDelete(action.index)
      } else throw Error('Error happen during sending actiontype')
      setDialogAction({ open: false })
    } else throw Error('Error happen during dialog closing')
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby={action + '-dialog'} aria-describedby={action + '-dialog-description'}>
      {/* <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {title}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button value='Yes' onClick={handleClose} autoFocus>Yes</Button>
        <Button value='No' onClick={handleClose} >No</Button>
      </DialogActions>
    </Dialog>
  )
}

const Experience = (props) => {
  const { experience, handleExpPrompt } = props
  if (experience === '' || experience.length === 0) return (<Typography variant='h5' fontWeight='bold' align='center'>{'You need more experience'}</Typography>)
  return (
    experience.map((exp, index) =>
      <Grid item xs={12} key={index} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Grid container>
          <Grid item xs={12} md={1} align="center">
            {(exp.companyLogo === '') ? <Icon>location_city</Icon> :
              <img src={exp.companyLogo} alt={exp.companyName + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
            <br />
            <IconButton id="editExp" name="editExp" onClick={() => handleExpPrompt(index, 'edit')}><Icon>edit</Icon></IconButton>
            <IconButton id="deleteExp" name="deleteExp" onClick={() => handleExpPrompt(index, 'delete')}><Icon>delete</Icon></IconButton>
          </Grid>
          <Grid item xs={12} md={11}>
            <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.companyName !== '') ? " - " : ''}
              {/* <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.companyName}</Link> */}
              {exp.companyName}
            </Typography>
            <Typography variant="subtitle1" fontWeight="500">{exp.from} {(exp.from !== '') ? ' - ' : ''} {(exp.workHere) ? 'Present' : exp.to}</Typography>
            <br />
            {exp.description.map((desc, index) => <Typography variant="subtitle1" key={index}>{desc}</Typography>)}
          </Grid>
        </Grid>
      </Grid>
    )
  )
}

const ProfileBuilder = () => {
  const [experience, setExperience] = useState(demoData) // all experience
  const [exp, setExp] = useState(template) // current add,update,delete experience
  const [dialogAction, setDialogAction] = useState({ open: false, title: '', actionType: '', index: 0 })
  const [currentAction, setCurrentAction] = useState('input')

  const handleExpChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    setExp(currentExp => ({ ...currentExp, [name]: value }))
  }

  const handleExpClear = (event) => {
    event.preventDefault()
    setExp(template)
    if (currentAction === 'edit') { setCurrentAction('input') }
  }

  const handleExpSave = (event) => {
    event.preventDefault()
    if (currentAction === 'input') {
      exp.description = exp.description.trim().split('\n')
      setExperience(currentExpList =>
        [exp, ...currentExpList]
      )
    } else if (currentAction === 'edit') {
      exp.description = exp.description.trim().split('\n')
      experience.splice(dialogAction.index, 1, exp)
      setExperience(currentExpList => experience)
      setDialogAction({ open: false, title: '', actionType: '', index: 0 })
      setCurrentAction('input')
    } else throw Error('during handleExpSave')
    setExp(template)
  }

  const handleExpPrompt = (index, type) => {
    if (type === 'edit') {
      const { companyName, companyLogo, position, from, to, description } = exp
      if (companyName !== '' || companyLogo !== '' || position !== '' || from !== '' || to !== '' || description !== '') {
        let action = {
          open: true,
          title: 'You will lose your current input, continue?',
          actionType: type,
          index
        }
        setDialogAction(action)
      } else if (companyName === '' || companyLogo === '' || position === '' || from === '' || to === '' || description === '') {
        // we can not use = object here beause it will reference back to same object
        // We also can use CSS to make it new line but this way we can learn more about object too
        let editExp = Object.assign({}, experience[index])
        editExp.description = editExp.description.join('\n')
        setExp(editExp)
        setCurrentAction('edit')
      }
    } else if (type === 'delete') {
      let action = {
        open: true,
        title: 'Delete ' + experience[index].position + " - " + experience[index].companyName + '?',
        actionType: type,
        index
      }
      setDialogAction(action)
    } else throw Error('during handleExpPrompt')
  }

  const handleExpEdit = (index) => {
    let editExp = Object.assign({}, experience[index])
    editExp.description = editExp.description.join('\n')
    setExp(current => editExp)
    setCurrentAction('edit')
  }

  const handleExpDelete = (index) => {
    experience.splice(dialogAction.index, 1)
    setExperience(currentExp => experience)
    setDialogAction({ open: false, title: '', actionType: '', index: 0 })
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid item xs={12} pb={3} borderBottom={1} borderColor='divider'>
          <Typography variant='h4'>Profile builder</Typography>
          <Typography variant='h5'>Check Resume builder for more features</Typography>
          <Typography variant='subtitle1'>It works kind of like todo list but not quite</Typography>
          <Typography variant='subtitle1'>Got this idea from experience page to keep data in JSON and map them out</Typography>
        </Grid>
      </Grid>
      {/* fill area */}
      <Grid item xs={12} mt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            {/* form */}
            <Paper elevation={5} sx={{ padding: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant='h6'>Enter detail</Typography>
                  <br />
                  <TextField fullWidth id="position" name="position" type="text" placeholder="Position" label="Position" onChange={handleExpChange} value={exp.position} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="companyName" name="companyName" type="text" placeholder="Company Name" label="Company Name" onChange={handleExpChange} value={exp.companyName} />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField fullWidth id="location" name="location" type="text" placeholder="City, Country" label="Location" onChange={handleExpChange} value={exp.location} />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField fullWidth id="companyLogo" name="companyLogo" type="text" placeholder="Link to company logo" label="Link to company logo" onChange={handleExpChange} value={exp.companyLogo} />
                  <Typography variant='caption'>* Make sure link can be hot link to image</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth id="from" name="from" type="text" placeholder="Apr 2018" label="From" onChange={handleExpChange} value={exp.from} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField fullWidth id="to" name="to" type="text" placeholder="Feb 2022" label="To" disabled={exp.workHere} onChange={handleExpChange} value={exp.to} />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="workHere">Currently working here?</InputLabel>
                    <Select id="workHere" name="workHere" label="Currently working here?" placeholder="Work Here?" onChange={handleExpChange} value={exp.workHere} >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth id="description" name="description" placeholder="Description" multiline rows={4} onChange={handleExpChange} value={exp.description}></TextField>
                </Grid>
                <Grid item xs={12}>
                  <Stack direction="row" justifyContent="center" spacing={3}>
                    <Button variant='contained' onClick={handleExpSave}>{(currentAction === 'input') ? 'Add experience' : 'Save experience'}</Button>
                    <Button variant='contained' color='warning' onClick={handleExpClear}>Clear</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* experience preview */}
            <Paper elevation={5} sx={{ padding: 3 }}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant='h6' mb={3} pb={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>Preview</Typography>
                  <Grid item xs={12} md={1}>
                    {(exp.companyLogo === '') ? <Icon>location_city</Icon> :
                      <img src={exp.companyLogo} alt={exp.companyName + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
                  </Grid>
                  <Grid item xs={12} md={11}>
                    <Typography variant="h6" fontWeight="bold">{exp.position} {(exp.companyName !== '') ? " - " : ''}
                      {/* <Link href={exp.company.website} underline="hover" target="_blank" rel="noopener noreferrer">{exp.companyName}</Link> */}
                      {exp.companyName}
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="500">{exp.from} {(exp.from !== '') ? ' - ' : ''} {(exp.workHere) ? 'Present' : exp.to}</Typography>
                    <br />
                    <Typography variant="subtitle1" sx={{ whiteSpace: "pre-line" }}>{exp.description}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid >
      <Grid item xs={12}>
        {/* Profile area */}
        <Paper elevation={5} sx={{ padding: 3 }}>
          <Experience experience={experience} handleExpPrompt={handleExpPrompt} />
        </Paper>
      </Grid>
      {/* dialog for delete and edit items */}
      <Grid item>
        <ActionDialog action={dialogAction} setDialogAction={setDialogAction} setCurrentAction={setCurrentAction} handleExpEdit={handleExpEdit} handleExpDelete={handleExpDelete} />
      </Grid>
    </Grid >
  )
}

export default ProfileBuilder