import {
  Button, Link, Rating,
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions,
} from '@mui/material'
import {
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

/** 
 * Delete confirmation dialog
 * - Argument 2
 * - Object dialogAction({open: bool, index: int, entryName: text})
 * - - open > true open dialog, false close dialog
 * - - index > index to delete from array (if confirmed)
 * - - entryName > just description of entry to delete
 * - Function handleDialogClose
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
 * Create a link to _target blank
 * - this only create link with same display as href
 * - Take 1 Argument
 * - link > url of target
*/
export function createLink (link) {
  return <Link href={link} target="_blank" rel="noopener noreferrer">{link}</Link>
}