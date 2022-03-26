import { Box, Typography } from "@mui/material"


function Footer () {
  return (
    <Box
      component="footer"
      position="sticky"
      sx={{
        bgcolor: 'black',
        py: 3,
        px: 2,
        mt: "auto",
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Box><Typography variant="h5" color="white">company details</Typography></Box>
        <Box><Typography variant="h5" color="white">Social Block</Typography></Box>
      </Box>
      <Box><Typography variant="body1" color="white" align="center">Copyright 2022 @ </Typography></Box>
    </Box>
  )
}

export default Footer