import { cva } from "class-variance-authority";
import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";
import { cn } from "@/utils";

const containerVariants = cva("", {
  variants: {
    template: {
      default: "space-y-4",
      readcv: "my-[3.75rem] text-sm",
      retro: "mt-8 space-y-4",
      monochrome: "mt-5 w-full border-monochrome-tertiary border-t-4 pt-5",
    },
  },
  defaultVariants: {
    template: "default",
  },
});
const innerContainerVariants = cva("", {
  variants: {
    template: {
      default: "mt-8 rounded-xl border border-secondary/20 border-dashed",
      readcv: "mt-6 ml-4 flex flex-col gap-9 sm:ml-0",
      retro: "flex flex-col items-start justify-between gap-3",
      monochrome: "flex flex-col gap-2",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const headingVariants = cva("", {
  variants: {
    template: {
      default: "font-bold text-3xl",
      readcv: "mb-[0.7rem] text-readcv-primary",
      retro: "pt-4 font-bold font-mono text-3xl",
      monochrome: "mb-2 font-bold text-2xl md:mb-4 md:text-3xl",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const itemMainContainerVariants = cva("", {
  variants: {
    template: {
      default:
        "relative border-secondary/20 border-b border-dashed p-4 last:border-b-0",
      readcv: "",
      retro: "rounded-lg border bg-card text-card-foreground shadow-sm",
      monochrome: "flex flex-col border-secondary/20 border-b last:border-b-0",
    },
  },
  defaultVariants: {
    template: "default",
  },
});
const itemInnerContainerVariants = cva("", {
  variants: {
    template: {
      default: "line-clamp-2 text-xl",
      readcv: "flex flex-col gap-1",
      retro: "",
      monochrome: "py-1 pl-1 md:px-4",
    },
  },
  defaultVariants: {
    template: "default",
  },
});
const linkContainerVariants = cva("", {
  variants: {
    template: {
      default: "line-clamp-2 font-semibold text-xl",
      readcv: "",
      retro: "line-clamp-2 pt-3 pl-6 font-mono font-semibold text-xl",
      monochrome: "text-lg",
    },
  },
  defaultVariants: {
    template: "default",
  },
});
const linkVariants = cva("", {
  variants: {
    template: {
      default: "inline-flex items-center gap-1 hover:underline",
      readcv: "text-readcv-primary",
      retro: "inline-flex items-center gap-1 text-black hover:underline",
      monochrome: "",
    },
  },
  defaultVariants: {
    template: "default",
  },
});
const titleVariants = cva("", {
  variants: {
    template: {
      default: "",
      readcv: "overflow-auto text-readcv-primary",
      retro: "",
      monochrome: "overflow-auto",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const markdownVariants = cva(
  "prose prose-secondary prose-li:mt-1 prose-p:mt-2 prose-ul:mt-2 prose-li:mb-1 prose-p:mb-4 prose-ul:mb-4 max-w-none text-primary/90 prose-p:leading-relaxed marker:text-secondary/60",
  {
    variants: {
      template: {
        default: "",
        readcv:
          "prose-sm prose overflow-auto break-words prose-headings:text-readcv-secondary prose-strong:text-readcv-secondary text-readcv-secondary marker:text-readcv-secondary",
        retro: "p-6 pt-0 font-mono",
        monochrome:
          "prose-sm overflow-auto prose-headings:text-monochrome-secondary prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary",
      },
    },
    defaultVariants: {
      template: "default",
    },
  }
);

const Freelancers = ({ freelancers_ih, template = "default", config }) => {
  if (isEmpty(freelancers_ih)) {
    return null;
  }
  const mergedConfig = {
    exclude: ["headings", "code"],
    ...(config || {}),
  };

  return (
    <div className={containerVariants({ template })} id="freelance-projects">
      <h2 className={headingVariants({ template })}>Freelance projects</h2>
      <div className={innerContainerVariants({ template })}>
        {freelancers_ih?.map((freelancer, index) => {
          let borderClass = "";
          if (template === "retro") {
            borderClass =
              index % 2 === 0 ? "border-l-purple-500" : "border-l-blue-500";
          }

          return (
            <div
              className={cn(
                itemMainContainerVariants({ template }),
                borderClass
              )}
              id={`freelance-project-${index + 1}`}
              key={index}
            >
              <div className={itemInnerContainerVariants({ template })}>
                <h3 className={linkContainerVariants({ template })}>
                  {freelancer.link ? (
                    <CustomLink
                      className={linkVariants({ template })}
                      iconSize={16}
                      label={freelancer.name}
                      url={freelancer.link}
                    />
                  ) : (
                    <div className={titleVariants({ template })}>
                      {freelancer.name}
                    </div>
                  )}
                </h3>
                <MarkdownRenderer
                  className={markdownVariants({ template })}
                  config={mergedConfig}
                >
                  {freelancer.description}
                </MarkdownRenderer>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Freelancers;
