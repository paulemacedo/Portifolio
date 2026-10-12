import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Portifolio from "./sections/Portifolio";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Education from "./sections/Education";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Skills />
      <Portifolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}