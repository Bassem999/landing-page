import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Works from "./sections/Works";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Signup from "./sections/Signup";
import Footer from "./sections/Footer";
import Pattern from "./components/Pattern";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pattern />
        <Services />
        <AboutUs />
        <Works />
        <Testimonials />
        <Blog />
        <Signup />
      </main>
      <Footer />
    </>
  );
}

export default App;
