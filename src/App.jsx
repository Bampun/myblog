import About from './About';
import Cv from './Cv';
import Projects from './Projects';
import Skills from './Skills';
import Work from './Work';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
    return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element= {<Home />} />
            <Route path="/about" element= {<About />} />
            <Route path="/skills" element= {<Skills />} />
            <Route path="/work" element= {<Work />} />
            <Route path="/projects" element= {<Projects />} />
            <Route path="/cv" element= {<Cv />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
}

export default App