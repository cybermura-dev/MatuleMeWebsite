import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import WhyUs from './components/sections/WhyUs';
import AppShowcase from './components/sections/AppShowcase';
import Reviews from './components/sections/Reviews';
import Header from './components/layout/Header';
import CallToAction from './components/sections/CallToAction';
import Categories from './components/sections/Categories';

export default function Home() {
  return (
    <>
      <Header />
      <section id="hero">
        <Hero />
      </section>
      
      <section id="features">
        <Features />
      </section>
      
      <section id="categories">
        <Categories />
      </section>
      
      <section id="why-us">
        <WhyUs />
      </section>
      
      <section id="app-showcase">
        <AppShowcase />
      </section>
      
      <section id="reviews">
        <Reviews />
      </section>
      
      <section id="cta">
        <CallToAction />
      </section>
    </>
  );
}