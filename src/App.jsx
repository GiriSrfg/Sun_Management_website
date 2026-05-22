import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import PayrollCompliance from './pages/PayrollCompliance';
import EmiSupport from './pages/EmiSupport';
import FinancialServices from './pages/FinancialServices';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/debt-recovery" element={<ServiceDetail />} />
          <Route path="/services/payroll-compliance" element={<PayrollCompliance />} />
          <Route path="/services/emi-support" element={<EmiSupport />} />
          <Route path="/services/financial-services" element={<FinancialServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;



