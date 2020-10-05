import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';
import './Feed.css';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344"
                message="Fun time with buddies"
                timeStamp="1601493943737"
                imgName='https://lh3.googleusercontent.com/pw/ACtC-3dJUBYptah0Id-NVz6yyFFyye-gZ5am7bjFyilkfxVAzNvdoFT26qjaTIg9IxlCq9MAxPAoW0OdKX7v8TZtoXYSw8g4gtTC2S8KrtkyGoQvRudYxiG0IDp5z2XW3pCYmFjDq_7-rLJ-geNPHImMssIT-A=w1204-h903-no?authuser=0'
                userName='Shivam'
            /> <hr style={{ marginTop: '20px' }} />

            <Post
                profilePic="https://www.pinkvilla.com/files/m_allu_arjun_to_focus_on_starring_in_pan_india_films_after_the_success_of_ala_vaikunthapurramloo_.jpg"
                message="Hello ❤️"
                timeStamp="1601493943737"
                imgName='https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-94gvmoq4d0009pn49ceuj5k7f2-20200201033015.Medi.jpeg'
                userName='Allu Arjun'
            /> <hr style={{ marginTop: '20px' }} />

            <Post
                profilePic="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                message=""
                timeStamp="1601493943737"
                imgName='https://media.wired.com/photos/5a593a7ff11e325008172bc2/191:100/w_2400,h_1256,c_limit/pulsar-831502910.jpg'
                userName='Nasa'
            /> <hr style={{ marginTop: '20px' }} />

            <Post
                profilePic="https://i.pinimg.com/originals/56/dd/38/56dd3814d3aa76df5ff1937796a078a0.png"
                message=""
                timeStamp="1601493943737"
                imgName='https://teluguswag.com/wp-content/uploads/2018/10/DailyFeedTemplate-2-6.jpg'
                userName='Vijay Deverkonda'
            /> <hr style={{ marginTop: '20px' }} />

            <Post
                profilePic="https://images.pexels.com/photos/459449/pexels-photo-459449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                message=""
                timeStamp="1601493943737"
                imgName='https://jooinn.com/images/wild-1.jpg'
                userName='Wild World'
            /> <hr style={{ marginTop: '20px' }} />

            <Post
                profilePic="https://ncdalliance.org/sites/default/files/styles/feature_1800x900/public/news/WHO%20logo.jpg?itok=iWACp0lh"
                message=""
                timeStamp="1601493943737"
                imgName='https://images.financialexpress.com/2020/04/corona-graphics-1200.jpg?w=1200&h=800&imflag=true'
                userName='WHO'
            /> <hr style={{ marginTop: '20px' }} />

            <Post
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOysNtZQEy6ARcZPQs07WYmo42awmYXKB5rA&usqp=CAU"
                message=""
                timeStamp="1601493943737"
                imgName='https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme.jpg'
                userName='Meme World'
            /> <hr style={{ marginTop: '20px' }} />

            {/* {
                postsData.map(entry => {
                    <Post
                        porfilePic={entry.avatar}
                        message={entry.text}
                        timeStamp={entry.timeStamp}
                        imgName={entry.imgName}
                        username={entry.user}
                    />
                })
            } */}

        </div>
    )
}

export default Feed
