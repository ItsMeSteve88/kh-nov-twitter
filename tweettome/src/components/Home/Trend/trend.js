
import React from 'react'
import "./trend.css"

// rfce
// props is an object which contains all the properties passed to this component
function trend(props) {
    return (
        <div className='trend'>
            <p className="header">{props.header}</p>
            <p className="trend-text">{props.text}</p>
            <p className="reTweets">{props.retweets}</p>
        </div>
    );
}

export default trend;