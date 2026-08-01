import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Container from "./components/ui/Container";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Philosophy from "./components/sections/Philosophy";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080808]">
      {/* Background Blur */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute right-20 bottom-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

      <Container>
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Philosophy />

        <Contact />
      </Container>
    </main>
  );
}

export default App;
