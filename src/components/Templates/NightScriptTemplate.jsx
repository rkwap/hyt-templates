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
  Headline,
  Name,
  Photo,
  ProjectPortfolio,
  Projects,
  Skills,
  SocialLinks,
} from "../spaces-templates/NightScriptTemplate";

export default function NightScriptTemplate({ data }) {
  const {
    headline = "",
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
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16">
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="mb-24 flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <Name name={name} />
          <Headline headline={headline} />
          <SocialLinks social_links={social_links} />
        </div>
        <Photo name={name} photo={photo} />
      </section>

      {/* ── Main sections — generous spacing like aadi.is-a.dev ───────── */}
      <div className="space-y-24">
        <About about={about} />

        {experience.length > 0 && <Experience experience={experience} />}

        <Skills skills={skills} />

        {education.length > 0 && <Education education={education} />}

        {projects.length > 0 && <Projects projects={projects} />}

        <Product products_ih={products_ih} template="NightScript" />

        <ProjectsPM projects_pm={projects_pm} template="NightScript" />

        <Freelancers freelancers_ih={freelancers_ih} template="NightScript" />

        <ProjectPortfolio projects={project_portfolio} />

        <OSSSection oss={oss} template="NightScript" />

        <FeaturedSocialPostsSection
          featured_social_posts={featured_social_posts}
          template="NightScript"
        />

        {certifications.length > 0 && (
          <Certifications certifications={certifications} />
        )}

        {blogs.length > 0 && <Blogs blogs={blogs} />}
      </div>
    </main>
  );
}
