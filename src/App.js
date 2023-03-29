import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./pages/a-navbar/Navbar"
import { useEffect } from "react";
import DotGroup from "./pages/b-dotgroup/DotGroup";
import Landing from "./pages/c-landing/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./pages/d-myskills/MySkills";
import Projects from "./pages/e-project/Projects";
import Testimonials from "./pages/f-testimonials/testimonials";
import Contact from "./pages/g-contact/Contact";
import Footer from "./pages/h-footer/Footer";

function App() {

  const [selectedPage, setSelectedPage] = useState('home');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">

      {/* Navbar */}
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />

      {/* Landing */}
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
        <DotGroup 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        )}
        <Landing 
          setSelectedPage={setSelectedPage}
        />
      </div>

      {/* MySkills */}
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills 
            setSelectedPage={setSelectedPage}
          />
      </div>
      
      {/* Navbar */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Projects 
            setSelectedPage={setSelectedPage}
          />
      </div>

      {/* Testimonials */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Testimonials 
            setSelectedPage={setSelectedPage}
          />
      </div>

      {/* Contact page */}
      <LineGradient />
      <div className="w-5/6 mx-auto">
          <Contact 
            setSelectedPage={setSelectedPage}
          />
      </div>

      <Footer />

    </div>
  );
}

export default App;


// Needed for this proj

//==> npm i framer-motion
//==> npm i react-anchor-link-smooth-scroll
//npm install -D tailwindcss
//npx tailwindcss init
//npm i react-hook-form

//==> npx tailwindcss -i ./src/index.css -o ./public/output.css --watch <=== only use if neccessary => you can see this in public => out0putc.css
//==> paste in public > index.html => check tailwind docu.