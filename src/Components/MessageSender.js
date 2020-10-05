import { Avatar, Input } from '@material-ui/core';
import React, { useState } from 'react';
import './MessageSender.css';

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {

    const [input, setInput] = useState('');
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    const handleSubmit = () => {
        console.log("submitting...")
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://scontent.fpnq6-1.fna.fbcdn.net/v/t1.0-9/106453665_1616777215150474_5143632023165966201_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=B0CmmM1P4w4AX_hLATV&_nc_ht=scontent.fpnq6-1.fna&oh=7404cff48eed0a7c21b8c868324e2905&oe=5FA0A344" />

                <form>
                    <input className="messageSender__input" placeholder="What's on your mind" type="text" value={input} onChange={(e) => setInput(e.target.value)} />

                    <Input className="messageSender__file"
                        type="file" onChange={handleChange} />

                    <button onClick={handleSubmit} type="submit">Post</button>

                </form>

            </div>

            <div className="messageSender__button">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>

        </div>
    )
}

export default MessageSender
