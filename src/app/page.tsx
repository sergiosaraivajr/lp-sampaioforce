import Image from "next/image";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutUs />
      <Projects />
    </main>
  );
}
