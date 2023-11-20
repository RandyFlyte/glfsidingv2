import Main from '../components/Main';
import Navbar from '../components/Navbar';
import About from '../components/About';
import ContactPage from '../components/Contact';
import Skills from '../components/Services';
import ProjectsPage from '../components/Projects';
import Reviews from '../components/Reviews';
import ImageCarousel from '@/components/ImageCarousel';

export default function Home() {
  return (
    <main
      id='Home-Main'
      className='relative flex min-h-screen flex-col items-center justify-between bg-navyblue1-200 dark:bg-black bg-gradient-to-br from-blue-300 to-amber-300
      '>
      <Navbar />
      <Main />
      {/* <ImageCarousel /> */}
      <About />
      {/* <Skills /> */}
      {/* <ProjectsPage /> */}
      <Reviews />
      <ContactPage />
    </main>
  );
}

export const metadata = {
  title: 'GLF Siding and Garage Doors',
  description: 'GLF Siding and Garage Doors',
};
