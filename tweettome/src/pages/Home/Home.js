import "./home.css";
import Logo from "../../components/Home/Logo/logo";
import Feed from "../../components/Home/Feed/feed";
import LoginOption from "../../components/Home/LoginOption/LoginOption";
import { useState } from "react";


function Home(props) {
  const [tweets, setTweets] = useState([]);

  function newTweetReceived(newTweet) {
    console.log("New Tweet Received for home");
    tweets.push(newTweet);
    setTweets([...tweets]);
    console.log(newTweet);
  }

  function newUser(username, email, password, cpass) {
    console.log("this is the home component");
    console.log(username, email, password, cpass);
    props.saveNewUser(username, email, password, cpass);
  }

  return (
    <div className="home">
      <div className="leftContainer">
        <Logo notifyNewTweet={newTweetReceived} />
      </div>
      <div className="centerContainer">
              <Feed tweets={tweets} />
      </div>
      <div className="rightContainer">
        <LoginOption saveNewUser={newUser} />
      </div>
    </div>
  );
}

export default Home;
