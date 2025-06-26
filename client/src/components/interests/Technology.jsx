import Article from "../Article";

export default function Technology() {
    return (
        <section id="technology" className="w-[50%] pt-10">
            <h1 className="text-4xl text-center mb-0">Technology</h1>
            <p className="text-slate-400 text-center italic mb-10 text-base">"Change Has Never Been This Fast. It Will Never Be This Slow Again" ~ Justin Trudeau</p>
            <div id="content"><Article fileName={"technology"}/></div>
        </section>
    )
}
