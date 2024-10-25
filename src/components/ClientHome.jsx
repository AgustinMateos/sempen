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
  const [loading, setLoading] = useState(true); // Estado para manejar si el loader sigue activo
  const [fadeIn, setFadeIn] = useState(false); // Estado para controlar la animación de entrada

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia a false para ocultar el loader y mostrar el contenido
      setFadeIn(true); // Cambia a true para permitir que el contenido se desvanezca
    }, 3000); // Duración del loader (3 segundos en este ejemplo)

    return () => clearTimeout(timer); // Limpiar el timer si el componente se desmonta
  }, []);

  if (loading) {
    return <Loader />; // Muestra el loader mientras el estado de carga es true
  }

  // Renderiza el contenido solo después de que el loader haya terminado
  return (
    <>
      <Navbar />
      <main className={`transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <PrimerComponente shouldPlay={!loading} />
        <AboutUs />
        
        <WhoWeAre />
<PositiveImpact />
        <SustainableFuels />
        <GreenEnergy />
        <Projects />
        <WeBuild />
        <Footer />


      </main>
    </>
  );
}
