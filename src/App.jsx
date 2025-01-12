import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portifolio from "./components/Portifolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

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