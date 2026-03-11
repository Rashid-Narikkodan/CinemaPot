import HeroBanner from "./components/HeroBanner";
import RowContainer from "../../components/movie/RowContainer";

const Home = () => {
  return (
    <div className="text-white bg-[#161616]">
      <HeroBanner />
      <div className="relative z-10 bg-[#161616]">
              <div
        className="
      pointer-events-none
      absolute top-0 left-0 right-0
      h-48
      bg-linear-to-t
      from-[#161616]
      via-[#050505]/30
      to-transparent
    "
      />
        <RowContainer />
      </div>
    </div>
  );
};


export default Home;
