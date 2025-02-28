import { useParams, Link, useNavigate } from 'react-router-dom';
import { services } from '../components/TypeServices';

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
      

      {/* Service Details */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {service.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <img 
              src={service.image}
              alt={service.title}
              className="rounded-lg shadow-xl mb-8 w-full max-w-md md:mr-8"
              />
              <div className="whitespace-pre-line center md:w-1/2 md:ml-8">
              {service.fullDescription}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Besoin d'un devis gratuit ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous via ce formulaire pour obtenir un devis gratuit
          </p>
          <Link
            to="/devis"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Obtenir un devis
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ServicePage;