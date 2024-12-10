import Projects from "./sections/Projects"
import React from "react"
import profileImage from "/assets/profile.jpg"
import Introduction from "./sections/Introduction"

function App() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center pt-8">
      <img src={profileImage} className="w-40 rounded-full absolute top-10 " alt="" />
      <div className="mt-24 w-[50vw] p-8 border  bg-white border-slate-300 shadow-lg rounded-xl pt-20">
        <Introduction/>
        <Projects />
      </div>
    </div>
  )
}
export default App