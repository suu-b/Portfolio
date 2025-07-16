import React from "react";
import border from "/assets/border.png";

const Poem = () => {
  return (
    <section
      id="poem-section"
      className="flex flex-col items-center justify-center w-full md:w-[50%] mx-auto mt-16"
    >
      <img src={border} alt="border" className="w-[40%] mb-6" />

      <div className="w-full">
        <h1 className="text-2xl font-bold text-slate-300 text-center mb-8">
          A Poem to Inspire
        </h1>

        <div className="bg-black border border-neutral-800 rounded-2xl shadow-md p-6">
          <div className="text-white text-center">
            <blockquote className="text-lg md:text-xl font-light italic text-slate-200 mb-6 leading-relaxed">
              "O Captain! my Captain! our fearful trip is done,
              <br />
              The ship has weather'd every rack, the prize we sought is won."
            </blockquote>

            <hr className="border-t border-neutral-700 my-6" />

            <div className="text-left">
              <h2 className="text-xl font-semibold text-slate-300 mb-4">
                I recommend you to read:
              </h2>
              <h3 className="text-lg font-medium text-white mb-2">
                O Captain!
              </h3>
              <p className="text-base text-gray-400 italic">Walt Whitman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poem;
