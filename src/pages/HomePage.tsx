import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users } from 'lucide-react';
import { services } from '../App';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Protégez votre maison contre les invités indésirables
              </h1>
              <p className="text-lg text-gray-600 mb-8">
              Des services professionnels de lutte antiparasitaire qui assurent la sécurité de votre famille 
              et l’absence de parasites dans votre maison. Obtenez des solutions expertes adaptées à vos besoins.
              </p>
              <Link
                to="/request-quote"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
              >
                Obtenir un devis
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=80"
                alt="Pest Control Professional"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Les Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="group"
              >
                <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


export default HomePage;