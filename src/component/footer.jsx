import { Container, Box, Typography, Link, CssBaseline } from '@mui/material'

const Copyright = () => {
  const from = 2022
  const current = new Date().getFullYear()
  let fromTo = "From 2022 - " + current + "."
  if (from === current) { fromTo = "2022." }

  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {/* {'Copyright © '} */}
      Built using{' '}
      <Link color="inherit" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">ReactJS</Link>{' & '}
      <Link color="inherit" href="https://mui.com/" target="_blank" rel="noopener noreferrer">Material UI</Link>{' '}
      {fromTo}
    </Typography>
  )
}

const Footer = (props) => {
  // const { description, title } = props;

  return (
    <>
      <CssBaseline />
      <Box
        component="footer"
        position="sticky"
        sx={{
          bgcolor: 'background.paper',
          py: 3,
          px: 2,
          mt: "auto",
          border: 1,
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          {/* <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography> */}
          <Copyright />
        </Container>
      </Box>
    </>
  );
}

export default Footer