import Navbar from "../../components/Navbar";
import Projects from "../../components/Projects";

export default function ProjectsPage() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24 pt-0'>
            <h1 className=''>Our projects</h1>
            <Navbar />
            <Projects />
            {/* Additional projects only shown when Projects link selectd or "more"  */}
        </main>
    );
}

export const metadata = {
    title: "GLF Siding",
    description: "A sampling of our projects.",
};
