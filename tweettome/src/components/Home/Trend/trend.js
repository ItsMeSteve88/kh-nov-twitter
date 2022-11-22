
import React from 'react'
import "./trend.css"

// rfce
// props is an object which contains all the properties passed to this component
function trend(props) {
    const data = props.content;
    return (
        <div className='trend'>
            <p className="header">{data.header}</p>
            <p className="trend-text">{data.text}</p>
            <p className="reTweets">{data.retweets}</p>
        </div>
    );
}

export default trend;