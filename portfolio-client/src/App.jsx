import { Routes, Route } from "react-router"
import { useState, useEffect } from "react"
import { FaCompass } from "react-icons/fa";

import border from "/assets/border.png"
import Giants from "./components/articles/Giants"
import LandingPage from "./components/boot/LandingPage"
import SideNav from "./components/navigation/SideBar"
import Technology from "./components/interests/Technology"
import Loader from "./components/boot/Loader"
import Contact from "./components/Contact"
import Mythology from "./components/interests/Mythology"
import Philosophy from "./components/interests/Philosophy"
import Timeline from "./components/index/Timeline"
import NotFound from "./components/NotFound"
import Future from "./components/index/Future"
import Now from "./components/Now"
import Design from "./components/articles/Design";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center text-xl justify-center bg-[#101010] relative text-slate-300">
      {!loading ?
        <>
          <button
            onClick={() => setIsNavOpen(true)}
            className="absolute top-5 right-5 z-50 p-2"
          >
            <FaCompass size={30} color="white" />
          </button>
          <SideNav isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/welcome-quote" element={<Giants />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/mythology" element={< Mythology/>} />
            <Route path="/philosophy" element={< Philosophy/>} />
            <Route path="/timeline" element={< Timeline/>} />
            <Route path="/future" element={< Future/>} />
            <Route path="/now" element={< Now/>} />
            <Route path="/design" element={< Design/>} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          {<img src={border} alt="border" className="w-[20%] my-5" />}
          <Contact/>
        </>
        :
        <Loader />}

    </div>
  )
}
