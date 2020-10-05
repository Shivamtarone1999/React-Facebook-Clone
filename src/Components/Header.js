import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import UnsubscribeOutlinedIcon from '@material-ui/icons/UnsubscribeOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Header = () => {
    return (

        <>
            <div className="header">
                <div className="header__left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png" />

                    <div className="header__input">
                        <SearchIcon />
                        <input placeholder="Search Facebook" type="text" />
                    </div>

                </div>

                <div className="header__center">
                    <div className="header__option header__option--active">
                        <HomeIcon fontsize="large" />
                    </div>

                    <div className="header__option">
                        <FlagIcon fontsize="large" />
                    </div>

                    <div className="header__option">
                        <UnsubscribeOutlinedIcon fontsize="large" />
                    </div>

                    <div className="header__option">
                        <StorefrontOutlinedIcon fontsize="large" />
                    </div>

                    <div className="header__option">
                        <SupervisedUserCircleIcon fontsize="large" />
                    </div>
                </div>

                <div className="header__right">
                    <div className="header__info">
                        <Avatar src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344" />
                        <h4>Shivam</h4>
                    </div>

                    <IconButton>
                        <AddIcon />
                    </IconButton>

                    <IconButton>
                        <ForumIcon />
                    </IconButton>

                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>

                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>

                </div>

            </div>
        </>

    )
}

export default Header
