import { Bug,  Rat , ShieldIcon, SprayCan } from 'lucide-react';
import ratImage from '../Asset/Rat.jpg'; 
export const services = [
    {
      id: 'Dératisation',
      title: 'Dératisation',
      icon: <Rat className="h-8 w-8 text-teal-600" />,
      description: 'Des solutions complètes de lutte contre les rongeurs pour protéger votre propriété contre les souris, les rats et autres rongeurs.',
      fullDescription: `Notre service professionnel de contrôle des rongeurs offre une protection complète contre tous les types de rongeurs. Nous utilisons une combinaison de techniques de pointe et de produits respectueux de l’environnement pour :
  
      •  Identifier et sceller les points d’entré
      • Éliminer les infestations existantes
      • Prévenir les futurs problèmes de rongeurs
      • Protégez votre propriété contre les dommages
      • Assurer la santé et la sécurité de votre famille`,
    image: ratImage
    },
    {
      id: 'Extermination des insectes',
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
      id: 'Désinfection',
      title: 'Disinfection Services',
      icon: <SprayCan className="h-8 w-8 text-teal-600" />,
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
      id: 'Traitement préventif',
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
  