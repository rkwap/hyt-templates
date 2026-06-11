import About from "./about";
import Blogs from "./blogs";
import Certifications from "./certifications";
import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Headline from "./headline";
import Name from "./name";
import Photo from "./photo";
import Projects from "./projects";
import ProjectPortfolio from "./projects-portfolio";
import Skills from "./skills";
import SocialLinks from "./social-links";

export default function NightScriptTemplate(props) {
  const data = props.data ?? props;

  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 text-zinc-100">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="mb-24 flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <Name data={data} />
          <Headline data={data} />
          <SocialLinks data={data} />
        </div>
        <Photo name={data.name} photo={data.photo} />
      </section>

      {/* ── Sections with generous spacing like aadi.is-a.dev ─────────── */}
      <div className="space-y-24">
        <About about={data.about} />
        <Experience data={data} />
        <Skills data={data} />
        <Education data={data} />
        <Projects projects={data.projects} />
        <ProjectPortfolio projects={data.project_portfolio} />
        <Certifications data={data} />
        <Blogs data={data} />
        <Contact data={data} />
      </div>
    </main>
  );
}
