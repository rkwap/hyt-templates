import { Terminal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
} from "../spaces-templates/LoraCreamTemplate";

export default function LoraCreamTemplate({ data }) {
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
    /* Page root — bg-[#F6F3EE] is set via TEMPLATES_CONFIG className */
    <div className="container mx-auto min-h-screen max-w-4xl px-4 py-8">
      {/* ── Sticky top bar ───────────────────────────────────────────── */}
      <Card className="top-0 z-10 mb-8 bg-[#1C1C1A] text-white shadow-md lg:sticky">
        <CardContent className="pt-6 pb-5">
          <div className="flex items-start max-sm:flex-col sm:space-x-6">
            <div className="flex-1 max-sm:mt-2">
              {/* Terminal breadcrumb */}
              <div className="mb-2 flex items-center space-x-2">
                <Terminal className="h-3.5 w-3.5 text-[#C9A84C]" />
                <p className="font-mono text-[#C9A84C] text-xs tracking-wide">
                  ~/developer/profile
                </p>
              </div>

              <Name name={name} />
              <Headline headline={headline} />
              <SocialLinks social_links={social_links} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── About + Photo ─────────────────────────────────────────────── */}
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          <About about={about} />
        </div>
        <Photo name={name} photo={photo} />
      </div>

      {/* ── Experience + sidebar ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="md:col-span-2">
          {experience.length > 0 && <Experience experience={experience} />}
        </div>

        <aside className="space-y-12">
          {/* Skills */}
          <section>
            <div className="flex flex-wrap gap-1">
              <Skills skills={skills} />
            </div>
          </section>

          {/* Education */}
          <section>
            {education.length > 0 && <Education education={education} />}
          </section>
        </aside>
      </div>

      {/* ── Projects & sections ───────────────────────────────────────── */}
      {projects.length > 0 && (
        <div className="mt-16">
          <Projects projects={projects} />
        </div>
      )}

      <div className="mt-8">
        <Product products_ih={products_ih} template="LoraCream" />
      </div>

      <div className="mt-8">
        <ProjectsPM projects_pm={projects_pm} template="LoraCream" />
      </div>

      <div className="mt-8">
        <Freelancers freelancers_ih={freelancers_ih} template="LoraCream" />
      </div>

      <div className="mt-8">
        <ProjectPortfolio projects={project_portfolio} />
      </div>

      <div className="mt-8">
        <OSSSection oss={oss} template="LoraCream" />
      </div>

      <div className="mt-8">
        <FeaturedSocialPostsSection
          featured_social_posts={featured_social_posts}
          template="LoraCream"
        />
      </div>

      {certifications.length > 0 && (
        <div className="mt-8">
          <Certifications certifications={certifications} />
        </div>
      )}

      {blogs.length > 0 && (
        <div className="mt-8">
          <Blogs blogs={blogs} />
        </div>
      )}
    </div>
  );
}
