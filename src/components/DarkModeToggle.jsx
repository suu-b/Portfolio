import { useEffect, useState } from "react"
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

export default function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) return savedTheme === 'dark'
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const root = document.documentElement
        if (darkMode) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <button className="fixed top-5 left-5 p-3 shadow bg-slate-100 border border-slate-200 dark:border-slate-900 dark:bg-slate-900 text-slate-800 dark:text-white rounded" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <FaSun size={30} /> : <IoMoon size={30} />}</button>
    )
}