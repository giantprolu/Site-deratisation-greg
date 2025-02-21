import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';
import { services } from '../App';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-teal-400" />
              <span className="ml-2 text-xl font-bold">3D Niort</span>
            </div>
            <p className="text-gray-400">
            Protégez votre maison contre les invités indésirables
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Accueille
                </Link>
              </li>
              <li>
                <Link to="/request-quote" className="text-gray-400 hover:text-white">
                  Demander un devis gratuit
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-400 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                000000000
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                contact@safeguardpest.com
              </li>
              <li>1234 Pest Control Ave</li>
              <li>City, State 12345</li>
            </ul>
            <div className="mt-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 3D Niort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;