import React from 'react'
import './StoryReel.css'
import Story from './Story'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image= {img1} 
            profileSrc="https://scontent-bom1-1.xx.fbcdn.net/v/t39.30808-6/266227705_2022519004585544_3148149746806600247_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=WCr7Xc_r7JQAX_1tfdC&_nc_ht=scontent-bom1-1.xx&oh=00_AT90Vdyv_5tV-f9qoOSLMz8RDAvAxpw7HHsnv8ye40th7Q&oe=61E9AF5E"
            title="Shankar Gamne"/>

            <Story image= {img2}
            profileSrc="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-9/75360999_845839375830540_770893608260730880_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=RrXYwPl_0ucAX_wUx8C&tn=cp0my_G3GTpAuoWV&_nc_ht=scontent-bom1-2.xx&oh=00_AT-C7R25DKMDR-NIUk2K54a5VRPbaBYsgKgd3wfMSXnpQg&oe=620A8FC3"
            title="Prajwal More"/>

            <Story image= {img3}
            profileSrc="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-1/c0.0.320.320a/p320x320/61223699_578859719291019_8212222149943885824_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=7206a8&_nc_ohc=gN0mwOScGLcAX86pGtp&_nc_ht=scontent-bom1-2.xx&oh=00_AT836hvFiwERA9othpmIxtHhIXgsncMZ-iL-JER52u-awA&oe=6209A84A"
            title="Suraj Baghvat"/>

            <Story image= {img4}
            profileSrc="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/267821071_1335444006915870_1122224252717821936_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DQQu49nvuO4AX-shQ9N&_nc_ht=scontent-bom1-2.xx&oh=00_AT9cQypkxo_zrnNCR4Ken7flURiKq6nAswn9l5Ya03z4ww&oe=61EA4E7D"
            title="Hitesh Goykar"/>
        </div>
    )
}

export default StoryReel
