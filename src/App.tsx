import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/Index';
import Sobre from './pages/Sobre/Index'

import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
