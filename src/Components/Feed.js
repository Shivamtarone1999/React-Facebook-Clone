import React from 'react';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344"

                message="This is the first Post"
                timeStamp="1601493943737"
                imgName='imageName'
                userName='Shivam'
            />

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
