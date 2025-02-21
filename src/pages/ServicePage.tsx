import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../App';

function ServicePage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    navigate('/404');
    return null;
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                {service.description}
              </p>
              <Link
                to="/request-quote"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
              >
                Request a Quote
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line">
              {service.fullDescription}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation and quote.
          </p>
          <Link
            to="/request-quote"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;