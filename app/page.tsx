import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getContent } from "./actions";

export default async function Home() {
  const content = await getContent();

  if (!content) {
    return <div>Error loading content. Please ensure data/content.json exists.</div>;
  }

  return (
    <>
      <Cursor />
      <Navbar />
      <Hero data={content.hero} />
      <About data={content.about} />
      <Skills data={content.expertise} />
      <Education data={content.education} />
      <Experience data={content.experience} />
      <Projects data={content.projects} />
      <Contact data={content.contact} />
      <Footer data={content.footer} />
    </>
  );
}
