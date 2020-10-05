import { Avatar } from '@material-ui/core';
import React from 'react';
import './ContactList.css';

const ContactList = ({ imgProfile, Username }) => {
    return (
        <div className="contact__list">
            <Avatar src={imgProfile} />
            <p>{Username}</p>
        </div>
    )
}

export default ContactList
