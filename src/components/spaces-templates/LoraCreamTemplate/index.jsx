import Contact from "./contact";
import Education from "./education";
import Experience from "./experience";
import Headline from "./headline";
import Name from "./name";
import Photo from "./photo";
import Projects from "./projects";
import Skills from "./skills";
import SocialLinks from "./social-links";

export default function LoraCreamTemplate(props) {
  const data = props.data ?? props;

  return (
    <main className="mx-auto min-h-screen max-w-3xl space-y-16 bg-[#F6F3EE] px-8 py-16 text-[#1C1C1A]">
      {/* Header: photo + name + social */}
      <section className="flex items-center gap-6">
        <Photo data={data} />
        <div className="space-y-2">
          <Name data={data} />
          <SocialLinks data={data} />
        </div>
      </section>

      <Headline data={data} />

      {/* Main two-column grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="space-y-16 md:col-span-2">
          <Experience data={data} />
          <Projects data={data} />
        </div>
        <aside className="space-y-12">
          <Skills data={data} />
          <Education data={data} />
        </aside>
      </div>

      <Contact data={data} />
    </main>
  );
}
