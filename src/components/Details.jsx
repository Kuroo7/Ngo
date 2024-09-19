import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="h-auto md:h-[100vh] flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-center px-4 md:px-8 py-10">
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="text-center">
          <h1 className="text-blue-800 text-4xl md:text-7xl font-bold">6478</h1>
          <h3 className="text-black text-xl md:text-3xl font-thin mt-2">Volunteers in 2020</h3>
        </div>
        <div className="text-center">
          <h1 className="text-blue-800 text-4xl md:text-8xl font-bold">348195</h1>
          <h3 className="text-black text-xl md:text-3xl font-thin mt-2">People we helped in 2020</h3>
        </div>
        <div className="text-center">
          <h1 className="text-blue-800 text-4xl md:text-8xl font-bold">16M</h1>
          <h3 className="text-black text-xl md:text-3xl font-thin mt-2">Funds we collected</h3>
        </div>
      </div>
      <div className="w-full md:w-2/4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl uppercase">We help all people</h2>
        <h1 className="text-4xl md:text-6xl mt-5 uppercase font-bold text-blue-800">Around the world</h1>
        <p className="text-lg md:text-xl mt-5 w-full md:w-3/4 mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequuntur, necessitatibus distinctio fuga ducimus tempore corporis autem totam saepe excepturi!
        </p>
        <Link to='/about'>
          <button className="h-12 px-5 mt-10 rounded-md text-black outline outline-2">About Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
