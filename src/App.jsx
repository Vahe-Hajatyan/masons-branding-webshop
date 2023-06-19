import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Card from "./components/Card";
import Basket from "./components/Basket";
import SignIn from "./components/register/SignIn";
import SignUp from "./components/register/SignUp";
import Favorites from "./components/Favorites";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tshirt"
          element={<Category page="tshirt" title="футболки" />}
        />
        <Route
          path="/trousers"
          element={<Category page="trousers" title="штаны" />}
        />
        <Route
          path="/sneakers"
          element={<Category page="sneakers" title="кроссовки" />}
        />
        <Route
          path="/accessories"
          element={<Category page="accessories" title="аксессуары" />}
        />
        <Route path="/card" element={<Card />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
