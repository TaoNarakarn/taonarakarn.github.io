// Core dependencies
import { useEffect, useState } from "react"

// component
import { socialIcon, deleteConfirmationDialog, createLink } from './staticFunction'

// MUI import
import {
  Grid, Box, Collapse, Stack, Typography, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Button, IconButton, Icon,
  Table, TableBody, TableRow, TableCell, Tooltip,
} from "@mui/material"
import { AddCircle, DoNotDisturbOn, } from "@mui/icons-material"

const socialList = [
  'LinkedIn',
  'GitHub',
  'Facebook',
  'Instagram',
  'Pinterest',
  'Reddit',
  'Twitter',
  'YouTube',
  'Other',
]

function TableMenuDisplay (props) { // Change menu icon to 3 dots when on mobile and change button icon in edit mode
  const { index, editing, handleEdit, handleDelete, handleSave, handleCancel } = props
  const [anchorElNav, setAnchorElNav] = useState(null)

  // State to open/close popup menu on mobile screen
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

function MainSocial (props) { // main social list display
  const { social, setSocial } = props
  const [editing, setEditing] = useState() // state to manage collapse for each row
  const [tempSocial, setTempSocial] = useState()
  const [dialogAction, setDialogAction] = useState({ open: false, index: '', entryName: '', })
  useEffect(() => {
    setEditing(Array(social.length).fill(false))
  }, [social])
  if (social === undefined || social.length === 0) { return null }
  // Edit section
  function handleEdit (index) { // when click edit button open collapse 
    let newEditing = Array(social.length).fill(false)
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    let tempSocialIndex = [...social][index]
    setTempSocial(tempSocialIndex)
  }
  function handleEditChange (event) { // when type in editing field
    const { name, value } = event.target
    setTempSocial(currentValue => ({ ...currentValue, [name]: value }))
  }
  function handleSave (index) { // save edit
    setEditing(currentValue => Array(social.length).fill(false))
    let newSocial = [...social]
    newSocial[index] = tempSocial
    setSocial(currentValue => newSocial)
    setTempSocial()
  }
  function handleCancel (index) { // cancel editing
    let newEditing = [...editing]
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    setTempSocial()
  }
  // Delete entry
  function handleDelete (index) {
    let entryName = social[index].platform
    setDialogAction({ open: true, index, entryName }) // open dialog to ask for delete confirmation
  }

  function handleDialogClose (event) { // after dialog is close (yes, no, click anywhere else)
    const { value } = event.target
    if (value === undefined || value === 'No') {
      // nothing happens if click out of bound or click no just close dialog
    } else if (value === 'Yes') {
      // Click yes, do stuff
      let newSocial = [...social]
      newSocial.splice(dialogAction.index, 1)
      setSocial(() => newSocial)
      setEditing(currentValue => Array(social.length).fill(false))
    } else throw Error('Error happen during dialog closing')
    setDialogAction({ open: false, index: '', entryName: '', })
  }

  function editingCollapse (index) { // collapse when click edit button
    if (tempSocial === undefined) { return null }
    return (
      <Collapse in={editing[index]} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth required size="small" variant="standard">
              <InputLabel id="social-platform-label">Platform</InputLabel>
              <Select
                labelId="social-platform-label"
                id="platform"
                name="platform"
                label="Platform"
                value={tempSocial.platform}
                onChange={handleEditChange}
                placeholder="Platform"
              >
                {socialList.map((value) =>
                  <MenuItem key={value} value={value}><Stack direction='row' alignItems='center'>{socialIcon(value)}{' '}{value}</Stack></MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField fullWidth size="small" variant="standard" id="link" name="link" placeholder="Link" label="Link" value={tempSocial.link} onChange={handleEditChange} />
          </Grid>
        </Grid>
      </Collapse>
    )
  }

  return (
    <>
      <Table size='small'>
        <TableBody>
          {social.map((value, index) =>
            <TableRow key={index}>
              <TableCell width="80%">
                <Collapse in={!editing[index]}>
                  <Stack direction='row' alignItems='center'>{socialIcon(value.platform)} {' '} <Typography variant="body1">{createLink(value.link)}</Typography></Stack>
                </Collapse>
                {editingCollapse(index)}
              </TableCell>
              <TableCell width="20%">
                <TableMenuDisplay index={index} editing={editing} handleEdit={handleEdit} handleDelete={handleDelete} handleSave={handleSave} handleCancel={handleCancel} />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {deleteConfirmationDialog(dialogAction, handleDialogClose)}
    </>
  )
}

function AddSocial (props) { // add collapse
  const { setSocial } = props
  const socialTemplate = {
    platform: '',
    link: '',
  }
  const [addSocialCollapse, setAddSocialCollapse] = useState(false)
  const [tempSocial, setTempSocial] = useState(socialTemplate)
  if (addSocialCollapse === false) { return <Button startIcon={<AddCircle />} onClick={() => setAddSocialCollapse(addSocialCollapse => true)}>Add social link</Button> }
  function handleAddChange (event) {
    const { name, value } = event.target
    setTempSocial(currentValue => ({ ...currentValue, [name]: value }))
  }
  function handleAdd () {
    setAddSocialCollapse(false)
    setSocial(currentValue => [...currentValue, tempSocial])
    setTempSocial(socialTemplate)
  }
  function handleCancel () {
    setAddSocialCollapse(false)
    setTempSocial(socialTemplate)
  }
  return (
    <>
      <Button startIcon={<DoNotDisturbOn />} onClick={handleCancel}>Close</Button>
      <Collapse in={addSocialCollapse}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth required size="small" variant="standard">
              <InputLabel id="social-platform-label">Platform</InputLabel>
              <Select
                labelId="social-platform-label"
                id="platform"
                name="platform"
                label="Platform"
                value={tempSocial.platform}
                onChange={handleAddChange}
                placeholder="Platform"
              >
                {socialList.map((value) =>
                  <MenuItem key={value} value={value}><Stack direction='row' alignItems='center'>{socialIcon(value)}{' '}{value}</Stack></MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth size="small" variant="standard" id="link" name="link" placeholder="Link" label="Link" value={tempSocial.link} onChange={handleAddChange} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Stack direction="row" alignItems="center" justifyContent="center">
              <Tooltip title="Add"><IconButton id="add" name="add" onClick={handleAdd}><Icon>check</Icon></IconButton></ Tooltip>
              <Tooltip title="Cancel"><IconButton id="cancel" name="cancel" onClick={handleCancel}><Icon>close</Icon></IconButton></ Tooltip>
            </Stack>
          </Grid>
        </Grid>
      </Collapse>
    </>
  )
}

function Social (props) {
  const { state: social, setState: setSocial } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <MainSocial social={social} setSocial={setSocial} />
        <AddSocial setSocial={setSocial} />
      </Grid>
    </Grid>
  )
}

export default Social 