import Image from "next/image";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutUs />
    </main>
  );
}
