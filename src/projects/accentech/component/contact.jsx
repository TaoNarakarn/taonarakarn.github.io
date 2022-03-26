import { Button, Box, Grid, Stack, TextField, Typography } from "@mui/material"

function Contact () {
  return (
    <Grid container sx={{ padding: 3 }} spacing={3}>
      <Grid item xs={12} >
        <Box sx={{ backgroundColor: 'hsla(0, 0%, 100%, 0.15)', borderRadius: 2, padding: 3 }}>
          <Typography variant="h5" color="lightgray">Content page information</Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo nulla, placerat in massa vel, venenatis varius est. Sed quis rutrum orci, id sollicitudin nisl. Suspendisse congue mattis lorem sed auctor. Praesent tristique non diam ut condimentum. Sed vitae sem at enim sodales mattis porttitor in lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tristique massa id mollis fringilla. In ut porttitor ante, id placerat nulla. Etiam sit amet sagittis dolor.
          </Typography>
          <br />
        </Box>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container item xs={12} sx={{ backgroundColor: 'white', borderRadius: 2, padding: 3 }}>
          <Typography variant="h6" sx={{ paddingBottom: 2 }}>Contact us</Typography>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth required id="name" name="name" label="Name" placeholder="Please enter your name"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required id="email" name="email" label="Email" placeholder="Please enter your email"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth required id="subject" name="subject" label="Subject" placeholder="Please enter Subject"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline minRows={5} required id="contactBody" name="contactBody" label="Your query" placeholder="Please nput your query"></TextField>
            </Grid>
            <Grid item xs={12}>
              <Stack direction='row' gap={3} justifyContent='center'>
                <Button variant='contained'>Send</Button>
                <Button variant='contained' color="warning">Clear form</Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5} align='center'>
        <img src={'https://via.placeholder.com/400'} alt={'contact page'} width='400' height='auto' />
      </Grid>
    </Grid>
  )
}

export default Contact