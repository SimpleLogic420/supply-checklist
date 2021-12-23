import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import ThemeContext from './contexts/ThemeContext';
import { WorkerProvider } from './contexts/WorkerContext';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <WorkerProvider>
        <BrowserRouter>
          <Header />
          <Footer />
        </BrowserRouter>
        </WorkerProvider>
    </div>
  );
}

export default App;
