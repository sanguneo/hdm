import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

/* Pages */
import Home from './pages/Home';
import Business from './pages/business/Business';
import Greeting from './pages/company/Greeting';
import History from './pages/company/History';
import Location from './pages/company/Location';
import Production from './pages/production/Production';
import Development from './pages/development/Development';
import Contact from './pages/Contact';
import Bldc from './pages/products/Bldc';
import BldcDetail from './pages/products/BldcDetail';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 300px)', marginTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business" element={<Business />} />
          <Route path="/company/greeting" element={<Greeting />} />
          <Route path="/company/history" element={<History />} />
          <Route path="/company/location" element={<Location />} />
          <Route path="/production" element={<Production />} />
          <Route path="/development" element={<Development />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/bldc" element={<Bldc />} />
          <Route path="/products/bldc/:id" element={<BldcDetail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
