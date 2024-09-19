const Card = () => {
  return (
    <div className="mx-5 mt-24">
      <h1 className="text-3xl font-semibold mb-10">Protect and enhance poverty</h1>
      
      {/* Card */}
      <div
        className="relative h-96 mb-10 w-full max-w-md bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1532547459370-9f8a1f6ea2d4?auto=format&fit=crop&w=800&q=60')`, // Example image
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Card Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          
          {/* Heading at the top */}
          <h2 className="text-white text-3xl font-bold z-10">
            Help the Children
          </h2>

          {/* Centered Button with Glassmorphism Effect */}
          <div className="flex justify-center mb-6 z-10">
            <button
              className="backdrop-blur-md bg-white bg-opacity-20 text-white text-lg font-bold py-2 px-6 rounded-md border border-white border-opacity-30 hover:bg-opacity-30 transition duration-300"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
