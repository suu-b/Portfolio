import axios from "axios"
import { useEffect, useState } from "react"
import { LanguageStats } from "../components/LanguageStats"

export function Stats() {
    const [data, setData] = useState({})
    const fetchStats = () => {
        axios.get("http://localhost:8080/api")
            .then(result => setData(result.data))
            .catch(error => console.log("ERROR:" + error))
    }
    useEffect(() => fetchStats(), [])
    return (
        <section>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8'>
                <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Github Stats</h3>
                <p className='lg:text-sm ml-2 text-[12px] lg:ml-0 text-slate-700 dark:text-slate-300 lg:text-right'>Some stats sourced by github for an overview</p>
            </div>
            <div className="flex justify-between ">
                <div className="w-fit h-fit bg-white border rounded shadow px-5 py-2">
                    <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Languages</h3>
                    {data && <LanguageStats data={data} />}
                </div>
                <div className="w-fit h-fit bg-white border rounded shadow px-5 py-2">
                    <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Languages</h3>
                    {data && <LanguageStats data={data} />}
                </div>
            </div>
        </section>
    )
}