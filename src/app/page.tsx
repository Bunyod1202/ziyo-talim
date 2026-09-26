import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Stats from '@/components/Stats';
import Courses from '@/components/Courses';
import Results from '@/components/Results';
import Reasons from '@/components/Reasons';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <Stats />
      <Courses />
      <Results />
      <Reasons />
      <Footer />
    </main>
  );
}
