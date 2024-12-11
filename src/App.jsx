import Projects from "./sections/Projects"
import React from "react"
import profileImage from "/assets/profile.jpg"
import Introduction from "./sections/Introduction"
import Skills from "./sections/Skills"
import Contacts from "./sections/Contacts"

function App() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center py-8">
      <img src={profileImage} className="w-40 rounded-full absolute top-10 " alt="profile-image" />
      <div className="mt-28 w-[50vw] p-8 bg-white shadow rounded-xl pt-20">
        <Introduction />
        <hr className="my-5" />
        <Skills />
        <hr className="my-5" />
        <Projects />
        <hr className="my-5" />
        <Contacts />
        <hr className="my-5" />
        <p className="text-center text-sm text-slate-500">Shubham Thakur - <span className="text-blue-500">2024</span></p>
      </div>
    </div>
  )
}
export default App