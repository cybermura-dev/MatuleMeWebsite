import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import WhyUs from './components/sections/WhyUs';
import AppShowcase from './components/sections/AppShowcase';
import Reviews from './components/sections/Reviews';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import CallToAction from './components/sections/CallToAction';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <WhyUs />
      <AppShowcase />
      <Reviews />
      <CallToAction/>
      <Footer />
    </>
  );
}