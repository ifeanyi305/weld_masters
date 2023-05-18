import AOS from 'aos';
import Header from './component/Header';
import Intro from './component/Intro';
import About from './component/about/About';
import Recommendation from './component/Recommendation';
import Project from './component/Project';
import Skills from './component/Skills';
import Connect from './component/Connect';
import Footer from './component/Footer';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Intro />
        <About />
        <Project />
        <Skills />
        <Recommendation />
        <Connect />
        <Footer />
      </div>
    </>
  );
}

export default App;
