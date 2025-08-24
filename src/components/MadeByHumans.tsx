import React from "react";
const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        {/* Removed the pulse-chip button/element that was here */}

        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
            style={{
              backgroundImage: "url('./background-section3.png')",
            }}
          >
            <div className="flex items-center text-white">
              <img
                src="./logo.svg"
                alt="Pulse Robot Logo"
                className="h-8 sm:h-9 w-auto mr-3 invert"
              />
              <span className="text-white text-xl font-medium"></span>
            </div>

            <div
              style={{
                overflow: "hidden",
                maxHeight: "80px",
                marginTop: "40px",
              }}
            >
              <h2
                className="
    font-playfair italic text-white font-thin text-center 
    text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
    mt-0 mx-0 
    mb-4 sm:mb-6 md:mb-8 lg:mb-10
    px-2 sm:px-4 md:px-0
  "
              >
                Where Your Health Comes First
              </h2>
            </div>

            {/* White box at the bottom with overflow */}
            <div className="w-[120%] bg-white h-10 rounded-t-lg absolute left-[-10%] bottom-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MadeByHumans;
