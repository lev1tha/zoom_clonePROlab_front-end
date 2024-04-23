import React from "react";

function Home() {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[270px] py-2 text-center text-base text-normal">
            Up Comming Meeting: 12:30PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">11:30AM</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              Friday, 29 March 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
