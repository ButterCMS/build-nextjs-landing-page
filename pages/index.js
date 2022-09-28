import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Goal from "../components/Goal";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Team from "../components/Team";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"> */}
      <main className="relative flex-1 lg:container text-center p-0 mx-auto overflow-x-hidden overflow-auto">
        <Hero />
        <Goal />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
