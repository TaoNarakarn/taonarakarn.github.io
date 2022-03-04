// Dependencies import
import { Chart } from 'chart.js'

// MUI imports
import { Typography, Grid } from "@mui/material"

const ChartJS = () => {
  let chart = new Chart()
  return (
    <Grid container>
      <Typography>Chart.js playground</Typography>
      {chart}
    </Grid>
  )
}




export default ChartJS