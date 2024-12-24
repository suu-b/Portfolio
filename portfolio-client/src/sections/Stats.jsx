import axios from "axios"
import { useEffect, useState } from "react"
import { LanguageStats } from "../components/LanguageStats"
import { PRStats } from "../components/PRStats"
import { FadeLoader } from "react-spinners"

export function Stats() {
    const [stats, setStats] = useState({})
    const fetchStats = () => {
        axios.get(import.meta.env.VITE_STATS_API_URL)
            .then(result => setStats(result.data))
            .catch(error => console.log("ERROR:" + error))
    }
    useEffect(() => fetchStats(), [])
    return (
        <section>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8'>
                <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Github Stats</h3>
                <p className='lg:text-sm ml-2 text-[12px] lg:ml-0 text-slate-700 dark:text-slate-300 lg:text-right'>Some stats sourced by github for an overview</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between ">
                <div className="lg:w-[45%] dark:bg-black bg-white border dark:border-black rounded shadow px-5 py-2">
                    <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Languages</h3>
                    {stats.languages ? <LanguageStats data={stats.languages} /> : <FadeLoader color="gray" className="w-[20%] my-3 mx-auto"/>}
                </div>
                <div className="lg:w-[45%] dark:bg-black bg-white border dark:border-black rounded shadow px-5 py-2">
                    <h3 className="font-bold text-lg text-slate-700 dark:text-slate-300 ml-2">Total Pull Requests: {stats.totalPRs}</h3>
                    {(stats.personalPRs && stats.orgsPRs) ? <PRStats data={{ "Personal": stats.personalPRs, "Organizations": stats.orgsPRs }} /> :  <FadeLoader color="gray" className="w-[20%] my-3 mx-auto"/>}
                </div>
            </div>
        </section>
    )
}