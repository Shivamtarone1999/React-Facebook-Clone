import React from 'react';
import Story from './Story';
import './StoryReel.css';
import AddIcon from '@material-ui/icons/Add';

const StoryReel = () => {
    return (
        <div className="storyReel">

            <Story image='https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344'
                profileSrc='https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344'

                title='Add Story' />

            <Story image='https://static.toiimg.com/thumb/msid-72435334,imgsize-409600,width-800,height-600,resizemode-75/72435334.jpg'
                profileSrc='https://www.pinkvilla.com/files/m_allu_arjun_to_focus_on_starring_in_pan_india_films_after_the_success_of_ala_vaikunthapurramloo_.jpg'
                title='Allu Arjun' />

            <Story image='https://wallpapercave.com/wp/wp4003773.jpg'
                profileSrc='https://www.mwallpapers.com/download-image/27593/358x477'
                title='Vikram' />

            <Story image='https://s4.scoopwhoop.com/vs_sw/images/5620100/5620100-696_resize_p.png'
                profileSrc='https://media2.bollywoodhungama.in/wp-content/uploads/2016/03/Rajkummar-Rao.jpg'
                title='Rajkumar' />

            <Story image='https://base.imgix.net/files/base/ebm/industryweek/image/2019/03/industryweek_6966_elonmusk.png?auto=format&fit=max&w=1200'
                profileSrc='https://www.wallpapertip.com/wmimgs/98-980330_data-src-elon-musk-wallpaper-iphone.jpg'
                title='Elon Musk' />
        </div>
    )
}

export default StoryReel;
