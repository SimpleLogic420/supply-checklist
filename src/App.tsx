import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { FriendProvider } from './contexts/FriendContext';
import ThemeContext from './contexts/ThemeContext';
import AddFriend from './pages/AddFriend';
import FriendsList from './pages/FriendsList';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <FriendProvider>
        <BrowserRouter>
          <Header />
          <FriendsList />
          <AddFriend />
          <Footer />
        </BrowserRouter>
      </FriendProvider>
    </div>
  );
}

export default App;
