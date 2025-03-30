import { motion } from "framer-motion";
import { IoMdCloseCircleOutline } from "react-icons/io"
import { Link } from "react-router-dom";

export default function SideBar({ isOpen, onClose }) {
    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-1/4 h-screen bg-black border-r border-white z-50 flex flex-col items-center justify-center"
            >
                <button onClick={onClose} className="absolute top-5 right-5">
                    <IoMdCloseCircleOutline size={30} color="white" />
                </button>
                <div className="flex flex-col items-center justify-center">
                    <h2>INDEX</h2>
                    <p className="text-base">Some major sections of the whole site</p>
                </div>
                <nav className="flex flex-col p-5 text-center gap-3 w-full text-slate-300 text-xl max-h-[70%] overflow-y-auto">
                    <Link to="/" className="hover:bg-slate-800 hover:text-slate-100 rounded p-5" onClick={onClose}>/home</Link>
                    <Link to="/technology" className="hover:bg-slate-800 hover:text-slate-100 rounded p-5" onClick={onClose}>/technology</Link>
                    <Link to="/now" className="hover:bg-slate-800 hover:text-slate-100 rounded p-5" onClick={onClose}>/now</Link>
                    <Link to="/future" className="hover:bg-slate-800 hover:text-slate-100 rounded p-5" onClick={onClose}>/future</Link>
                    <Link to="/timeline" className="hover:bg-slate-800 hover:text-slate-100 rounded p-5" onClick={onClose}>/timeline</Link>
                </nav>
            </motion.div>
        </>
    );
}
