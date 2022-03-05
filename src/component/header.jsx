// Core dependencies
import React, { useState, useContext } from 'react'

// Context from App.js
import { AppContext } from '../App'

// Nav menu
import Pages from './nav'

// MUI CSS Framework component
import {
  Stack, Switch, AppBar, Container, Toolbar, Box, Menu, MenuItem, Button, Icon, IconButton, Typography,
  // Tooltip, Avatar 
} from '@mui/material'

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const SmallScreenMenu = (props) => {
  const { anchorElNav, setAnchorElNav, handleCloseNavMenu } = props

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <Icon>menu</Icon>
      </IconButton>
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
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {Pages.map((page, index) => (
          <MenuItem key={index} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page.linkComponent}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

const UserIcon = (props) => {
  const { theme, setTheme } = useContext(AppContext)
  // const { theme, setTheme } = props
  // const [anchorElUser, setAnchorElUser] = useState(null)
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget)
  // }
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // }
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Stack direction="row" alignItems="center" gap={1}>
        <Icon>dark_mode</Icon>
        <Switch defaultChecked color="default" onChange={() => setTheme(!theme)} />
        <Icon>light_mode</Icon>
        {/* <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Tao Narakarn"></Avatar>
          </IconButton>
        </Tooltip> */}
      </Stack>
      {/* <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu> */}
    </Box>
  )
}

function Header (props) {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Container maxWidth="x1">
          <Toolbar>
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Logo
            </Typography> */}
            {/* Small screen menu box */}
            <SmallScreenMenu anchorElNav={anchorElNav} setAnchorElNav={setAnchorElNav} handleCloseNavMenu={handleCloseNavMenu} />
            {/* Big screen bar */}
            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {Pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  href={page.link}
                >
                  {page.linkWord}
                </Button>
              ))}
            </Box>
            {/* Right of the screen */}
            <UserIcon theme={props.theme} setTheme={props.setTheme} />
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment >
  )
}

export default Header