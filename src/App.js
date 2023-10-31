import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";
import ReactGA from "react-ga4";

function App() {
  const TRACKING_ID = "G-8TXS2CK7NG";
  ReactGA.initialize(TRACKING_ID);
  ReactGA.pageView(document.location.pathname);
  return (
    <div className="flex flex-col">
      {/* <Navbar /> */}
      <Container />
      <Footer />
    </div>
  );
}

export default App;
