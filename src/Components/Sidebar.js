import React from 'react';
import './Sidebar.css';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SidebarRow';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* <SidebarRow src={user.photoUrl} title={user.displayName} /> */}

            <SidebarRow src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344" title="Shivam" />

            <SidebarRow Icon={LocalHospitalIcon}
                title="COVID-19 Information Center" />

            <SidebarRow Icon={EmojiFlagsIcon}
                title="Pages" />

            <SidebarRow Icon={PeopleIcon}
                title="Friends" />

            <SidebarRow Icon={ChatIcon}
                title="Messenger" />

            <SidebarRow Icon={StorefrontIcon}
                title="Marketplace" />

            <SidebarRow Icon={VideoLibraryIcon}
                title="Videos" />

            <SidebarRow Icon={ExpandMoreOutlinedIcon}
                title="More" />
            <br />


        </div>
    )
}

export default Sidebar
