import { useState } from 'react'

import {
  Grid, Stack, Collapse, Button, Link, Rating, Tooltip, Icon, IconButton,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@mui/material'
import {
  AddCircle, DoNotDisturbOn, Cancel,
  Facebook, Instagram, LinkedIn, Pinterest, Reddit, Twitter, YouTube, Public,
  Circle, CircleOutlined,
  SignalCellular0Bar, SignalCellular1Bar, SignalCellular2Bar, SignalCellular3Bar, SignalCellular4Bar, GitHub
} from '@mui/icons-material'

export const socialIcon = (platform) => {
  switch (platform) {
    case 'LinkedIn': return <LinkedIn color="action" />
    case 'GitHub': return <GitHub color="action" />
    case 'Facebook': return <Facebook color="action" />
    case 'Instagram': return <Instagram color="action" />
    case 'Pinterest': return <Pinterest color="action" />
    case 'Reddit': return <Reddit color="action" />
    case 'Twitter': return <Twitter color="action" />
    case 'YouTube': return <YouTube color="action" />
    default: return <Public color="action" />
  }
}

export function skillLevelRate (level) {
  switch (level) {
    case 'Beginner': return <Rating value={1} readOnly size="small" icon={<Circle fontSize="small " />} emptyIcon={<CircleOutlined fontSize="inherit" />} />
    case 'Average': return <Rating value={2} readOnly size="small" icon={<Circle fontSize="inherit" />} emptyIcon={<CircleOutlined fontSize="inherit" />} />
    case 'Skilled': return <Rating value={3} readOnly size="small" icon={<Circle fontSize="inherit" />} emptyIcon={<CircleOutlined fontSize="inherit" />} />
    case 'Speacialst': return <Rating value={4} readOnly size="small" icon={<Circle fontSize="inherit" />} emptyIcon={<CircleOutlined fontSize="inherit" />} />
    case 'Expert': return <Rating value={5} readOnly size="small" icon={<Circle fontSize="inherit" />} emptyIcon={<CircleOutlined fontSize="inherit" />} />
    default: return <Rating value={0} readOnly size="small" icon={<Circle fontSize="inherit" />} emptyIcon={<CircleOutlined fontSize="inherit" />} />
  }
}

export function signalLevel (level) {
  switch (level) {
    case 1: return <SignalCellular1Bar />
    case 2: return <SignalCellular2Bar />
    case 3: return <SignalCellular3Bar />
    case 4: return <SignalCellular4Bar />
    default: <SignalCellular0Bar />
  }
}


// export function ComponentMenu (props) { // settings menu *** experimental ***
//   const { componentName } = props
//   const [visibility, setVisibility] = useState(true)
//   // const { setVisible, setPosition, setShowInEditor } = props
//   function setVisible () {
//     console.log('visibility toggle')
//     setVisibility(visibility => !visibility)
//   }
//   return (
//     <Grid container>
//       <Grid item xs={12} display='flex' justifyContent='flex-end'>
//         <Tooltip title="Show in preview"><IconButton id="edit" name="edit" onClick={setVisible}><Icon>{visibility ? 'visibility' : 'visibility_off'}</Icon></IconButton></Tooltip>
//         <Button>remove block</Button>
//       </Grid>
//     </Grid>
//   )
// }

/**
 * When click delete on entry, will popup confirmation dialog, Use in conjunction with deleteConfirmationDialog function
 * @param {Number} index - index of entry to be delete
 * @param {*} state - main state of current component 
 * @param {Function} setDialogAction - function to set dialogAction object
 * @param {String} key - key to show as entryName to be delete
 */
export function handleDelete (index, state, setDialogAction, key) {
  let entryName = state[index][key]
  setDialogAction({ open: true, entryName, index })
}

/** 
 * Delete confirmation dialog
 * - Argument 2
 * @param {Object} dialogAction * open {bool} > true open dialog, false close dialog
 * * index {Number} > index to delete from array (if confirmed)
 * * entryName {String} > just description of entry to delete
 * @param {Function} handleDialogClose
 * */
export function deleteConfirmationDialog (dialogAction, handleDialogClose) {
  return (
    <Dialog open={dialogAction.open} onClose={handleDialogClose} aria-labelledby={'delete-entry-dialog'} aria-describedby={'deleting-entry-dialog-confirmation'}>
      <DialogTitle id="alert-dialog-title">
        Delete Entry
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Confirm delete: {dialogAction.entryName}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button value='Yes' onClick={handleDialogClose} autoFocus>Yes</Button>
        <Button value='No' onClick={handleDialogClose}>No</Button>
      </DialogActions>
    </Dialog>
  )
}


/**
 * Adding Entry to main state
 * @param {*} props
 * * setState - useState function prop from main state to add entry
 * * mainInput - main input component that have all inputs requried for it, it need 2 arguments (tempData, handleChange) from this component
 * * buttonDisplay - change display type of Save and Cancel button 'button' and 'icon' default 'icon'
 * * dataTemplate - Object that have entry data point to keep input component in control
 * * entryName - String that just change name of add button to + add "entryName"
 * @returns Compoent that add entry to (setState props)
 */
export function AddEntry (props) {
  const { setState, mainInput, buttonDisplay, dataTemplate, entryName } = props
  const [tempData, setTempData] = useState(dataTemplate)
  const [entryAddCollapse, setEntryAddCollapse] = useState(false)
  if (entryAddCollapse === false) { return <Button startIcon={<AddCircle />} onClick={() => setEntryAddCollapse(entryAddCollapse => true)}>Add {entryName}</Button> }

  function handleChange (event) {
    const { name, value, type } = event.target
    if (type === 'checkbox') { setTempData(currentValue => ({ ...currentValue, [name]: event.target.checked })) }
    else { setTempData(currentValue => ({ ...currentValue, [name]: value })) }
  }

  function handleAdd (event) {
    setTempData(currentValue => dataTemplate)
    setEntryAddCollapse(() => false)
    setState(currentValue => ([...currentValue, tempData]))
  }

  function handleCancelAdd (event) {
    setTempData(currentValue => dataTemplate)
    setEntryAddCollapse(() => false)
  }

  function displayButton (buttonDisplay) {
    let buttonType = (
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center" spacing={3}>
          <Button startIcon={<AddCircle />} variant='contained' onClick={handleAdd}>Add</Button>
          <Button startIcon={<Cancel />} variant='contained' color='warning' onClick={handleCancelAdd}>Cancel</Button>
        </Stack>
      </Grid>
    )
    let iconType = (
      <Grid item xs={12} md={2}>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <Tooltip title="Add"><IconButton id="save" name="save" onClick={handleAdd}><Icon>check</Icon></IconButton></ Tooltip>
          <Tooltip title="Cancel"><IconButton id="cancel" name="cancel" onClick={handleCancelAdd}><Icon>close</Icon></IconButton></ Tooltip>
        </Stack>
      </Grid>
    )
    switch (buttonDisplay) {
      case 'button':
        return buttonType
      case 'icon':
        return iconType
      default:
        return iconType
    }
  }

  return (
    <>
      <Button startIcon={<DoNotDisturbOn />} onClick={handleCancelAdd}>Close</Button>
      <Collapse in={entryAddCollapse}>
        <Grid container spacing={2}>
          {mainInput(tempData, handleChange)}
          {displayButton(buttonDisplay)}
        </Grid>
      </Collapse>
    </>
  )
}

/** 
 * Create a link to _target blank
 * - this only create link with same display as href
 * - Take 1 Argument
 * - link > url of target
*/
export function createLink (link) {
  return <Link href={link} target="_blank" rel="noopener noreferrer">{link}</Link>
}