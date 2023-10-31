import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";
ReactGA.initialize("G-8TXS2CK7NG'");

ReactGA.send({ hitType: "pageview", page: "/ai-lixo", title: "AiLixo" });

function App() {
  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <Container />
      <Footer />
    </div>
  );
}

export default App;
