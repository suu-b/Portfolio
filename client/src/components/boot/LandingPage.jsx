import Introduction from "./Introduction";
import Contents from "./Contents";
import Substack from "./Substack";
import Poem from "./Poem";

export default function LandingPage() {
    return (
        <section id="landing-page">
            <Introduction />
            <Contents />
            <Substack />
        </section>
    );
}
