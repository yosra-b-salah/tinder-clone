import React from 'react';
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from "react-router-dom";

const Header = ({ backButton }) => {
    const navigate = useNavigate();
    return <div className='header'>
        {backButton ? (
            <IconButton onClick={() => navigate(backButton)}>
                <ArrowBackIosIcon fontSize='large' className='header__icon' />
            </IconButton>
        ) : (
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
        )}

        <Link to="/">
            <img
                className='header__logo'
                src='https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/Tinder-icon-circle.png?alt=media&token=08e7cc31-34bc-48b2-aff4-c4ae4fbf8d32'
                alt=''
            />
        </Link>

        <Link to="/chats">
            <IconButton>
                <ForumIcon fontSize='large' className='c' />
            </IconButton>
        </Link>

    </div>;
};

export default Header;

