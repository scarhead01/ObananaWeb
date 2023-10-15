
import HeaderBar from './HeaderBar'
import { styled } from 'styled-components'
import UpperHeader from './UpperHeader'
import Advertise from './Advertise'


const Header = () => {
  return (
  <HeaderCon>
    <Advertise/>
    <UpperHeader/>
  </HeaderCon>

  )
}

const HeaderCon = styled.header`

  top: 0; /* Attach it to the top of the viewport */
  width: 100%; /* Make it take up the full width */
  background-color: #fff; /* Example background color */
  z-index: 1000; /* Set a higher z-index to ensure it appears above other content */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 
`
export default Header