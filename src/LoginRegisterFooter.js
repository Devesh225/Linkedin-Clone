import React from 'react'
import './LoginRegisterFooter.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LoginRegisterFooter() {
  return (
    <div className='loginRegisterFooter'>
        <div className="loginRegisterFooter__items">
            <ul>
                <li>Linked<LinkedInIcon sx={{height: '1.65vw', width: '1.65vw', color: '#0a66c2'}}/> Corporation © 2022</li>
                <li>About</li>
                <li>Accessibility</li>
                <li>User Agreement</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Copyright Policy</li>
                <li>Brand Policy</li>
                <li>Guest Controls</li>
                <li>Community Guidelines</li>
                <li>Language</li>
            </ul>
        </div>
    </div>
  )
}

export default LoginRegisterFooter;