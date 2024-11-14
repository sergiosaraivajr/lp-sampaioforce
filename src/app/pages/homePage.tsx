import CarouselHome from "../components/CarouselHome";
import NavBar from "../components/NavBar";
import TittleHome from "../components/TittleHome";

function HomePage() {
  return (
    <div className="flex-col justify-center items-center">
      <NavBar />
      <div className="flex-col h-[920px] px-16 py-28 bg-white items-center gap-[72px] inline-flex">
        <div className="flex-col w-[768px] h-[304px]">
          <TittleHome />
        </div>
        <CarouselHome />
      </div>
    </div>
  );
}

export default HomePage;
