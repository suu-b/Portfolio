import { IoLink } from "react-icons/io5";

export default function Contacts() {
    return (
        <section>
            <div className='flex justify-between items-center mb-8'>
                <h3 className="font-bold text-lg text-slate-700 ml-2">Contact</h3>
                <div className="flex justify-between items-center">
                    <a href="https://www.linkedin.com/in/hey-shubham-thakur" target="_blank" className='underline-offset-4 text-sm text-slate-700 flex items-center underline'>LinkedIn <IoLink size={15} className='ml-1' /></a>
                    <a href="mailto:thakur0805@gmail.com" target="_blank" className='underline-offset-4 text-sm text-slate-700 flex items-center ml-8 underline'>Email <IoLink size={15} className='ml-1' /></a>
                </div>
            </div>
        </section>
    )
}