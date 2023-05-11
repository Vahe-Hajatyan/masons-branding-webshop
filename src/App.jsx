import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Tshirt from "./components/Tshirt";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<Tshirt />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
