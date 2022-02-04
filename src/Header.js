import React from 'react';
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
    return <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
        <img
            className='header__logo'
            src='https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/Tinder-icon-circle.png?alt=media&token=08e7cc31-34bc-48b2-aff4-c4ae4fbf8d32'
            alt=''
        />
        <IconButton>
            <ForumIcon fontSize='large' className='c' />
        </IconButton>
    </div>;
} ;

export default Header;

