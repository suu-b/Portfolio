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
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Quote Section */}
          <div className="order-2 md:order-1">
            <blockquote className="text-xl md:text-2xl font-light italic text-slate-200 leading-relaxed">
              "Here Captain! dear father! <br />
              This arm beneath your head! <br />
              It is some dream that on the deck, <br />
              You've fallen cold and dead."
            </blockquote>
          </div>

          {/* Attribution Section */}
          <div className="order-1 md:order-2 space-y-4">
            <div className="w-16 h-px bg-gradient-to-r from-slate-400 to-transparent md:mx-0 mx-auto"></div>

            <div className="space-y-3 text-center md:text-left">
              <h2 className="text-lg font-medium text-slate-400 uppercase tracking-wider">
                from:
              </h2>
              <h3 className="text-2xl font-semibold text-white">
                <a
                  href="https://www.poetryfoundation.org/poems/45474/o-captain-my-captain"
                  className="text-white hover:text-slate-300 transition-colors duration-200 underline decoration-slate-500 hover:decoration-slate-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O Captain! My Captain!
                </a>
              </h3>
              <p className="text-lg text-gray-400 italic font-light">
                BY <span className="text-slate-300 font-medium">Walt Whitman</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poem;