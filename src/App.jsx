import Projects from "./sections/Projects"
import React from "react"
import profileImage from "/assets/profile.jpg"
import Introduction from "./sections/Introduction"
import Skills from "./sections/Skills"
import Contacts from "./sections/Contacts"
import DarkModeToggle from "./components/DarkModeToggle"

function App() {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 flex flex-col justify-center items-center py-8">
      <DarkModeToggle />
      <img src={profileImage} className="w-40 rounded-full absolute top-10 " alt="profile-image" />
      <div className="mt-28 w-[50vw] p-8 dark:bg-gray-900 bg-white shadow rounded-xl pt-20">
        <Introduction />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Skills />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Projects />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <Contacts />
        <hr className="my-5 border-slate-300 dark:border-slate-600" />
        <p className="text-center text-sm text-slate-500 dark:text-slate-400">Shubham Thakur - <span className="text-blue-500 dark:text-blue-400">2024</span></p>
      </div>
    </div>
  )
}
export default App