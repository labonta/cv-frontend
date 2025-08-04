import React, { useEffect, useRef, useState } from "react";
import Header from "./components/layout/Header";
import Intro from "./components/page-el/Intro";
import Links from "./components/page-el/Links";
import Sintesi from "./components/page-el/Sintesi";
import Skills from "./components/page-el/Skills";
import Navbar from "./components/ui/Navbar";

function App() {

  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef({});

  const sections = [
    { id: "introduzione", Component: Intro },
    { id: "sintesi", Component: Sintesi },
    { id: "skills", Component: Skills },
    { id: "links", Component: Links },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-screen w-full bg-[url('/src/assets/animated.svg')] bg-cover overflow-y-auto scroll-smooth">
      <div className="max-w-[1400px] m-auto px-5">
        <div className="w-full flex flex-col">
          <Header />
          {sections.map(({ id, Component }) => (
            <Component
              key={id}
              ref={(el) => (sectionRefs.current[id] = el)}
            />
          ))}
          <Navbar activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
