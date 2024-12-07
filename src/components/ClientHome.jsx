'use client';
import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
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
      setLoading(false); // Loader finaliza
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loader />}
      <main
        className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
      >
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
