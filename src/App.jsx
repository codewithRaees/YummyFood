import "./App.css";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Header from "./components/Header";
import SliderTest from "./components/SliderTest";
import TopPicks from "./components/TopPicks";

function App() {
  return (
    <>
      <Header />
      <Featured />
      {/* <SliderTest /> */}
      <Delivery />
      <TopPicks />
    </>
  );
}

export default App;
