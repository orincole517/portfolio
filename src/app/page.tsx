import { About } from '@/components/sections/About';
import { Colophon } from '@/components/sections/Colophon';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { SelectedWork } from '@/components/sections/SelectedWork';
import { Skills } from '@/components/sections/Skills';

export default function HomePage() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Colophon />
    </>
  );
}
