import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import QuoteRequestPage from './pages/QuoteRequestPage';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/devis" element={<QuoteRequestPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;