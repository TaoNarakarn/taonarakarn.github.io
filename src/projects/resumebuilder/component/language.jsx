// Core dependencies
import { useEffect, useState } from 'react'

// Static component
import { deleteConfirmationDialog } from './staticFunction'

// MUI imports
import {
  Typography, Grid, Box, Stack, Button, InputLabel, TextField, Icon, IconButton, FormControl, Select, Menu, MenuItem, Collapse, Tooltip,
  Table, TableBody, TableRow, TableCell,
} from "@mui/material"
import { AddCircle, DoNotDisturbOn } from "@mui/icons-material"

const languageLevel = [
  'Basic',
  'Intemidiate',
  'Advanced/Fluent',
  'Native',
]

function TableMenuDisplay (props) {
  const { index, editing, handleEdit, handleDelete, handleSave, handleCancel } = props
  const [anchorElNav, setAnchorElNav] = useState(null)

  function handleOpenMoreMenu (event) {
    setAnchorElNav(event.currentTarget)
  }

  function handleCloseMoreMenu () {
    setAnchorElNav(null)
  }
  function menuButtonDisplay () {
    if (editing[index] === true) {
      return (
        <>
          <Tooltip title="Save"><IconButton id="save" name="save" onClick={() => handleSave(index)}><Icon>save</Icon></IconButton></Tooltip>
          <Tooltip title="Cancel"><IconButton id="cancel" name="cancel" onClick={() => handleCancel(index)}><Icon>cancel</Icon></IconButton></Tooltip>
        </>
      )
    } else if (editing[index] === false) {
      return (
        <>
          <Tooltip title="Edit"><IconButton id="edit" name="edit" onClick={() => handleEdit(index)}><Icon>edit</Icon></IconButton></Tooltip>
          <Tooltip title="Delete"><IconButton id="delete" name="delete" onClick={() => handleDelete(index)}><Icon>delete</Icon></IconButton></Tooltip>
        </>
      )
    }
  }
  return (
    <>
      <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <IconButton
          size="large"
          aria-label="more"
          aria-controls="more-menu"
          aria-haspopup="true"
          onClick={handleOpenMoreMenu}
          color="inherit"
        >
          <Icon>more_vert</Icon>
        </IconButton>
        <Menu
          id="more-menu"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseMoreMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Stack>
            {menuButtonDisplay()}
          </Stack>
        </Menu>
      </Box>
      <Stack direction="row" alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
        {menuButtonDisplay()}
      </Stack>
    </>
  )
}

function MainComponent (props) {
  const { language, setLanguage } = props
  const [editing, setEditing] = useState()
  const [tempData, setTempData] = useState()
  const [dialogAction, setDialogAction] = useState({ open: false, index: '', entryName: '' })
  useEffect(() => {
    setEditing(Array(language.length).fill(false))
  }, [language])
  if (language === undefined || language.length === 0) { return null }
  function handleEdit (index) {
    let newEditing = Array(language.length).fill(false) // this way we can close other editng
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    let tempData = [...language]  // create a copy state of skill here (this is to save performance issue)
    setTempData(tempData[index])
  }
  function handleChange (event) {
    const { name, value } = event.target
    setTempData(currentValue => ({ ...currentValue, [name]: value }))
  }
  function handleSave (index) {
    setEditing(currentValue => Array(language.length).fill(false))
    let mergeData = [...language]
    mergeData[index] = tempData
    setLanguage(mergeData)
    setTempData()
  }

  function handleCancelEdit (index) {
    let newEditing = [...editing]
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    setTempData()
  }
  function handleDelete (index) {
    let entryName = language[index].language
    setDialogAction({ open: true, entryName, index })
  }

  function editingCollapse (cell, index) {
    if (tempData === undefined) { return null }
    if (cell === 'name') {
      return (
        <Collapse in={editing[index]}>
          <TextField fullWidth size="small" variant="standard" id="language" name="language" placeholder="Language" label="Language" value={tempData.language} onChange={handleChange} />
        </Collapse>
      )
    } else if (cell === 'value') {
      return (
        <Collapse in={editing[index]}>
          <FormControl fullWidth required size="small" variant="standard">
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
              {languageLevel.map((value) =>
                <MenuItem key={value} value={value}>{value}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Collapse>
      )
    }
  }
  function handleDialogClose (event) {
    const { value } = event.target
    if (value === undefined || value === 'No') {
      // nothing happens if click out of bound or click no just close dialog
    } else if (value === 'Yes') {
      // Click yes, do stuff
      let newLanguage = [...language]
      newLanguage.splice(dialogAction.index, 1)
      setLanguage(() => newLanguage)
      setEditing(currentValue => Array(language.length).fill(false))
    } else throw Error('Error happen during dialog closing')
    setDialogAction({ open: false, index: '', entryName: '', })
  }
  return (
    <Grid item xs={12} mb={2}>
      <Table size="small">
        <TableBody>
          {language.map((value, index) => (
            <TableRow key={index}>
              <TableCell width={'40%'}>
                <Collapse in={!editing[index]}>
                  <Typography variant="body1">{value.language}</Typography>
                </Collapse>
                {editingCollapse('name', index)}
              </TableCell>
              <TableCell width={'40%'}>
                <Collapse in={!editing[index]}>
                  <Typography variant="body1">{value.level}</Typography>
                </Collapse>
                {editingCollapse('value', index)}
              </TableCell>
              <TableCell width={'20%'}>
                <TableMenuDisplay index={index} editing={editing} handleEdit={handleEdit} handleDelete={handleDelete} handleSave={handleSave} handleCancel={handleCancelEdit} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {deleteConfirmationDialog(dialogAction, handleDialogClose)}
    </Grid>
  )
}

function AddEntry (props) {
  const { setState } = props
  const dataTemplate = {
    language: '',
    level: '',
  }
  const [tempData, setTempData] = useState(dataTemplate)
  const [entryAddCollapse, setEntryAddCollapse] = useState(false)
  if (entryAddCollapse === false) { return <Button startIcon={<AddCircle />} onClick={() => setEntryAddCollapse(entryAddCollapse => true)}>Add Language</Button> }
  function handleChange (event) {
    event.preventDefault()
    const { name, value } = event.target
    setTempData(currentValue => ({ ...currentValue, [name]: value }))
  }

  function handleAdd (event) {
    event.preventDefault()
    setTempData(currentValue => dataTemplate)
    setEntryAddCollapse(() => false)
    setState(currentValue => ([...currentValue, tempData]))
  }

  function handleClearChange (event) {
    event.preventDefault()
    setTempData(currentValue => dataTemplate)
    setEntryAddCollapse(() => false)
  }
  return (
    <>
      <Button startIcon={<DoNotDisturbOn />} onClick={handleClearChange}>Close</Button>
      <Collapse in={entryAddCollapse}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField fullWidth size="small" variant="standard" id="language" name="language" placeholder="Language" label="Language" value={tempData.language} onChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth required size="small" variant="standard">
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
            </FormControl>
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


function Language (props) {
  const { state: language, setState: setLanguage } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainComponent language={language} setLanguage={setLanguage} />
        <AddEntry setState={setLanguage} />
      </Grid>
    </Grid>
  )
}

export default Language