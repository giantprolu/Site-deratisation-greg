import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bug } from 'lucide-react';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8 flex justify-center">
          <Bug className="h-24 w-24 text-teal-600 animate-bounce" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for seems to have scurried away...
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;