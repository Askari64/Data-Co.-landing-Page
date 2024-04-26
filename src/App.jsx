import Hero from "./components/Hero";
import Nav from "./components/Nav";
import AnalyticsSection from "./components/AnalyticsSection";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AnalyticsSection />
      <Newsletter />
      <Cards />
      <Footer />
    </>
  );
}
