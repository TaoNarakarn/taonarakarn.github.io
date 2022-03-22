import { useRef } from 'react'
import ReactToPrint from 'react-to-print'


import { Divider, Grid, Paper, Typography, Link, Stack, Icon, Button } from '@mui/material'
import { Email, Phone } from '@mui/icons-material'
import { skillLevelRate } from '../projects/resumebuilder/component/staticFunction'
import { socialIcon } from '../projects/resumebuilder/component/staticFunction'
// import experience from "../staticValue/experience"


// Data
const personalDetail = {
  fullname: 'John Doe',
  email: 'johndoe@example.com',
  caption: 'expample / for / this / template',
  address: '3 in the solar system st.',
  city: 'some city',
  state: 'some state',
  country: 'earth',
  tel: '+0 111 222 3333',
  about: 'this is just a test for the template\n which you can see that it has many lines\n and I can make it even longer\n for the sake of it!',
  photo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
}

const experience = [
  {
    company: {
      name: 'My third job',
      logo: '',
      website: '',
    },
    position: 'Teachnical Supervisor',
    location: 'Bangkok, Thailand',
    from: 'Feb 2014',
    to: 'Present',
    workHere: true,
    description: [
      '• I am a supervisor now :)',
      '• Do that supervising stuff',
      '• Conducted training for subordinates',
    ],
  },
  {
    company: {
      name: 'My second company',
      logo: '',
      website: '',
    },
    position: '2nd job as Technician',
    location: 'Bangkok, Thailand',
    from: 'Aug 2012',
    to: 'Aug 2013',
    workHere: false,
    description: [
      '• Still doing technical roles',
      '• more description',
      '• and more description',
    ],
  },
  {
    company: {
      name: 'My first company',
      logo: '',
      website: '',
    },
    position: 'Various Technical Roles',
    location: 'Bangkok, Thailand',
    from: 'Jun 2007',
    to: 'May 2012',
    workHere: false,
    description: [
      'Assumed various Technical roles in many comanies',
      '- first',
      '- second',
      '- third'
    ],
  },
]

const social = [
  { platform: 'LinkedIn', link: 'https://linkedin.com' },
  { platform: 'GitHub', link: 'https://github.com' }
]

const skill = [
  { skill: 'Java Script', level: 'Average' },
  { skill: 'ReactJS', level: 'Skilled' }
]


// Style
const leftPane = {
  // backgroundColor: '#5e6fbcb8',
  backgroundColor: 'rgb(226, 196, 155, 0.46)',
  // height: '29.7cm',
  padding: '1.5rem'
}

const photoStyle = {
  width: '170px',
  height: 'auto',
  borderRadius: "50%",
  align: 'center',
  boxShadow: '5px 5px 15px grey'
}

const rightPane = {
  padding: '1.5rem'
}


// Left pane
function addressBlock () {
  const { email, address, city, state, country, tel } = personalDetail
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Contact / Address</Typography>
      <Stack direction='row' alignContent='center' spacing={1}><Email /><Typography variant="body1">{email}</Typography></Stack>
      <Stack direction='row' alignContent='center' spacing={1}><Phone /><Typography variant="body1">{tel}</Typography></Stack>
      <br />
      <Typography variant="body2">{address}</Typography>
      <Typography variant="body2">{city}</Typography>
      <Typography variant="body2">{state + ', ' + country}</Typography>
    </Grid>
  )
}

function skillBlock () {
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Skills</Typography>
      {skill.map((value, index) =>
        <Grid container item xs={12} key={index}>
          <Grid item xs={6}>{value.skill}</Grid>
          <Grid item xs={3}>{skillLevelRate(value.level)}</Grid>
        </Grid>
      )}
    </Grid>
  )
}

function socialBlock () {
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Social</Typography>
      {social.map((value, index) =>
        <Typography key={index} variant="body1">
          <Link href={value.link} underline="hover" target="_blank" rel="noopener noreferrer" color="inherit"><Stack direction="row" gap={1}>{socialIcon(value.platform)} {value.platform}</Stack></Link>
        </Typography>
      )}
    </Grid>
  )
}

