import { Link } from "react-router-dom";
import React from 'react';

interface HeroProps {
    service: {
        icon: React.ReactNode;
        title: string;
        description: string;
        image: string;
    };
}

const Hero: React.FC<HeroProps> = ({ service }) => {
    return (
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
                            to="/devis"
                            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
                        >
                            Obtenir un devis
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
    );
};

export default Hero;