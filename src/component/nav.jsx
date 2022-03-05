import { Link } from '@mui/material'

// Do object like this to help fix nav menu problem that clicking button not redirect but need to click on text
const Pages = [
  {
    link: "/",
    linkComponent: <Link href="/" color="inherit" underline="hover">Home</Link>,
    linkWord: "Home",
  },
  {
    link: "/#/experience",
    linkComponent: <Link href="/#/experience" color="inherit" underline="hover">Experience</Link>,
    linkWord: "Experience"
  },
  {
    link: "/#/codebits",
    linkComponent: <Link href="/#/codebits" color="inherit" underline="hover">CodeBits</Link>,
    linkWord: "CodeBits"
  }
  // <Link href="/note" color="inherit" underline="hover">Notes</Link>
]
export default Pages