import { Terminal } from "lucide-react";
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
} from "../spaces-templates/TerminalSpaceTemplate";

export default function TerminalSpace({ data }) {
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
    /*
     * The `[--header-h:80px]` Tailwind arbitrary property sets a CSS custom
     * property that the Projects component reads via `STACK_TOP` to know where
     * the sticky header ends, so stacked cards never slide under it.
     * If you change the header height, update this value to match.
     */
    <div className="container mx-auto min-h-screen max-w-4xl bg-zinc-950 px-4 py-8 [--header-h:80px]">
      {/* Sticky Header Card */}
      <div className="top-0 z-10 mb-8 rounded-lg border border-zinc-800 bg-black text-white shadow-black/50 shadow-lg lg:sticky">
        <div className="p-6">
          <div className="flex items-start max-sm:flex-col sm:space-x-6">
            <Photo name={name} photo={photo} />
            <div className="flex-1 max-sm:mt-4">
              <div className="mb-3 flex items-center space-x-3 md:mb-1">
                <Terminal className="h-4 w-4 text-green-400" />
                <p className="font-mono text-green-400 text-sm">
                  ~/developer/profile
                </p>
              </div>
              <Name name={name} />
              <Headline headline={headline} />
              <SocialLinks social_links={social_links} />
              <Skills skills={skills} />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <About about={about} />
      {experience.length > 0 && <Experience experience={experience} />}

      {/*
       * Projects now uses sticky-stack scroll behaviour:
       * – Cards reveal their details (photo + description) as they enter the viewport.
       * – Each card sticks progressively lower so they fan out like a deck while
       *   you scroll down, then stack neatly at the top when you scroll past.
       * – Hovering a project photo zooms it up with a pop animation.
       */}
      {projects.length > 0 && <Projects projects={projects} />}

      <Product products_ih={products_ih} />
      <ProjectsPM projects_pm={projects_pm} />
      <Freelancers freelancers_ih={freelancers_ih} />
      <ProjectPortfolio projects={project_portfolio} />
      {education.length > 0 && <Education education={education} />}
      <OSSSection oss={oss} />
      <FeaturedSocialPostsSection
        featured_social_posts={featured_social_posts}
      />
      {certifications.length > 0 && (
        <Certifications certifications={certifications} />
      )}
      {blogs.length > 0 && <Blogs blogs={blogs} />}
    </div>
  );
}
