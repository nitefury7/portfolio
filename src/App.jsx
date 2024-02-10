import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Contact,
  Experience,
  Tech,
  Works,
  Education,
} from "./components";
import { StarsCanvas } from "./components/canvas";
import { BlobCanvas } from "./components/canvas";

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
              {/* <div className="w-full h-auto absolute inset-0 z-[-1]">
                <BlobCanvas />
              </div> */}
            </div>
          </div>
          <About />
          <Experience />
          <Tech />
          <Education />
          <Works />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