// Right pane
function nameAndCaptionblock () {
  const { fullname, caption } = personalDetail
  return (
    <Grid item xs={12}>
      <Typography variant='h4' fontWeight='bold'>{fullname}</Typography>
      <Typography variant='caption' fontWeight='bold'>{caption}</Typography>
    </Grid>
  )
}

function aboutBlock () {
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Profile</Typography>
      <Typography variant='body1' sx={{ whiteSpace: 'pre-line' }}>{personalDetail.about}</Typography>
    </Grid>
  )
}

function experienceBlock () {
  return (
    <Grid item xs={12}>
      <Typography variant='h6'>Work Experience{experience.length > 1 ? 's' : null}</Typography>
      {experience.map((exp, index) =>
        <Grid key={index} container item xs={12} pt={3} pb={3} sx={{ borderBottom: 1, borderColor: 'divider' }}>
          {/* <Grid item xs={12} md={3} align="center">
            {(exp.company.logo === '') ? <Icon>location_city</Icon> :
              <img src={exp.company.logo} alt={exp.company.name + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
          </Grid> */}
          <Grid item xs={12} md={12}>
            <Grid container item xs={12} gap={1}>
              <Grid item xs={2}>
                {(exp.company.logo === '') ? <Icon>location_city</Icon> :
                  <img src={exp.company.logo} alt={exp.company.name + ' Logo'} style={{ maxWidth: '80px', maxHeight: '80px' }} />}
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h6" fontWeight="bold">{exp.position}</Typography>
                <Typography variant="subtitle1" fontWeight="bold">{exp.company.name}</Typography>
                <Typography variant="subtitle1" fontWeight="500">{exp.from + ' - ' + exp.to}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <br />
              {exp.description.map((desc, index) => <Typography variant="subtitle1" key={index}>{desc}</Typography>)}
            </Grid>
          </Grid>
        </Grid>)}
    </Grid>
  )
}

// const paperRef = useRef()
// const overFlow = useIsOverflow(paperRef) // this will true of content overflow

// const useIsOverflow = (ref, callback) => {
//   const [isOverflow, setIsOverflow] = useState(undefined);
//   useLayoutEffect(() => {
//     const { current } = ref;
//     // const { clientWidth, scrollWidth, clientHeight, scrollHeight } = current;
//     const { clientHeight, scrollHeight } = current;
//     const trigger = () => {
//       const hasOverflow = scrollHeight > clientHeight
//       setIsOverflow(hasOverflow);
//       if (callback) callback(hasOverflow);
//     };
//     if (current) {
//       trigger();
//     }
//   }, [callback, ref]);
//   return isOverflow;
// };

function RbTemplate1 () {
  const paperRef = useRef()
  // function generatePDF () {
  //   html2canvas(document.querySelector('#resume')).then(canvas => {
  //     console.log(canvas)
  //   })
  // }
  function reactToPrintTrigger () {
    return <Button variant="contained">Save to PDF</Button>
  }
  return (
    <Grid item xs={12}>
      <Grid item md={12}>
        {/* <Typography variant="h6" align='center'>**template is scale to A4 paper and will looks off in mobile</Typography> */}
        {/* <Button onClick={generatePDF}>Save to PDF</Button> */}
        <ReactToPrint
          content={() => paperRef.current}
          removeAfterPrint
          trigger={reactToPrintTrigger}
        />
      </Grid>
      <br />
      <Grid item md={12} >
        <Paper id='resume' elevation={3} ref={paperRef} sx={{ left: '40px' }}>
          <Grid container>
            <Grid item xs={4} style={leftPane}>
              <Typography align='center'><img src={personalDetail.photo} alt={personalDetail.fullname} style={photoStyle} /></Typography>
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {addressBlock()}
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {skillBlock()}
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {socialBlock()}
            </Grid>
            <Grid item xs={8} style={rightPane}>
              {nameAndCaptionblock()}
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {aboutBlock()}
              <Divider sx={{ marginTop: 2, marginBottom: 2, borderColor: 'grey' }} />
              {experienceBlock()}
              <Grid item xs={12}>
                Education
              </Grid>
              <Grid item xs={12}>
                cert awards
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default RbTemplate1