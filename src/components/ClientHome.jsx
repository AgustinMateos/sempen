'use client'
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader'; // Importa el loader
import PrimerComponente from '@/components/PrimerComponente';
import Navbar from '@/components/Navbar';
import SustainableFuels from '@/components/SustainableFuels';
import WeBuild from '@/components/Webuild';
import AboutUs from '@/components/AboutUs';
import WhoWeAre from '@/components/WhoWeAre';
import PositiveImpact from '@/components/PositiveImpact';
import Projects from '@/components/Projects';
import GreenEnergy from '@/components/GreenEnergy';
import Footer from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Oculta el loader después del tiempo establecido
    }, 3000); // Duración del loader (3 segundos en este ejemplo)

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loader />} {/* Muestra el loader mientras loading es true */}
      
      <main
        className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`} 
      >
        <PrimerComponente shouldPlay={!loading} />
        <AboutUs />
        <WhoWeAre />
        <PositiveImpact />
        
       
        <Projects />
        <WeBuild />
        <Footer />
      </main>
    </>
  );
}
