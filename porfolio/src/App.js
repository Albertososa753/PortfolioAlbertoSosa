import React, { useState, useEffect ,Suspense } from "react";
import Navbar from "./components/NavBar/navbar";
//import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Proyects from "./components/Proyects/proyects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Loader from "./components/Loader/loader";
import Intro from "./components/Intro/intro";


function App() {
  const [loading, setLoading] = useState(true);
  const Intro = React.lazy(() => import("./components/Intro/intro"));


  useEffect(() => {
    // Simula un retraso de 5 segundos (ajusta el valor según tu necesidad)
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar  />
          <Suspense fallback={<Loader />}>
          <Intro />
        </Suspense>
          <Skills />
          <Proyects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
