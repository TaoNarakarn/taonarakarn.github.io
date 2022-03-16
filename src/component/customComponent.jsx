import { useState } from 'react'
import { Typography, Button, Menu, MenuItem, } from '@mui/material'


/** 
 * This class component create sub menu on another menu
 * - Takes 2 props
 * -  linkName : display on the menu as this link name
 * -  subMenu : Link component of sub menu 
 */
export function MenuComponent (props) {
  const { linkName, subMenu } = props
  const [anchorElNav, setAnchorElNav] = useState(null)
  function handleOpenSubMenu (event) {
    console.log('clicked menu')
    setAnchorElNav(event.currentTarget)
  }
  function handleCloseSubMenu () {
    setAnchorElNav(null)
  }

  return (
    <>
      {/* <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}> */}
      <Button
        aria-label="Open project sub menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenSubMenu}
        color="inherit"
      >
        <Typography textAlign="center">{linkName}</Typography>
      </Button>
      <Menu
        id="menu-appbar"
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
        onClose={handleCloseSubMenu}
      // sx={{
      //   display: { xs: 'block', md: 'none' },
      // }}
      >
        {subMenu.map((subMenu, index) => (
          <MenuItem key={index} onClick={handleCloseSubMenu}>
            <Typography textAlign="center">{subMenu}</Typography>
          </MenuItem>
        ))}
      </Menu>
      {/* </Box> */}
    </>
  )
}
