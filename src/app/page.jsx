import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ContactPage from "../components/Contact";
import Skills from "../components/Services";
import ProjectsPage from "../components/Projects";
import Reviews from "../components/Reviews";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between bg-slate-300 dark:bg-black'>
            <h1
                className='fixed z-[100] invisible md:visible pt-3 text-slate-700 self-center'
                style={{ marginTop: "-10px" }}
            >
                GLF Siding
            </h1>
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
    description: "We Install Siding and Windows",
};
