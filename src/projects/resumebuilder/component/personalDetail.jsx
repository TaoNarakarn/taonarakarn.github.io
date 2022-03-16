// Component
import countryList from "../../../staticValue/countryList"

// MUI Import
import {
  Grid, TextField, FormControl, InputLabel, Select, MenuItem,
} from "@mui/material"

// function checkIfImageExists (url, callback) {
//   const img = new Image();
//   img.src = url;

//   if (img.complete) {
//     callback(true);
//   } else {
//     img.onload = () => {
//       callback(true);
//     };

//     img.onerror = () => {
//       callback(false);
//     };
//   }
// }

function PersonalDetail (props) {
  const { state: personalDetail, setState: setPersonalDetail } = props

  if (personalDetail === undefined) { return null }
  function handleChange (event) {
    const { name, value } = event.target
    event.preventDefault()
    // if (name === 'photo') checkIfImageExists(value, exists => {
    //   if (exists) {
    //   } else if (!exists) {
    //     console.log('photo is not exist')
    //   }
    // })
    setPersonalDetail(currentState => (
      { ...currentState, [name]: value }
    ))
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField fullWidth id="fullname" name="fullname" placeholder="Full name" label='Full name' onChange={handleChange} value={personalDetail.fullname} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="email" name="email" placeholder="Email" label='Email' onChange={handleChange} value={personalDetail.email} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="photo" name="photo" placeholder="Link to your photo" label="Photo Link" onChange={handleChange} value={personalDetail.photo} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="address" name="address" placeholder="Street Address" label="Street Address" onChange={handleChange} value={personalDetail.address} />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField fullWidth id="city" name="city" placeholder="City" label="City" onChange={handleChange} value={personalDetail.city} />
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField fullWidth id="state" name="state" placeholder="State" label="State" onChange={handleChange} value={personalDetail.state} />
      </Grid>
      <Grid item xs={6} md={6}>
        <FormControl fullWidth required>
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            id="country"
            name="country"
            label="Country"
            value={personalDetail.country}
            onChange={handleChange}
            placeholder="Select Country"
          >
            {countryList.map((value) =>
              <MenuItem key={value} value={value}>{value}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField fullWidth id="tel" name="tel" placeholder="Telephone" label="Telephone" onChange={handleChange} value={personalDetail.tel} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth id="caption" name="caption" placeholder="Caption" label="Caption" onChange={handleChange} value={personalDetail.caption} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth multiline rows={3} id="about" name="about" placeholder="Write 2-3 sentences about yourself" label="About" onChange={handleChange} value={personalDetail.about} />
      </Grid>
    </Grid >
  )
}

export default PersonalDetail