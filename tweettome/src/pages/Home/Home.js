import './home.css'; 
import Logo from '../../components/Home/Logo/logo';
import Feed from '../../components/Home/Feed/feed';
import LoginOption from '../../components/Home/LoginOption/LoginOption';


function Home() {
    return (
        <div className="home">
            <div className='leftContainer'>
                <Logo />
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