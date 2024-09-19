import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <div
      className="h-[100vh] flex flex-col items-start justify-center pl-8 md:pl-32"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-black mb-6 text-2xl md:text-3xl uppercase">We help all people</h2>
      <h1 className="text-blue-800 mb-5 text-5xl md:text-7xl uppercase font-bold">Around the world</h1>
      <p className="text-black font-thin text-xl md:text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, id!
      </p>
      <div className="flex gap-4 mt-16 md:mt-32 font-bold">
        <button className="h-12 px-5 rounded-md text-black outline outline-2">Contact Us</button>
        <button className="bg-blue-700 h-12 px-5 rounded-md text-white">Donate Now</button>
      </div>
    </div>
  );
};

export default Hero;
