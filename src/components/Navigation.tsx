import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-teal-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">3D Niort</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive('/') ? 'text-teal-600' : 'text-gray-600'
              } hover:text-teal-600 transition-colors`}
            >
              Accueille 
            </Link>
            <Link
              to="/services/rodent-control"
              className={`${
                location.pathname.startsWith('/services') ? 'text-teal-600' : 'text-gray-600'
              } hover:text-teal-600 transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/contact"
              className={`${
                isActive('/request-quote') ? 'text-teal-600' : 'text-gray-600'
              } hover:text-teal-600 transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`${
                  isActive('/') ? 'text-teal-600 bg-teal-50' : 'text-gray-600'
                } block px-3 py-2 rounded-md text-base font-medium hover:text-teal-600 hover:bg-teal-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueille
              </Link>
              <Link
                to="/services/rodent-control"
                className={`${
                  location.pathname.startsWith('/services') ? 'text-teal-600 bg-teal-50' : 'text-gray-600'
                } block px-3 py-2 rounded-md text-base font-medium hover:text-teal-600 hover:bg-teal-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/request-quote"
                className={`${
                  isActive('/request-quote') ? 'text-teal-600 bg-teal-50' : 'text-gray-600'
                } block px-3 py-2 rounded-md text-base font-medium hover:text-teal-600 hover:bg-teal-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                Devis Gratuit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;