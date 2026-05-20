import FeaturedSocialPostsSection from "@/components/ui/templates/sections/fps";
import Freelancers from "@/components/ui/templates/sections/freelancers-sidehustlers";
import Product from "@/components/ui/templates/sections/indie-product";
import OSSSection from "@/components/ui/templates/sections/oss_section";
import ProjectsPM from "@/components/ui/templates/sections/projects-pm";
import { cn } from "@/utils";
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
} from "../spaces-templates/DefaultTemplate";

export default function DefaultTemplate({ data, isSticky = true }) {
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
    <div className="mx-auto my-8 flex w-full max-w-4xl flex-col space-y-8 px-6 text-primary md:my-12">
      <div
        className={cn(
          "top-0 z-10 flex flex-col items-center gap-6 bg-background py-4 md:flex-row md:gap-8",
          isSticky && "lg:sticky"
        )}
      >
        <Photo name={name} photo={photo} />
        <div className="flex flex-col gap-2 overflow-hidden">
          <Name name={name} />
          <Headline headline={headline} />
          <SocialLinks social_links={social_links} />
          <Skills skills={skills} />
        </div>
      </div>

      <About about={about} />
      {experience.length > 0 && <Experience experience={experience} />}
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
