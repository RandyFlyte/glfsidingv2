import Main from "../components/Main";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ContactPage from "../components/Contact";
import Skills from "../components/Skills";
import ProjectsPage from "../components/Projects";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-2 bg-slate-100'>
            <h1 className='fixed invisible md:visible'>GLF Siding</h1>
            <h2 className='fixed md:invisible'>GLF Siding</h2>
            <Navbar />
            <Main />
            <About />
            <ContactPage />
            <Skills />
            <ProjectsPage />
        </main>
    );
}

export const metadata = {
    title: "GLF Siding",
    description: "We Install Siding and Windows",
};
