import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Bug, MicOff as Rat, SprayCan as Spray, Shield as ShieldIcon } from 'lucide-react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import QuoteRequestPage from './pages/QuoteRequestPage';
import NotFound from './pages/NotFound';

export const services = [
  {
    id: 'rodent-control',
    title: 'Rodent Control',
    icon: <Rat className="h-8 w-8 text-teal-600" />,
    description: 'Comprehensive rodent control solutions to protect your property from mice, rats, and other rodents.',
    fullDescription: `Our professional rodent control service provides comprehensive protection against all types of rodents. We use a combination of advanced techniques and environmentally friendly products to:

    • Identify and seal entry points
    • Remove existing infestations
    • Prevent future rodent problems
    • Protect your property from damage
    • Ensure your family's health and safety`,
    image: 'https://images.unsplash.com/photo-1583336663277-620dc1996580?auto=format&fit=crop&q=80'
  },
  {
    id: 'insect-extermination',
    title: 'Insect Extermination',
    icon: <Bug className="h-8 w-8 text-teal-600" />,
    description: 'Effective solutions for all types of insect infestations, from ants to termites.',
    fullDescription: `Our insect extermination service tackles all types of insect problems with precision and care. Our approach includes:

    • Thorough inspection and identification
    • Targeted treatment plans
    • Safe and effective products
    • Preventive measures
    • Regular follow-up inspections`,
    image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=80'
  },
  {
    id: 'disinfection',
    title: 'Disinfection Services',
    icon: <Spray className="h-8 w-8 text-teal-600" />,
    description: 'Professional disinfection services to ensure a clean and healthy environment.',
    fullDescription: `Our disinfection service provides thorough sanitization for homes and businesses. We use hospital-grade disinfectants to:

    • Eliminate harmful pathogens
    • Sanitize high-touch surfaces
    • Create a healthier environment
    • Prevent the spread of diseases
    • Maintain clean air quality`,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80'
  },
  {
    id: 'preventive-treatment',
    title: 'Preventive Treatment',
    icon: <ShieldIcon className="h-8 w-8 text-teal-600" />,
    description: 'Regular maintenance and prevention programs to keep pests away.',
    fullDescription: `Our preventive treatment program provides year-round protection against pests. Our comprehensive approach includes:

    • Regular inspections
    • Seasonal treatments
    • Barrier protection
    • Monitoring systems
    • Customized prevention plans`,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80'
  }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:serviceId" element={<ServicePage />} />
          <Route path="/request-quote" element={<QuoteRequestPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;