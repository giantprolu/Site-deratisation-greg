import Hero from '../components/Hero';
import Services from '../components/Services';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      {<Hero service={{
        icon: undefined,
        title: 'Protégez votre maison contre les invités indésirables',
        description: `Des services professionnels de lutte antiparasitaire qui assurent la sécurité de votre famille 
              et l’absence de parasites dans votre maison. Obtenez des solutions expertes adaptées à vos besoins.`,
        image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?auto=format&fit=crop&q=80'
      }} />}
      
      {/* Services Section */}
      <Services />
    </div>
  );
}


export default HomePage;