
import React from 'react'
import "./trend.css"

// rfce
// props is an object which contains all the properties passed to this component
function trend(props) {
    const trend = props.content;
    return (
        <div className='trend'>
            <p className="header">{trend.header}</p>
            <p className="trend-text">{trend.text}</p>
            <p className="reTweets">{trend.retweets}</p>
        </div>
    );
}

export default trend;