import { Link } from 'react-router-dom';
import { services } from './TypeServices';

const Services: React.FC = () => {
  return (
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
  );
};

export default Services;