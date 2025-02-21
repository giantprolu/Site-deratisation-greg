import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { services } from '../App';

function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    phone: '',
    service: '',
    propertySize: '',
    floors: '0',
    location: '',
    duration: 'recent',
    hasBasement: false,
    hasAttic: false
  });

  const [state, handleSubmit] = useForm("mqaenogg");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : null;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (state.succeeded) {
    return <p>Merci pour votre demande ! Nous vous contacterons sous peu.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Obtenir un devis
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Numéro de téléphone *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="0600000000"
              />
            </div>

            {/* Service Type */}
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Type de Service *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="">Sélectionner un service</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Property Size */}
            <div>
              <label htmlFor="propertySize" className="block text-sm font-medium text-gray-700 mb-1">
                Superficie de la maison/appartement (m²) *
              </label>
              <input
                type="number"
                id="propertySize"
                name="propertySize"
                required
                value={formData.propertySize}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="20 m²"
              />
            </div>

            {/* Number of Floors */}
            <div>
              <label htmlFor="floors" className="block text-sm font-medium text-gray-700 mb-1">
              Nombre d'étages * (cave et combles non inclus)
              </label>
              <select
              id="floors"
              name="floors"
              required
              value={formData.floors}
              onChange={handleChange}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
              <option value="0">Aucun étage</option>
              {[1, 2, 3, 4, 5, 6, 7, 9, '+10'].map(num => (
                <option key={num} value={num}>
                {num} {num === 1 ? 'étage' : 'étages'}
                </option>
              ))}
              </select>
            </div>

            {/* Additional Spaces */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Autres
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="hasBasement"
                    checked={formData.hasBasement}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="ml-2">Cave</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="hasAttic"
                    checked={formData.hasAttic}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                  <span className="ml-2">Combles</span>
                </label>
              </div>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Ville *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Entrer votre ville"
              />
            </div>

            {/* Duration of Pest Presence */}
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Depuis combien de temps avez-vous remarqué le problème des parasites ? *
              </label>
              <select
                id="duration"
                name="duration"
                required
                value={formData.duration}
                onChange={handleChange}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="recent">Récent (Moins d’une semaine)</option>
                <option value="weeks">Des Semaines</option>
                <option value="months">Des Mois</option>
                <option value="years">Des Années</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition duration-300"
            >
              Demander le devis
            </button>
            <ValidationError 
              prefix="Form"
              field="form"
              errors={state.errors}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuoteRequestPage;