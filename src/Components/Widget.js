import React from 'react';
import './Widget.css';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Online from './Online';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { Button } from '@material-ui/core';

const Widget = () => {
    return (
        <div className="widget">

            <div className="widget__top">
                <h3>Sponsored</h3><hr style={{ backgroundColor: '#696969' }} />
            </div>

            <div className="widget__birth">
                <h3>Birthday</h3>
                <div className="widget__birth_content">
                    <CardGiftcardIcon className="gift" />
                    <p>Sanket Ingole have birthday today.</p>
                </div><hr style={{ backgroundColor: '#696969' }} />
            </div>

            <div className="contact">
                <div className="contact__options">
                    <h3>Contacts</h3>
                    <div className="contact__option">
                        <VideoCallIcon className="contact__option__icon" />
                        <SearchIcon className="contact__option__icon" />
                        <MoreHorizIcon className="contact__option__icon" />
                    </div>
                </div>

                {/* Online List */}
                <Online />
            </div><hr />


            {/* Group Conversation */}
            <div className="grp">
                <h3>Group Conversations</h3>
                <div className="grp__conv">
                    <GroupAddRoundedIcon />
                    <p>Shivam, Shashank, Sanket and 4 others</p>
                </div>
                <div className="add_grp">
                    <AddRoundedIcon style={{ cursor: 'pointer' }} />
                    <p>Create new group</p>
                </div>
            </div>

        </div>
    )
}

export default Widget;
