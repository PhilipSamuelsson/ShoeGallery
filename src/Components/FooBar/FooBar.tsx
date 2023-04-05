import React from 'react'
import Divider from '@mui/material/Divider';
import './FooBar.css'

const learnMore:string = "Learn more"
const socials:string = 'Socials'
const contact:string = 'Contact'

const FooBar = () => {
  return (
<div>
        <Divider/>
    <div className="footer">
        <ul className="footerLinks">
            <li>{learnMore}</li>
            <li>{contact}</li>
            <li>{socials}</li>
        </ul>
        <div className="trademark">
              <p className="tr">Cookie Preferences© | 2023 Riot Games, Inc. All Rights Reserved.</p>
        </div>

    </div>

</div>
  )
}

export default FooBar
