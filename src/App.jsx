import Projects from "./sections/Projects"
import React from "react"
import profileImage from "/assets/profile.jpg"
import Introduction from "./sections/Introduction"
import Skills from "./sections/Skills"

function App() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pt-8">
      <img src={profileImage} className="w-40 rounded-full absolute top-10 " alt="" />
      <div className="mt-24 w-[50vw] p-8 bg-white shadow rounded-xl pt-20">
        <Introduction />
        <hr className="my-5" />
        <Skills />
        <hr className="my-5" />
        <Projects />
      </div>
    </div>
  )
}
export default App