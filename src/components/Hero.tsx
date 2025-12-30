import { PiCookingPotFill } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="min-h-screen mx-2.5 flex flex-col items-center space-y-6 mt-10 ">
      <div className="  bg-hero-badge-bg text-hero-badge-text font-semibold flex items-center justify-center rounded-2xl w-64 p-2 ">
        <PiCookingPotFill className="mr-3" />
        <p>Discover Amazing Recipes</p>
      </div>

      <div className="text-center">
        <span className="text-5xl lg:text-6xl font-lora font-bold bg-linear-to-r text-balance from-gray-900 via-purple-900 to-purple-700  inline-block text-transparent bg-clip-text">
          Your Culinary Journey <br /> Starts Here
        </span>
      </div>

      <p className="text-center max-w-2xl text-lg lg:text-xl text-gray-600 leading-relaxed text-pretty">
        Explore our curated collection of homemade recipes,from quick <br />
        weeknight dinners to impressive weekend feasts. Each recipe crafted with
         love and tested to perfection.
      </p>
    </section>
  );
};

export default Hero;
