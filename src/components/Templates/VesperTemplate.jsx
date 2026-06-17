import FeaturedSocialPostsSection from "@/components/ui/templates/sections/fps";
import Freelancers from "@/components/ui/templates/sections/freelancers-sidehustlers";
import Product from "@/components/ui/templates/sections/indie-product";
import OSSSection from "@/components/ui/templates/sections/oss_section";
import ProjectsPM from "@/components/ui/templates/sections/projects-pm";
import {
  About,
  Blogs,
  Certifications,
  Education,
  Experience,
  Name,
  Photo,
  ProjectPortfolio,
  Projects,
  SidebarNav,
  Skills,
  SocialLinks,
} from "../spaces-templates/VesperTemplate";

export default function VesperTemplate({ data }) {
  const {
    name = "",
    about = "",
    skills = [],
    social_links = {},
    experience = [],
    projects = [],
    projects_pm = [],
    project_portfolio = [],
    photo = "",
    education = [],
    certifications = [],
    blogs = [],
    products_ih = [],
    oss = [],
    freelancers_ih = [],
    featured_social_posts = [],
  } = data;

  return (
    /* bg-[#0a0a0a] + text-zinc-100 set via TEMPLATES_CONFIG className */
    <div className="relative mx-auto min-h-screen max-w-6xl px-4">
      <div className="flex gap-8">
        {/* ── Fixed left sidebar ──────────────────────────────────────── */}
        <aside className="hidden w-56 flex-shrink-0 lg:block">
          <div className="sticky top-0 flex h-screen flex-col justify-between py-12 pr-4">
            {/* Profile mini block */}
            <div>
              <div className="mb-8 flex items-center gap-3">
                <Photo name={name} photo={photo} size="sm" />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-sm text-zinc-100">
                    {name}
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

            {/* Social links pinned to bottom */}
            <SocialLinks
              email={data.email}
              social_links={social_links}
              website={data.website}
            />
          </div>
        </aside>

        {/* ── Scrollable main content ──────────────────────────────────── */}
        <main className="min-w-0 flex-1 py-12">
          {/* Mobile-only hero */}
          <div className="mb-16 flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between lg:hidden">
            <div>
              <Name name={name} />
              <SocialLinks
                email={data.email}
                social_links={social_links}
                website={data.website}
              />
            </div>
            <Photo name={name} photo={photo} />
          </div>

          {/* Sections */}
          <div className="space-y-24">
            <About about={about} />

            {experience.length > 0 && <Experience experience={experience} />}

            <Skills skills={skills} />

            {education.length > 0 && <Education education={education} />}

            {projects.length > 0 && <Projects projects={projects} />}

            <Product products_ih={products_ih} template="Vesper" />

            <ProjectsPM projects_pm={projects_pm} template="Vesper" />

            <Freelancers freelancers_ih={freelancers_ih} template="Vesper" />

            <ProjectPortfolio projects={project_portfolio} />

            <OSSSection oss={oss} template="Vesper" />

            <FeaturedSocialPostsSection
              featured_social_posts={featured_social_posts}
              template="Vesper"
            />

            {certifications.length > 0 && (
              <Certifications certifications={certifications} />
            )}

            {blogs.length > 0 && <Blogs blogs={blogs} />}
          </div>
        </main>
      </div>
    </div>
  );
}
