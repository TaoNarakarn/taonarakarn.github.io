import { Grid, Box, Typography } from "@mui/material"

function About () {
  return (
    <Grid container sx={{ padding: 3 }}>
      <Grid item xs={12} >
        <Box sx={{ backgroundColor: 'hsla(0, 0%, 100%, 0.15)', borderRadius: 2, padding: 3 }}>
          <Typography variant="h5" color="lightgray">About us</Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi justo nulla, placerat in massa vel, venenatis varius est. Sed quis rutrum orci, id sollicitudin nisl. Suspendisse congue mattis lorem sed auctor. Praesent tristique non diam ut condimentum. Sed vitae sem at enim sodales mattis porttitor in lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tristique massa id mollis fringilla. In ut porttitor ante, id placerat nulla. Etiam sit amet sagittis dolor.
          </Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Vestibulum sed eros in ante rhoncus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed accumsan, ligula vel hendrerit gravida, ipsum est pulvinar dolor, vitae consectetur neque nulla a tortor. Cras blandit ligula et efficitur ultrices. Pellentesque tincidunt felis non magna pharetra, lacinia ultrices sem aliquet. Aliquam varius, tellus ut lacinia consectetur, massa ligula condimentum enim, a hendrerit sem risus sed nisl. Phasellus eu mollis quam. Maecenas sodales non eros sed mattis. Praesent suscipit luctus turpis in egestas. Nunc dui leo, suscipit in semper vitae, dignissim eget nulla. Mauris orci enim, ultrices eu hendrerit quis, condimentum nec lacus. Etiam vel erat erat. Curabitur hendrerit tellus eget metus convallis, et tincidunt leo euismod.
          </Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Quisque ut tellus hendrerit, egestas nisi id, semper lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ultricies tortor non pellentesque finibus. Nulla sit amet velit porttitor, porta massa vitae, pretium quam. Aenean sed blandit erat. Praesent vulputate, quam a bibendum imperdiet, velit mauris posuere sem, quis egestas neque odio vel ligula. In lacus risus, semper ac aliquet eu, dignissim sed ligula. Sed malesuada, justo at congue efficitur, urna eros pulvinar est, ac auctor libero purus quis enim. Nulla auctor lacus eleifend diam malesuada auctor. Nulla dapibus tempor quam id dignissim. Nulla id purus iaculis, ornare massa eu, pharetra ex. Nullam blandit ante a ipsum vestibulum pulvinar. Maecenas pulvinar libero at felis eleifend commodo. Phasellus ac ligula tempor, sagittis lacus vel, convallis quam. Donec condimentum ut lacus quis rhoncus.
          </Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Etiam semper commodo nulla quis ullamcorper. Proin facilisis et justo eu eleifend. Nunc tristique sodales mi, a auctor erat laoreet sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fringilla pretium metus ac aliquet. Curabitur id lacus facilisis, aliquet nunc ac, ultrices dolor. Fusce aliquet augue et eleifend vehicula. Quisque venenatis elit quis velit rhoncus, porta condimentum mauris tincidunt.
          </Typography>
          <br />
          <Typography variant="body1" color="lightgray">
            Integer interdum nunc id lectus molestie varius. Suspendisse tempus dui faucibus pretium vestibulum. Cras gravida dui tortor, nec facilisis sem tempus vel. Ut consequat ipsum nunc, vel blandit ipsum rhoncus eu. Phasellus at justo metus. Fusce id tempor lacus. Vestibulum ultrices maximus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default About