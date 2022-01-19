import React, { useState, useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import img1 from './img1.png'
import img2 from './img2.png'
import db from './firebase'


function Feed() {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data:doc.data()
            })))
        })
    }, []);

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            {posts.map(post=>(
                <Post 
                    key={post.id}
                    profilePic ={post.data.profilePic}
                    message = {post.data.message}
                    timestamp = {post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* <Post profilePic="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/266227705_2022519004585544_3148149746806600247_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WCr7Xc_r7JQAX_1tfdC&_nc_ht=scontent-bom1-1.xx&oh=00_AT90Vdyv_5tV-f9qoOSLMz8RDAvAxpw7HHsnv8ye40th7Q&oe=61E9AF5E"
            message="WOW This WOrks"
            timestamp="This is a timestamp"
            username="@chetanGamne"
            image={img1}/>

            <Post profilePic="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/75360999_845839375830540_770893608260730880_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RrXYwPl_0ucAX_wUx8C&tn=cp0my_G3GTpAuoWV&_nc_ht=scontent-bom1-2.xx&oh=00_AT-C7R25DKMDR-NIUk2K54a5VRPbaBYsgKgd3wfMSXnpQg&oe=620A8FC3"
            message="WOW This WOrks"
            timestamp="This is a timestamp"
            username="@chetanGamne"
            image={img2}/> */}
        </div>
    )
}

export default Feed
