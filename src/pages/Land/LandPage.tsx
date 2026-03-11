import Background from "../../assets/images/netflix-bg.jpg";
import HeroContent from "./HeroContent"

const Home = () => {
  return (
    <div className="text-white bg-black overflow-hidden">
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="flex justify-center h-screen items-center">
          <HeroContent />
        </div>
      </section>
    </div>
  );
};

export default Home;
