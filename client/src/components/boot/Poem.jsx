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
        <div className="text-center space-y-8">
          <blockquote className="text-lg font-light italic text-slate-200 leading-relaxed max-w-4xl mx-auto">
            Here Captain! dear father! <br />
            This arm beneath your head! <br />
            It is some dream that on the deck, <br />
            You’ve fallen cold and dead.
          </blockquote>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent mx-auto"></div>

          <div className="space-y-3">
            <h2 className="text-xl font-medium text-slate-300">from:</h2>
            <h3 className="text-xl text-white">
              <a
                href="https://www.poetryfoundation.org/poems/45474/o-captain-my-captain"
                className="text-white underline"
                target="_blank"
              >
                O Captain! My Captain!
              </a>
            </h3>
            <p className="text-lg text-gray-400 italic font-light">
              BY <u>Walt Whitman</u>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poem;
