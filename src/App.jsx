import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Contact,
  Experience,
  Tech,
  Works,
} from "./components";
import { StarsCanvas } from "./components/canvas";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <div className="relative z-0">
              <Hero />
              <StarsCanvas />
            </div>
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
