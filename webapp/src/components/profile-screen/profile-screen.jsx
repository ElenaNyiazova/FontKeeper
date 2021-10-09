import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import '../../App.scss';

const ProfileScreen = () => {
    return (
        <div className="App">
          <Header />
    
          <Profile />
    
          <Footer />
        </div>
      );
};

export default ProfileScreen;