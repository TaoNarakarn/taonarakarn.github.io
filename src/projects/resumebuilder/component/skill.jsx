// Core dependencies
import { useEffect, useState } from "react"

// component
import { skillLevelRate, deleteConfirmationDialog } from './staticFunction'

// MUI import
import {
  Grid, Box, Collapse, Stack, Typography, FormControl, InputLabel, Select, Menu, MenuItem, TextField, Button, IconButton, Icon,
  Table, TableBody, TableRow, TableCell, Tooltip,
} from "@mui/material"
import { AddCircle, DoNotDisturbOn, } from "@mui/icons-material"

const skillLevelList = [
  'Beginner',
  'Average',
  'Skilled',
  'Speacialst',
  'Expert',
]

function TableMenuDisplay (props) { // Change menu icon to 3 dots when on mobile and change button icon in edit mode
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

function SkillSection (props) { // list of skills
  const { skill, setSkill } = props
  const [editing, setEditing] = useState()
  const [editSkill, setEditSkill] = useState()
  const [dialogAction, setDialogAction] = useState({ open: false, index: '', entryName: '' })

  useEffect(() => {
    setEditing(Array(skill.length).fill(false))
  }, [skill])

  // // while edit other function should have disabled? *** not thinking about it yet ***
  if (skill === undefined || skill.length === 0) { return null }

  function handleEditSkill (index) { // for opening/closing collapse
    let newEditing = Array(skill.length).fill(false) // this way we can close other editng
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    let tempSkill = [...skill]  // create a copy state of skill here (this is to save performance issue)
    setEditSkill(tempSkill[index])
  }

  function handleSkillChange (event) { // edit only on copy state
    const { name, value } = event.target
    setEditSkill(currentValue => ({ ...currentValue, [name]: value }))
  }

  function handleSaveSkill (index) { // when save merge edit skill with main skill state
    setEditing(currentValue => Array(skill.length).fill(false))
    let mergeSkill = [...skill]
    mergeSkill[index] = editSkill
    setSkill(mergeSkill)
    setEditSkill()
  }

  function handleCancelEditSkill (index) {
    let newEditing = [...editing]
    newEditing[index] = !newEditing[index]
    setEditing(currentValue => newEditing)
    setEditSkill()
  }

  function handleDeleteSkill (index) { // open confirmation dialog and delete if click Yes only
    let entryName = skill[index].skill
    setDialogAction({ open: true, entryName, index })
  }

  const handleDialogClose = (event) => {
    const { value } = event.target
    if (value === undefined || value === 'No') {
      // nothing happens if click out of bound or click no just close dialog
    } else if (value === 'Yes') {
      // Click yes, do stuff
      let newSkill = [...skill]
      newSkill.splice(dialogAction.index, 1)
      setSkill(() => newSkill)
      setEditing(currentValue => Array(skill.length).fill(false))
    } else throw Error('Error happen during dialog closing')
    setDialogAction({ open: false, index: '', entryName: '', })
  }

  function editingCollapse (cell, index) { // create another function component to prevent error on editskill empty
    if (editSkill === undefined) { return <Collapse in={editing[index]}></Collapse> } // put it here so animation is a bit smoother
    if (cell === 'name') {
      return (
        <Collapse in={editing[index]}>
          <TextField fullWidth size="small" variant="standard" id="skill" name="skill" placeholder="Skill" label="Skill" value={editSkill.skill} onChange={(event) => handleSkillChange(event, index)} />
        </Collapse>
      )
    } else if (cell === 'value') {
      return (
        <Collapse in={editing[index]}>
          <FormControl fullWidth required size="small" variant="standard">
            <InputLabel id="skill-level-label">Skill level</InputLabel>
            <Select
              labelId="skill-level-label"
              id="level"
              name="level"
              label="Skill Level"
              value={editSkill.level}
              onChange={handleSkillChange}
              placeholder="Skill level"
            >
              {skillLevelList.map((value, index) =>
                <MenuItem key={index} value={index + 1}>{value}</MenuItem>
              )}
            </Select>
          </FormControl>
        </Collapse>
      )
    }
  }

  return (
    <Grid item xs={12} mb={2}>
      <Table size="small">
        <TableBody>
          {skill.map((skill, index) => (
            <TableRow key={index}>
              <TableCell width={'40%'}>
                <Collapse in={!editing[index]}>
                  <Typography variant="body1">{skill.skill}</Typography>
                </Collapse>
                {editingCollapse('name', index, editSkill)}
              </TableCell>
              <TableCell width={'40%'}>
                <Collapse in={!editing[index]}>
                  {skillLevelRate(skill.level)}
                </Collapse>
                {editingCollapse('value', index, editSkill)}
              </TableCell>
              <TableCell width={'20%'}>
                <TableMenuDisplay index={index} editing={editing} handleEdit={handleEditSkill} handleDelete={handleDeleteSkill} handleSave={handleSaveSkill} handleCancel={handleCancelEditSkill} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {deleteConfirmationDialog(dialogAction, handleDialogClose)}
    </Grid>
  )
}

function AddSkillCollapse (props) { // add skill to the list (cancel button will reset and clear temp value)
  const { setSkill } = props
  const skillTemplate = {
    skill: '',
    level: '',
  }
  const [entryAddCollapse, setEntryAddCollapse] = useState(false)
  const [tempSkill, setTempSkill] = useState(skillTemplate)
  if (entryAddCollapse === false) { return <Button startIcon={<AddCircle />} onClick={() => setEntryAddCollapse(socialAddCollapse => true)}>Add skills</Button> }
  function handleSkillChange (event) {
    event.preventDefault()
    const { name, value } = event.target
    setTempSkill(currentValue => ({ ...currentValue, [name]: value }))
  }

  function handleAdd (event) {
    event.preventDefault()
    setTempSkill(currentValue => skillTemplate)
    setEntryAddCollapse(() => false)
    setSkill(currentValue => ([...currentValue, tempSkill]))
  }

  function handleClearChange (event) {
    event.preventDefault()
    setTempSkill(currentValue => skillTemplate)
    setEntryAddCollapse(() => false)
  }

  return (
    <>
      <Button startIcon={<DoNotDisturbOn />} onClick={handleClearChange}>Close</Button>
      <Collapse in={entryAddCollapse}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5}>
            <TextField fullWidth size="small" variant="standard" id="skill" name="skill" placeholder="Skill" label="Skill" value={tempSkill.skill} onChange={handleSkillChange} />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControl fullWidth required size="small" variant="standard">
              <InputLabel id="skill-level-label">Skill level</InputLabel>
              <Select
                labelId="skill-level-label"
                id="level"
                name="level"
                label="Skill Level"
                value={tempSkill.level}
                onChange={handleSkillChange}
                placeholder="Skill level"
              >
                {skillLevelList.map((value, index) =>
                  <MenuItem key={index} value={index + 1}>{value}</MenuItem>
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

function Skill (props) {
  const { state: skill, setState: setSkill } = props
  return (
    <Grid container>
      <Grid item xs={12}>
        <SkillSection skill={skill} setSkill={setSkill} />
        <AddSkillCollapse setSkill={setSkill} />
      </Grid>
    </Grid>
  )
}

export default Skill