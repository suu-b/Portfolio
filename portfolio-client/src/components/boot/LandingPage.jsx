import Loader from "./Loader"
import Introduction from "./Introduction"
import Contents from "./Contents"
import Substack from "./Substack"

export default function LandingPage() {

    return (
        <section id="landing-page">
            <Introduction />
            <Contents />
            <Substack />
        </section>
    )
}