import './home.css'; 
import Logo from '../../components/Home/Logo/logo';
import Feed from '../../components/Home/Feed/feed';
import LoginOption from '../../components/Home/LoginOption/LoginOption';


function Home()
{
    
    function newTweetReceived(newTweet)
  {
      console.log("New Tweet Received for home");
      console.log(newTweet);
    }
    
    return (
        <div className="home">
            <div className='leftContainer'>
                <Logo notifyNewTweet={newTweetReceived} />
            </div>
            <div className='centerContainer'>
                <Feed />
            </div>
            <div className='rightContainer'>
                <LoginOption />
            </div>
        </div>
    );
  
}

export default Home;