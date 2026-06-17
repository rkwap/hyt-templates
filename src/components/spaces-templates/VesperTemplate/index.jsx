import About from "./about";
import Blogs from "./blogs";
import Certifications from "./certifications";
import Education from "./education";
import Experience from "./experience";
import Name from "./name";
import Photo from "./photo";
import Projects from "./projects";
import ProjectPortfolio from "./projects-portfolio";
import SidebarNav from "./sidebar-nav";
import Skills from "./skills";
import SocialLinks from "./social-links";

export default function VesperTemplate(props) {
  const data = props.data ?? props;

  return (
    <div className="relative mx-auto min-h-screen max-w-6xl px-4">
      <div className="flex gap-8">
        {/* ── Fixed left sidebar ──────────────────────────────────────── */}
        <aside className="hidden w-56 flex-shrink-0 lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-between py-12 pr-4">
            {/* Profile mini block */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <Photo name={data.name} photo={data.photo} size="sm" />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-sm text-zinc-100">
                    {data.name}
                  </p>
                  {data.title && (
                    <p className="truncate text-xs text-zinc-500">
                      {data.title}
                    </p>
                  )}
                </div>
              </div>

              <SidebarNav data={data} />
            </div>

            {/* Social links at bottom of sidebar */}
            <SocialLinks data={data} />
          </div>
        </aside>

        {/* ── Scrollable main content ──────────────────────────────────── */}
        <main className="min-w-0 flex-1 py-12">
          {/* Mobile-only hero (sidebar hidden on mobile) */}
          <div className="mb-16 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between lg:hidden">
            <div>
              <Name data={data} />
              <SocialLinks data={data} />
            </div>
            <Photo name={data.name} photo={data.photo} />
          </div>

          {/* Sections */}
          <div className="space-y-24 pb-[70vh]">
            <About about={data.about} />
            <Experience data={data} />
            <Skills data={data} />
            <Education data={data} />
            <Projects projects={data.projects} />
            <ProjectPortfolio projects={data.project_portfolio} />
            <Certifications data={data} />
            <Blogs data={data} />
          </div>
        </main>
      </div>
    </div>
  );
}
