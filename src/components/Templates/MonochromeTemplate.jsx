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
  Socials,
} from "../spaces-templates/MonochromeTemplate";

export default function MonochromeTemplate({ data }) {
  const {
    headline = "",
    name = "",
    about = "",
    skills = [],
    experience = [],
    projects = [],
    projects_pm = [],
    project_portfolio = [],
    certifications = [],
    photo = "",
    education = [],
    blogs = [],
    social_links = {},
    products_ih = [],
    oss = [],
    freelancers_ih = [],
    featured_social_posts = [],
  } = data;

  return (
    <div className="min-h-screen w-full text-monochrome-primary">
      <div className="h-16 w-full bg-monochrome-border md:h-24" />
      <div className="flex flex-col justify-center px-6 pb-16 md:px-12 md:pb-24">
        <div className="mb-5 flex w-full flex-col items-center gap-4 border-monochrome-tertiary border-b pb-5 md:mb-10">
          <div className="relative mt-[-28px] ml-[-50%] text-5xl md:mt-[-42px] md:text-7xl">
            👋
          </div>
          <div className="flex flex-col items-center gap-1">
            <Name name={name} />
            <Headline headline={headline} />
            <Socials social_links={social_links} />
          </div>
        </div>

        <div className="flex flex-col gap-1 lg:flex-row lg:gap-16">
          <About about={about} />
          <Photo name={name} photo={photo} />
          <Skills skills={skills} />
        </div>

        <Experience experience={experience} />
        <Projects projects={projects} />
        <Product products_ih={products_ih} template="monochrome" />
        <ProjectsPM projects_pm={projects_pm} template="monochrome" />
        <Freelancers freelancers_ih={freelancers_ih} template="monochrome" />
        <ProjectPortfolio projects={project_portfolio} />
        <Education education={education} />
        <OSSSection oss={oss} template="monochrome" />
        <FeaturedSocialPostsSection
          featured_social_posts={featured_social_posts}
          template="monochrome"
        />
        <Certifications certifications={certifications} />
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
}
