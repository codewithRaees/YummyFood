import "./App.css";
import Categories from "./components/Categories";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import Ourmeal from "./components/Ourmeal";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <>
      <Header />
      <Featured />
      {/* <SliderTest /> */}
      <Delivery />
      <TopPicks />
      <Ourmeal />
      <Categories />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
