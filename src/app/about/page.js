import Navbar from "../../components/Navbar";

export default function About() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1 className=''>About us.</h1>
            <Navbar />
        </main>
    );
}

export const metadata = {
    title: "GLF Siding",
    description:
        "We are a family-owned company specializing in the installation of door and windows.",
};
