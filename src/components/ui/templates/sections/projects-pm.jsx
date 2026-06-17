import { cva } from "class-variance-authority";
import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import ProjectImageModal from "@/components/ui/custom/project-image-modal";
import ImagesCarousel from "@/components/ui/templates/components/image-carousel";
import { cn } from "@/utils";

const containerVariants = cva("", {
  variants: {
    template: {
      default: "space-y-4",
      readcv: "my-[3.75rem] text-sm",
      retro: "mt-8 space-y-4",
      monochrome: "mt-5 w-full border-monochrome-tertiary border-t-4 pt-5",
      LoraCream: "mt-16 w-full border-[#DDD9D0] border-t-2 pt-8",
      Vesper: "w-full",
    },
  },
  defaultVariants: { template: "default" },
});

const headingVariants = cva("", {
  variants: {
    template: {
      default: "font-bold text-3xl",
      readcv: "mb-[0.7rem] text-readcv-primary",
      retro: "pt-4 font-bold font-mono text-3xl",
      monochrome: "mb-2 font-bold text-2xl md:mb-4 md:text-3xl",
      LoraCream:
        "mb-8 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest",
      Vesper: "mb-8 font-bold text-3xl text-zinc-100 md:text-4xl",
    },
  },
  defaultVariants: { template: "default" },
});

const subheadingVariants = cva("hidden", {
  variants: {
    template: {
      Vesper: "hidden",
    },
  },
  defaultVariants: { template: "default" },
});

const innerContainerVariants = cva("", {
  variants: {
    template: {
      default: "mt-8 rounded-xl border border-secondary/20 border-dashed",
      readcv: "mt-6 ml-4 flex flex-col gap-9 sm:ml-0",
      retro: "flex flex-col items-start justify-between gap-3",
      monochrome: "flex flex-col gap-2",
      LoraCream: "flex flex-col",
      Vesper: "space-y-4",
    },
  },
  defaultVariants: { template: "default" },
});

const itemVariants = cva("", {
  variants: {
    template: {
      default:
        "relative border-secondary/20 border-b border-dashed p-4 last:border-b-0",
      readcv: "",
      retro: "rounded-lg border bg-card text-card-foreground shadow-sm",
      monochrome: "flex flex-col border-secondary/20 border-b last:border-b-0",
      LoraCream:
        "flex flex-col border-[#DDD9D0] border-b py-6 first:pt-0 last:border-b-0",
      Vesper:
        "rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors duration-200 hover:border-zinc-600",
    },
  },
  defaultVariants: { template: "default" },
});

const linkContainerVariants = cva("", {
  variants: {
    template: {
      default: "line-clamp-2 font-semibold text-xl",
      readcv: "",
      retro: "line-clamp-2 pt-3 pl-6 font-mono font-semibold text-xl",
      monochrome: "text-lg",
      LoraCream: "font-semibold text-[#1C1C1A] text-sm",
      Vesper: "mb-3 font-semibold text-base text-zinc-100",
    },
  },
  defaultVariants: { template: "default" },
});

const linkVariants = cva("", {
  variants: {
    template: {
      default: "inline-flex items-center gap-1 hover:underline",
      readcv: "text-readcv-primary",
      retro: "inline-flex items-center gap-1 text-black hover:underline",
      monochrome: "",
      LoraCream: "transition-colors duration-150 hover:text-[#C9A84C]",
      Vesper:
        "underline-offset-4 transition-colors duration-150 hover:text-zinc-300 hover:underline",
    },
  },
  defaultVariants: { template: "default" },
});

const markdownVariants = cva("max-w-none", {
  variants: {
    template: {
      default: "",
      readcv:
        "prose-sm prose overflow-auto break-words prose-headings:text-readcv-secondary prose-strong:text-readcv-secondary text-readcv-secondary marker:text-readcv-secondary",
      retro: "p-6 pt-0 font-mono",
      monochrome:
        "prose-sm overflow-auto prose-headings:text-monochrome-secondary prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary",
      LoraCream:
        "prose-sm prose mt-2 overflow-auto break-words prose-headings:text-[#9E9A93] prose-strong:text-[#1C1C1A] text-[#1C1C1A]/75 marker:text-[#9E9A93]",
      Vesper:
        "prose-sm prose mt-2 overflow-auto break-words prose-headings:text-zinc-400 prose-strong:text-zinc-200 text-sm text-zinc-400 marker:text-zinc-600",
    },
  },
  defaultVariants: { template: "default" },
});

const ProjectsPM = ({ projects_pm, template = "default", config }) => {
  if (isEmpty(projects_pm)) {
    return null;
  }

  const mergedConfig = { exclude: ["headings", "code"], ...(config || {}) };

  return (
    <section className={containerVariants({ template })} id="case-studies">
      <h2 className={headingVariants({ template })}>Case Studies</h2>
      <p className={subheadingVariants({ template })}>
        Strategy meets execution — the full story!
      </p>
      <div className={innerContainerVariants({ template })}>
        {projects_pm?.map((project, index) => {
          const hasImages = project?.images?.length > 0;
          let borderClass = "";
          if (template === "retro") {
            borderClass =
              index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500";
          }
          return (
            <div
              className={cn(itemVariants({ template }), borderClass)}
              id={`project-${index + 1}`}
              key={index}
            >
              <h3 className={linkContainerVariants({ template })}>
                {project.project_url ? (
                  <CustomLink
                    className={linkVariants({ template })}
                    iconSize={16}
                    label={project.title}
                    url={project.project_url}
                  />
                ) : (
                  <span>{project.title}</span>
                )}
              </h3>
              {hasImages && (
                <>
                  <div className="mb-3 hidden flex-wrap gap-3 md:flex">
                    {project.images.map((image) => (
                      <ProjectImageModal
                        alt="Project Image"
                        className="h-[100px] w-[180px] rounded-lg border border-zinc-700 object-cover transition-all duration-300 ease-in-out hover:scale-105"
                        key={image}
                        src={image}
                      />
                    ))}
                  </div>
                  <div className="mb-3 md:hidden">
                    <ImagesCarousel images={project.images} />
                  </div>
                </>
              )}
              <MarkdownRenderer
                className={markdownVariants({ template })}
                config={mergedConfig}
              >
                {project.description}
              </MarkdownRenderer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsPM;
