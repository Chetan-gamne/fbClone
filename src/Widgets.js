import React from 'react'
import './Widgets.css'

function Widgets() {
    return (
        <div className='widgets'>
            <iframe width="340" height="200" src="https://www.youtube.com/embed/B-kxUMHBxNo" title="YouTube video player" frameborder="0" style={{border:"none", overflow:"hidden"}}allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default Widgets
