import { cva } from "class-variance-authority";
import { isEmpty } from "lodash";
import Image from "next/image";
import MarkdownRenderer from "@/components/markdown-renderer";
import CustomLink from "@/components/ui/custom/link";

const containerVariants = cva("", {
  variants: {
    template: {
      default: "space-y-4",
      readcv: "my-[3.75rem] text-sm",
      retro: "mt-8 w-full space-y-4",
      monochrome: "mt-5 w-full border-monochrome-tertiary border-t-4 pt-5",
      LoraCream: "mt-16 w-full border-[#DDD9D0] border-t-2 pt-8",
    },
  },
  defaultVariants: {
    template: "default",
  },
});
const innerContainerVariants = cva("", {
  variants: {
    template: {
      default: "mt-8 space-y-4",
      readcv: "mt-6 ml-4 flex flex-col gap-9 sm:ml-0",
      retro: "flex flex-col items-start justify-between gap-5",
      monochrome: "flex flex-col gap-4",
      LoraCream: "flex flex-col",
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
      LoraCream:
        "mb-8 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest",
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
        "relative flex w-full grid-cols-12 grid-rows-[auto_1fr] flex-wrap gap-x-4 rounded-lg border border-secondary/20 border-dashed p-4 sm:grid",
      readcv: "grid-cols-7 grid-rows-[auto_1fr] sm:grid",
      retro:
        "w-full grid-cols-12 grid-rows-[auto_1fr] rounded-lg border border-l-4 bg-card bg-secondary/5 px-5 py-5 text-card-foreground shadow-sm transition-colors odd:border-l-blue-500 even:border-l-purple-500 sm:grid",
      monochrome:
        "grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-x-4 border-secondary/20 border-b py-1 pl-1 last:border-b-0 md:grid md:px-4",
      LoraCream:
        "flex flex-row items-start gap-4 border-[#DDD9D0] border-b py-6 first:pt-0 last:border-b-0",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const itemInnerContainerVariants = cva("", {
  variants: {
    template: {
      default: "flex flex-col sm:col-span-9 sm:col-start-2 sm:gap-1",
      readcv: "col-span-5 col-start-3 row-start-1 flex flex-col gap-1",
      retro: "col-span-12 col-start-2 flex flex-col gap-1",
      monochrome: "col-start-2 flex flex-col",
      LoraCream: "flex flex-1 flex-col gap-1",
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
      retro: "line-clamp-2 font-mono font-semibold text-xl",
      monochrome: "text-lg",
      LoraCream: "font-semibold text-[#1C1C1A] text-sm",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const linkVariants = cva("", {
  variants: {
    template: {
      default: "gap-1",
      readcv: "text-readcv-primary",
      retro: "gap-1 text-black",
      monochrome: "",
      LoraCream: "transition-colors duration-150 hover:text-[#C9A84C]",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const markdownVariants = cva("col-span-12", {
  variants: {
    template: {
      default: "col-span-12 col-start-1 row-start-2 w-full",
      readcv:
        "prose-sm prose col-span-5 col-start-3 row-start-2 overflow-auto prose-headings:text-readcv-secondary prose-strong:text-readcv-secondary text-readcv-secondary marker:text-readcv-secondary",
      retro: "col-span-12 col-start-1 row-start-2 mt-2 font-mono",
      monochrome:
        "prose-sm col-span-2 col-start-1 row-start-2 overflow-auto prose-headings:text-monochrome-secondary prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary",
      LoraCream:
        "prose-sm prose mt-1 overflow-auto break-words prose-headings:text-[#9E9A93] prose-strong:text-[#1C1C1A] text-[#1C1C1A]/75 marker:text-[#9E9A93]",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const logoVariants = cva("rounded-lg", {
  variants: {
    template: {
      default: "self-start",
      readcv:
        "col-span-3 col-start-1 row-span-2 row-start-1 mb-2 h-16 w-16 sm:mb-0 sm:h-24 sm:w-24",
      retro: "self-center",
      monochrome: "mb-2 sm:mb-0 sm:h-20 sm:w-20",
      LoraCream: "flex-shrink-0 rounded-lg",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const revenueVariants = cva("", {
  variants: {
    template: {
      default: "mb-2 truncate font-medium text-secondary text-sm",
      readcv: "text-readcv-grey",
      monochrome: "text-monochrome-secondary text-sm",
      retro:
        "w-max rounded-full border border-purple-100 bg-purple-50 px-2.5 py-0.5 font-mono font-semibold text-foreground text-xs dark:text-black",
      LoraCream:
        "font-bold text-[#C9A84C] text-[10px] uppercase tracking-widest",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const Product = ({ products_ih, template = "default", config }) => {
  if (isEmpty(products_ih)) {
    return null;
  }
  const mergedConfig = {
    exclude: ["headings", "code"],
    ...(config || {}),
  };

  return (
    <section className={containerVariants({ template })} id="indie-products">
      <h2 className={headingVariants({ template })}>Indie Products</h2>
      <div className={innerContainerVariants({ template })}>
        {products_ih?.map((product, index) => (
          <div
            className={itemMainContainerVariants({ template })}
            id={`indie-product-${index + 1}`}
            key={product.name || index}
          >
            {product.logo ? (
              <Image
                alt="Product-Logo"
                className={logoVariants({ template })}
                height={50}
                src={product.logo}
                unoptimized
                width={50}
              />
            ) : (
              <div className="flex h-[50px] w-[50px] items-center justify-center self-start rounded-lg bg-secondary/20 font-bold text-lg">
                {product.name?.charAt(0) || "P"}
              </div>
            )}
            <div className={itemInnerContainerVariants({ template })}>
              <h3 className={linkContainerVariants({ template })}>
                <CustomLink
                  className={linkVariants({ template })}
                  classNames={{ label: "line-clamp-1" }}
                  iconSize={16}
                  label={product.name}
                  url={product.url}
                />
              </h3>
              {product.revenue > 0 && (
                <span className={revenueVariants({ template })}>
                  MRR: ${product.revenue}
                </span>
              )}
            </div>
            <MarkdownRenderer
              className={markdownVariants({ template })}
              config={mergedConfig}
            >
              {product.description}
            </MarkdownRenderer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
