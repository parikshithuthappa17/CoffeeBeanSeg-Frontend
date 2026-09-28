import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import ScrollReveal from "./components/ScrollReveal";

import Home from "./pages/Home";
import Grading from "./pages/Grading";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Technology from "./pages/Technology";
import Pricing from "./pages/Pricing";

import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import API from "./pages/API";
import Contact from "./pages/Contact";


function App() {

  return (
    <>

      <div className="ambient-bg" />

      <Navbar />

      <ScrollReveal>

        <PageTransition>

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/grading"
              element={<Grading />}
            />

            <Route
              path="/technology"
              element={<Technology />}
            />

            <Route
              path="/pricing"
              element={<Pricing />}
            />

            <Route
              path="/login"
              element={<Login />}
            />

            <Route
              path="/signup"
              element={<Signup />}
            />

            <Route
              path="/privacy"
              element={<Privacy />}
            />

            <Route
              path="/terms"
              element={<Terms />}
            />

            <Route
              path="/api"
              element={<API />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

        </PageTransition>

      </ScrollReveal>

      <Footer />

    </>
  );
}


export default App;
