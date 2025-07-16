import React from "react";
import border from "/assets/border.png";

const Poem = () => {
  return (
    <section
      id="poem-section"
      className="flex flex-col items-center justify-between w-full mx-auto mt-16 space-x-4"
    >
      <img src={border} alt="border" className="w-[40%] mb-6" />

      <div className="w-fit">
        <div className="flex flex-col">
          <div>
            <blockquote className="text-xl font-light italic text-slate-200 leading-relaxed text-center">
              O Captain! my Captain! rise up and hear the bells; <br />
              Rise up—for you the flag is flung—for you the bugle trills,
              <br />
              For you bouquets and ribbon’d wreaths—for you the shores
              a-crowding,
              <br />
              For you they call, the swaying mass, their eager faces turning;
              <br />
            </blockquote>
          </div>

          <div className="w-fit self-end">
            <div className="text-sm text-right mt-5">
              <h2 className="font-medium text-slate-400 tracking-wider">
                from
              </h2>
              <h3 className="text-white text-base">
                <a
                  href="https://www.poetryfoundation.org/poems/45474/o-captain-my-captain"
                  className="text-white hover:text-slate-300 italic transition-colors duration-200 underline decoration-slate-500 hover:decoration-slate-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  O Captain! My Captain!
                </a>
              </h3>
              <p className="text-xs text-gray-400 italic font-light">
                BY{" "}
                <span className="text-slate-300 font-medium">Walt Whitman</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poem;
