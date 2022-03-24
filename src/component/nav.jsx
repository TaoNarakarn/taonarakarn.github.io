
import { Link, } from '@mui/material'

// Do object like this to help fix nav menu problem that clicking button not redirect but need to click on text
const Pages = [
  {
    type: "link",
    link: "/#",
    linkComponent: <Link href="/#" color="inherit" underline="hover">Home</Link>,
    linkName: "Home",
  },
  {
    type: "link",
    link: "/#/experience",
    linkComponent: <Link href="/#/experience" color="inherit" underline="hover">Experience</Link>,
    linkName: "Experience"
  },
  {
    type: "link",
    link: "/#/project",
    linkComponent: <Link href="/#/project" color="inherit" underline="hover">Project</Link>,
    linkName: "Project"
  },
  {
    type: "link",
    link: "/#/codebits",
    linkComponent: <Link href="/#/codebits" color="inherit" underline="hover">CodeBits</Link>,
    linkName: "CodeBits"
  },


  // { // this is a link that will create sub menu in the nav bar *** unfinish ***
  //   type: "menu",
  //   link: "/#/project",
  //   linkName: "Project",
  //   subMenu: [
  //     <Link href="/#/project/resume-builder" color="inherit" underline="hover">Resume Builder</Link>,
  //   ],
  // },


  // <Link href="/note" color="inherit" underline="hover">Notes</Link>
]

export default Pages