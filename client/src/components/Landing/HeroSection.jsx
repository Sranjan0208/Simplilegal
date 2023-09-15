import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full h-screen bg-[#7D8597] flex flex-col justify-center items-center">
      <h1 className="text-[20rem]  text-center text-[#001845]" id="heading">
        SIMPLILEGAL
      </h1>
      <Link to="/generator">
        <button
          className="bg-[#33415C] hover:bg-[#0C356A] transform duration-150 ease-in-out text-[#FFFFFF] text-2xl px-7 py-3 font-bold rounded-2xl mt-5"
          id="content"
        >
          TRY IT NOW
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
