const Donate = () => {
  return (
    <>
      <div className="h-auto md:h-[82vh] bg-blue-800 text-white mx-4 md:mx-8 rounded-md overflow-hidden flex flex-col justify-center">
        <div className="px-4 md:px-24 ml-0 md:ml-24">
          <h1 className="bg-white rounded-md font-bold text-xl md:text-2xl text-black w-full md:w-96 py-2 px-3">
            Sponsor according to your limit
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mt-8">
            Help Wayanad overcome the massive flood
          </h1>
          <p className="mt-4 md:mt-8 text-lg md:text-2xl">
            Support the people who lost their homes and loved ones.
          </p>
          <div className="mt-8">
            <button className="bg-yellow-500 text-black text-xl rounded-md font-bold outline-none px-5 py-4 hover:bg-yellow-600 transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <hr className="my-8 mx-4 md:mx-8" />
    </>
  );
};

export default Donate;
