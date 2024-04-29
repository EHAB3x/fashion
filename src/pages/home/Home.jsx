import Blog from "../../components/blog/Blog";
import Collection from "../../components/collection/Collection";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import NewArrival from "../../components/new arrival/NewArrival";
import Search from "../../components/search/Search";
import Statistics from "../../components/statistics/Statistics";

const Home = () => {
  return (
    <>
      <Search />
      <header className="header">
        <Navbar/>
        <Hero />
      </header>
      <Collection />
      <NewArrival />
      <Statistics />
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
