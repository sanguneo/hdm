import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

/* Pages */
import Home from './pages/Home';
// import Business from './pages/business/Business';
import Greeting from './pages/company/Greeting';
import History from './pages/company/History';
import Location from './pages/company/Location';
import Production from './pages/production/Production';
import Contact from './pages/Contact';
import ProductLayout from './pages/products/ProductLayout';
import IndustryDcGearedMotor from './pages/products/IndustryDcGearedMotor';
import IndustryDcGearedMotorDetail from './pages/products/IndustryDcGearedMotorDetail';


function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 300px)', marginTop: 'var(--header-height)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/business" element={<Business />} /> */}
          <Route path="/company/greeting" element={<Greeting />} />
          <Route path="/company/history" element={<History />} />
          <Route path="/company/location" element={<Location />} />
          <Route path="/production" element={<Production />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<ProductLayout />}>
            <Route path="/products/industry-dc" element={<IndustryDcGearedMotor />} />
            <Route path="/products/industry-dc/:id" element={<IndustryDcGearedMotorDetail />} />
            {/* <Route path="/products/dc-geared" element={<DcGearedMotor />} /> */}
          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
