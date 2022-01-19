import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmotiiconIcon from '@material-ui/icons/InsertEmoticon'
import React from 'react'
import { useState } from 'react'
import './MessageSender.css'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function MessageSender() {
    const [{ user },dispatch] = useStateValue();

    const [input,setInput] = useState('');
    const [imageUrl,setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username:user.displayName,
            image: imageUrl
        })
        setInput("");
        setImageUrl("");
    }


    return (
        <div className='messageSender'>
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form action="">
                    <input  value={input} onChange={e=>setInput(e.target.value)}
                    className='messageSender__input' placeholder={`What's on Your mind, ${user.displayName}`}/>
                    <input  value={imageUrl} onChange={e=>setImageUrl(e.target.value)}
                    placeholder="Image URL (Optional)"/>

                    <button onClick={handleSubmit} type='submit'>Hidden submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmotiiconIcon style={{color:"yellow"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
