import FeaturedSocialPostsSection from "@/components/ui/templates/sections/fps";
import Freelancers from "@/components/ui/templates/sections/freelancers-sidehustlers";
import Product from "@/components/ui/templates/sections/indie-product";
import OSSSection from "@/components/ui/templates/sections/oss_section";
import ProjectsPM from "@/components/ui/templates/sections/projects-pm";
import {
  About,
  Blogs,
  Certifications,
  Contacts,
  Education,
  Experience,
  Headline,
  Name,
  Photo,
  ProjectPortfolio,
  Projects,
  Skills,
} from "../spaces-templates/ReadCVTemplate";

export default function ReadCVTemplate({ data }) {
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
    <div className="container min-h-screen max-w-[604px] pt-10 pb-6 md:pt-16 md:pb-4">
      <div>
        <div className="flex items-center gap-4">
          <Photo name={name} photo={photo} />
          <div className="flex-1 max-sm:mt-2">
            <Name name={name} />
            <Headline headline={headline} />
          </div>
        </div>
      </div>
      <About about={about} />
      <Skills skills={skills} />
      {experience.length > 0 && <Experience experience={experience} />}
      {projects.length > 0 && <Projects projects={projects} />}
      <Product products_ih={products_ih} template="readcv" />
      <ProjectsPM projects_pm={projects_pm} template="readcv" />
      <Freelancers freelancers_ih={freelancers_ih} template="readcv" />
      <ProjectPortfolio projects={project_portfolio} />
      {education.length > 0 && <Education education={education} />}
      <OSSSection oss={oss} template="readcv" />
      <FeaturedSocialPostsSection
        featured_social_posts={featured_social_posts}
        template="readcv"
      />
      {certifications.length > 0 && (
        <Certifications certifications={certifications} />
      )}
      {blogs.length > 0 && <Blogs blogs={blogs} />}
      <Contacts social_links={social_links} />
    </div>
  );
}
