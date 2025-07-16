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

        <div className="text-center space-y-8">
          <blockquote className="text-2xl md:text-3xl font-light italic text-slate-200 leading-relaxed max-w-4xl mx-auto">
            "O Captain! my Captain! our fearful trip is done,
            <br />
            The ship has weather'd every rack, the prize we sought is won."
          </blockquote>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-slate-300">
              I recommend you to read:
            </h2>
            <h3 className="text-2xl font-semibold text-white">
              O Captain!
            </h3>
            <p className="text-lg text-gray-400 italic font-light">
              Walt Whitman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poem;
