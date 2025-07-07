import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { ImageLink } from "./components/ImageLink";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
    <Navbar />
    <Content />
    <Footer />
    </>
  );
};
