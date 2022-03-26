import { Grid, Box, Typography } from "@mui/material"

function ProductAndService () {
  return (
    <Grid container sx={{ padding: 3 }} spacing={3}>
      <Grid item xs={12} >
        <Box sx={{ backgroundColor: 'hsla(0, 0%, 100%, 0.15)', borderRadius: 2, padding: 3 }}>
          <Typography variant="h5" color="lightgray">Product and Services</Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo nulla, placerat in massa vel, venenatis varius est. Sed quis rutrum orci, id sollicitudin nisl. Suspendisse congue mattis lorem sed auctor. Praesent tristique non diam ut condimentum. Sed vitae sem at enim sodales mattis porttitor in lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tristique massa id mollis fringilla. In ut porttitor ante, id placerat nulla. Etiam sit amet sagittis dolor.
          </Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Vestibulum sed eros in ante rhoncus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed accumsan, ligula vel hendrerit gravida, ipsum est pulvinar dolor, vitae consectetur neque nulla a tortor. Cras blandit ligula et efficitur ultrices. Pellentesque tincidunt felis non magna pharetra, lacinia ultrices sem aliquet. Aliquam varius, tellus ut lacinia consectetur, massa ligula condimentum enim, a hendrerit sem risus sed nisl. Phasellus eu mollis quam. Maecenas sodales non eros sed mattis. Praesent suscipit luctus turpis in egestas. Nunc dui leo, suscipit in semper vitae, dignissim eget nulla. Mauris orci enim, ultrices eu hendrerit quis, condimentum nec lacus. Etiam vel erat erat. Curabitur hendrerit tellus eget metus convallis, et tincidunt leo euismod.
          </Typography>
          <br />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ backgroundColor: 'hsla(0, 0%, 100%, 0.15)', borderRadius: 2, padding: 3 }}>
          <Typography variant="h5" color="lightgray">Site reference</Typography>
          <Grid container spacing={5}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" color="lightgray">Project Name</Typography>
                <Typography variant="body1" color="lightgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo nulla, placerat in massa vel, venenatis varius est. Sed quis rutrum orci, id sollicitudin nisl. Suspendisse congue mattis lorem sed auctor. Praesent tristique non diam ut condimentum. Sed vitae sem at enim sodales mattis porttitor in lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tristique massa id mollis fringilla. In ut porttitor ante, id placerat nulla. Etiam sit amet sagittis dolor.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} align='center'>
                <img src={'https://via.placeholder.com/300'} alt={'project name'} width='300' height='auto' />
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={12} md={4} align='center'>
                <img src={'https://via.placeholder.com/250'} alt={'project name'} width='250' height='auto' />
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" color="lightgray">Project Name</Typography>
                <Typography variant="body1" color="lightgray">
                  Vestibulum sed eros in ante rhoncus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed accumsan, ligula vel hendrerit gravida, ipsum est pulvinar dolor, vitae consectetur neque nulla a tortor. Cras blandit ligula et efficitur ultrices. Pellentesque tincidunt felis non magna pharetra, lacinia ultrices sem aliquet. Aliquam varius, tellus ut lacinia consectetur, massa ligula condimentum enim, a hendrerit sem risus sed nisl. Phasellus eu mollis quam. Maecenas sodales non eros sed mattis. Praesent suscipit luctus turpis in egestas. Nunc dui leo, suscipit in semper vitae, dignissim eget nulla. Mauris orci enim, ultrices eu hendrerit quis, condimentum nec lacus. Etiam vel erat erat. Curabitur hendrerit tellus eget metus convallis, et tincidunt leo euismod.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default ProductAndService