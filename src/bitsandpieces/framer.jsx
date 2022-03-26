import { useState } from 'react'
import { motion, AnimatePresence, Reorder, useMotionValue } from 'framer-motion'

import { Grid, Box, TextField, Typography, IconButton, Button, Paper } from '@mui/material'
import { Visibility, VisibilityOff, Delete, Add } from '@mui/icons-material'

const dummy = {
  text1: 'Component 1',
  text2: 'Component 2',
}

function MenuComponent (props) {
  const { component } = props
  const { visibility, setVisibility, componentDisplay, setComponentDisplay } = props.menuState
  function handleChangeVisibility () {
    setVisibility(currentValue => ({ ...currentValue, [component]: !visibility[component] }))
  }
  function handleSetDisplay () {
    setComponentDisplay(currentValue => ({ ...currentValue, [component]: !componentDisplay[component] }))
  }
  return (
    <Box display="flex" justifyContent="flex-end">
      <IconButton onClick={handleChangeVisibility}>{visibility[component] ? <Visibility /> : <VisibilityOff />}</IconButton>
      <IconButton onClick={handleSetDisplay}><Delete /></IconButton>
    </Box>
  )
}

function EditorComponent1 (props) {
  if (!props.menuState.componentDisplay.EditorComponent1) { return null }
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <MenuComponent component={'EditorComponent1'} menuState={props.menuState} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth value={dummy.text1}></TextField>
      </Grid>
    </Grid>
  )
}

function EditorComponent2 (props) {
  if (!props.menuState.componentDisplay.EditorComponent2) { return null }
  return (

    <Grid container item xs={12} >
      <Grid item xs={12}>
        <MenuComponent component={'EditorComponent2'} menuState={props.menuState} />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth value={dummy.text2}></TextField>
      </Grid>
    </Grid>
  )
}

function ComponentBin (props) {
  const { componentDisplay, setComponentDisplay } = props
  const disableArray = Object.entries(componentDisplay)
  function handleSetDisplay (event) {
    setComponentDisplay(currentValue => ({ ...currentValue, [event.target.name]: !componentDisplay[event.target.name] }))
  }
  return (
    <Grid container item xs={12}>
      {disableArray.map((value, index) =>
      (!value[1] ?
        <Button key={index} name={value[0]} onClick={handleSetDisplay} startIcon={<Add />}>{value[0]}</Button>
        : null)
      )}
    </Grid>
  )
}

function Editor (props) {
  const componentOrderTemplate = [
    'EditorComponent1',
    'EditorComponent2'
  ]
  const [componentOrder, setComponentOrder] = useState(componentOrderTemplate)


  function componentSwitch (component) {
    switch (component) {
      case 'EditorComponent1': return <Reorder.Item value={component} id={component}><EditorComponent1 menuState={props.menuState} /></Reorder.Item>
      case 'EditorComponent2': return <Reorder.Item value={component} id={component}><EditorComponent2 menuState={props.menuState} /></Reorder.Item>
      default: return null
    }
  }
  return (
    <Grid container item xs={12}>
      <Reorder.Group axis="y" values={componentOrder} onReorder={setComponentOrder}>
        {componentOrder.map((value, index) =>
          <AnimatePresence key={index}>
            {props.menuState.componentDisplay[value] && (
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.15 }}
              >
                {componentSwitch(value)}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </Reorder.Group>
    </Grid>
  )
}

function component1 (visibility, componentDisplay) {
  return (
    <Grid item xs={12} sx={{ border: 1 }}>
      <AnimatePresence>
        {componentDisplay['EditorComponent1'] && (
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Grid item xs={12}>
              <Typography>{dummy.text1}</Typography>
            </Grid>
          </motion.div>
        )}
      </AnimatePresence>
    </Grid>
  )
}

function Preview (props) {
  const { visibility, componentDisplay } = props
  return (
    <Grid container item xs={12}>
      {component1(visibility, componentDisplay)}
      {componentDisplay.EditorComponent2 ? visibility.EditorComponent2 ? <Typography>{dummy.text2}</Typography> : null : null}
    </Grid>
  )
}

const visibilityTemplate = {
  EditorComponent1: true,
  EditorComponent2: true,
}

const componentDisplayTemplate = {
  EditorComponent1: true,
  EditorComponent2: true,
}

function Framer () {
  const [visibility, setVisibility] = useState(visibilityTemplate)
  const [componentDisplay, setComponentDisplay] = useState(componentDisplayTemplate)
  const menuState = {
    visibility,
    setVisibility,
    componentDisplay,
    setComponentDisplay
  }
  return (
    <Grid container spacing={1}>
      <Grid container item xs={6}>
        <Grid item xs={12}>
          <Editor menuState={menuState} />
        </Grid>
        <Grid item xs={12}>
          <ComponentBin componentDisplay={componentDisplay} setComponentDisplay={setComponentDisplay} />
        </Grid>
      </Grid>
      <Grid container item xs={6}>
        <Preview visibility={visibility} componentDisplay={componentDisplay} />
      </Grid>
    </Grid>
  )
}

export default Framer 