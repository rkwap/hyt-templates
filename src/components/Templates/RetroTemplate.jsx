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
} from "../spaces-templates/RetroTemplate";

export default function RetroTemplate({ data }) {
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
    <div className="container mx-auto min-h-screen max-w-4xl px-4 py-8 dark:bg-transparent">
      <Card className="top-0 z-10 mb-8 bg-black text-white lg:sticky">
        <CardContent className="pt-6">
          <div className="flex items-start max-sm:flex-col sm:space-x-6">
            <Photo name={name} photo={photo} />
            <div className="flex-1 max-sm:mt-2">
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
        </CardContent>
      </Card>
      <About about={about} />
      {experience.length > 0 && <Experience experience={experience} />}
      {projects.length > 0 && <Projects projects={projects} />}
      <Product products_ih={products_ih} template="retro" />
      <ProjectsPM projects_pm={projects_pm} template="retro" />
      <Freelancers freelancers_ih={freelancers_ih} template="retro" />
      <ProjectPortfolio projects={project_portfolio} />
      {education.length > 0 && <Education education={education} />}
      <OSSSection oss={oss} template="retro" />
      <FeaturedSocialPostsSection
        featured_social_posts={featured_social_posts}
        template="retro"
      />
      {certifications.length > 0 && (
        <Certifications certifications={certifications} />
      )}
      {blogs.length > 0 && <Blogs blogs={blogs} />}
    </div>
  );
}
