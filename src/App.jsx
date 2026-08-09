import { useLenis } from '@/hooks/useLenis';
import { MouseFollower } from '@/components/MouseFollower';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { WhyChooseUs } from '@/sections/WhyChooseUs';
import { Marquee } from '@/sections/Marquee';

import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

export default function App() {
  useLenis();

  return (
    <div className="relative">
      <MouseFollower />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyChooseUs />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
