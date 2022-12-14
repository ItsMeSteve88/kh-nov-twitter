/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./feed.css";
import Trend from "../Trend/trend";
import Tweet from "../Tweet/tweet";
import { useState, useEffect } from "react";

function Feed(props)
{
  console.log(props.tweets);
  const [alltweets, setTwets] = useState([]);

  useEffect(() =>
  {
    setTwets(props.tweets);
  }, [props.tweets]);

  console.log(props.tweets);
  // name of variable, setter function, initial value.
  // used to set a state variable, to be used in the component as it changes lifecycle.
  // refreshes the component when the state variable changes.
  const [trendData, setTrends] = useState([]);
  const [tweetData, setTweets] = useState([]);
  // read data from the json file/api/os/external sources.
  // fetch function takes some time to communicate with external sources.
  // useeffect is used to run the function only once when the component is loaded. and stop running it again, and again
  // manages side effects and dependencies.
  useEffect(() => {
    fetch("trend.json")
      // convert the data into json format
      .then((response) => response.json())
      // use the data - printed on console
      .then((response) => {
        setTrends(response);
      });
  }, []);
  // []=> can include state variables, if they change, the function will run again.

  useEffect(() => {
    fetch("tweet.json")
      .then((response) => response.json())
      .then((response) => {
        setTweets(response);
      });
  }, []);
  return (
    <div className="feed-main">
      {/* Search Box */}
      <div className="search-box">
        <div className="search-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input placeholder="Search Twitter" type="search" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-gear"
          viewBox="0 0 16 16"
        >
          <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
          <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
        </svg>
      </div>
      {/* feed body */}
      <nav>
        <ul className="menus">
          <li>
            <a href="#"></a>For you
          </li>
          <li>
            <a href="#"></a>Trending
          </li>
          <li>
            <a href="#"></a>News
          </li>
          <li>
            <a href="#"></a>Sports
          </li>
          <li>
            <a href="#"></a>Entertainment
          </li>
        </ul>
      </nav>

      {/* banner */}
      <div className="banner">
        <p className="tag">War in Ukraine. LIVE</p>
        <p className="banner-text">Latest updates on the war in Ukraine</p>
      </div>
      {/* Trends */}

      {trendData.map((data) => (
        <Trend content={data} />
      ))}

      {/* Tweet */}
      {tweetData.map((data) => (
        <Tweet content={data} />
      ))}
      {alltweets.map((data) => (
        <Tweet content={data} />
      ))}
    </div>
  );
}

export default Feed;
