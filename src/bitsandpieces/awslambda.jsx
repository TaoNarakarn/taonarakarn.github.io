// Dependencies import
import { useState } from 'react'
import axios from 'axios'

import { Typography, Button, Box, Stack } from "@mui/material"

const AWSLambda = () => {
  const [lambda, setLambda] = useState('')
  const handleLambdaGet = (event) => {
    //temp id from monbodb atlas
    //5c78de48040cff3878d4ae70
    event.preventDefault()
    axios.get('https://gz353w0rce.execute-api.ap-southeast-1.amazonaws.com/AlphaStage/')
      .then(response => {
        console.log(response.data)
        setLambda(JSON.stringify(response.data))
      }, (err) => {
        console.log(err)
      })
  }
  const handleLambdaPost = (event) => {
    event.preventDefault()
    axios.post('https://gz353w0rce.execute-api.ap-southeast-1.amazonaws.com/AlphaStage', {
      body: {
        message: "Hello Lambda from local dev",
      }
    })
      .then(response => {
        console.log(response)
        setLambda(JSON.stringify(response.data))
      }, (err) => {
        console.log(err)
      })
  }
  // (it will show error since I'm trying to set it to connect to mongoDB atlas from there when finish it should get some mock data from database)
  return (
    <>
      <Typography variant='h6'>GET and POST requet to AWS Lambda</Typography>
      <br />
      <Stack direction={"row"} spacing={2}>
        <Button variant="contained" onClick={handleLambdaGet}>Get request from lambda</Button>
        <Button variant="contained" onClick={handleLambdaPost}>Send Post request to lambda</Button>
      </Stack>
      <br />
      <Typography variant='body1'>Response : </Typography>
      <Box>{lambda}</Box>
    </>
  )
}

export default AWSLambda