import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Navbar from "./Nevbar";
import "../Styles/global.css"
import MainContent from "./MainContent";


function Dashboard() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main>
        <Hero />
        <MainContent/>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;