import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>
            <IconButton>
            <PersonIcon fontSize= 'large' className='header_icon'/>
            </IconButton>
            <img
                className='header_logo'
                src='https://www.globaldatinginsights.com/wp-content/uploads/2017/08/Screen-Shot-2017-08-17-at-10.04.531.png'
                alt=''/>
            <IconButton>
            <ForumIcon/>
            </IconButton>
        </div>
    )
}

export default Header
