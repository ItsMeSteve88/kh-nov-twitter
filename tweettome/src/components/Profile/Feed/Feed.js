import React from "react";
import "./Feed.css";


function Feed()
{
  

  return (
    //   Banner and profile
    <div>
      <div className="profile-nav">
        <a href="/">
          <svg
            style={{ marginRight: "25px" }}
            height={20}
            width={20}
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z"></path>
            </g>
          </svg>
        </a>
        <div className="profile-nav_info">
          <p>Ridge Racer</p>
          <p className="tweets">1337 Tweets</p>
        </div>
      </div>
      <div className="banner-pic">
        <div className="profile-pic"></div>
      </div>
      <div className="profile-main">
        <p className="user">Ridge Racer</p>
        <p className="handle">@FastestManAlive</p>
        <p className="description">
          I win races wherever I go, whoever I face - Racing for{" "}
          <span className="tags">Porsche</span> with 9x bestselling books{" "}
          <span className="tags">#PorscheBook #HOWTODRIVE #GTWC</span>
        </p>
        <div className="site-date">
          <svg
            style={{ marginTop: "5px", marginRight: "10px" }}
            height={18}
            fill="grey"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"></path>
            </g>
          </svg>
          <a href="https://www.porsche.com/usa/">porsche.com</a>
          <svg
            style={{ marginTop: "5px", marginRight: "10px" }}
            height={18}
            fill="grey"
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
            </g>
          </svg>
          <span>Joined May 2019</span>
        </div>
        <div className="following">
          <p>
            <span className="fnumbers">0</span> Following
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="fnumbers">92.2K</span> Followers
          </p>
          <p className="followback">Not followed by anyone you're following</p>
        </div>
      </div>
      {/* list */}
      <nav>
        <ul className="profile-menus">
          <li>
            <a href="/"></a>Tweets
          </li>
          <li>
            <a href="#"></a>Tweets and Replies
          </li>
          <li>
            <a href="#"></a>Media
          </li>
          <li>
            <a href="#"></a>Likes
          </li>
        </ul>
      </nav>
      
    </div>
  );
}

export default Feed;
