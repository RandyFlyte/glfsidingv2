import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";

export default function ContactPage() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <h1 className=''></h1>
            <Navbar />
            <Contact />
        </main>
    );
}

export const metadata = {
    title: "Contact GLF Siding",
    description: "Contact GLF Siding by phone or e-mail",
};
