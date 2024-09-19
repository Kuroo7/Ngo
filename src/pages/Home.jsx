import Card from "../components/Card"
import Details from "../components/Details"
import Donate from "../components/Donate"
import Hero from "../components/Hero"

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mx-auto px-5">
        <Details className="mb-10"/>
        <Donate className="mb-10"/>
        <Card className="mb-10"/>
      </div>
    </div>
  );
}

export default Home;