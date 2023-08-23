import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ContactPage from "../components/Contact";
import Skills from "../components/Services";
import ProjectsPage from "../components/Projects";
import Reviews from "../components/Reviews";

export default function Home() {
    return (
        <main
            id='Home-Main'
            className='relative flex min-h-screen flex-col items-center justify-between bg-slate-300 dark:bg-black'
        >
            <Navbar />
            <Main />
            <About />
            <Skills />
            <ProjectsPage />
            <Reviews />
            <ContactPage />
        </main>
    );
}

export const metadata = {
    title: "GLF Siding",
    description: "GLF Siding Install Siding and Windows",
};
