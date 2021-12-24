import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { EquipmentProvider } from './contexts/EquipmentContext';

import ThemeContext from './contexts/ThemeContext';
import { WorkerProvider } from './contexts/WorkerContext';
import AddWorker from './pages/add-worker/AddWorker';
import EquipmentsList from './pages/equipments/EquipmentsList';
function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <WorkerProvider>
        <EquipmentProvider>
          <BrowserRouter>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<AddWorker />} />
                <Route path="/equipments" element={<EquipmentsList />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </EquipmentProvider>
      </WorkerProvider>
    </div>
  );
}

export default App;
