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
      NightScript:"mb-8 font-bold text-3xl text-zinc-100 md:text-4xl"
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
      default: "mt-8 space-y-4",
      readcv: "mt-6 ml-4 flex flex-col gap-9 sm:ml-0",
      retro: "flex flex-col items-start justify-between gap-5",
      monochrome: "flex flex-col gap-4",
      LoraCream: "flex flex-col",
      Vesper: "space-y-4",
      NightScript:"space-y-10"
    },
  },
  defaultVariants: { template: "default" },
});

const itemVariants = cva("", {
  variants: {
    template: {
      default:
        "relative flex w-full gap-x-4 rounded-lg border border-secondary/20 border-dashed p-4",
      readcv: "grid-cols-7 grid-rows-[auto_1fr] sm:grid",
      retro:
        "w-full rounded-lg border border-l-4 bg-card px-5 py-5 text-card-foreground shadow-sm",
      monochrome:
        "grid-cols-[auto_1fr] gap-x-4 border-secondary/20 border-b py-1 pl-1 last:border-b-0 md:grid md:px-4",
      LoraCream:
        "flex flex-col gap-4 border-[#DDD9D0] border-b py-6 first:pt-0 last:border-b-0",
      Vesper:
        "flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 transition-colors duration-200 hover:border-zinc-600",
      NightScript:"rounded-xl border border-zinc-800 bg-zinc-900/60 p-5"
    },
  },
  defaultVariants: { template: "default" },
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
      Vesper: "flex-shrink-0 rounded-lg border border-zinc-700",
    },
  },
  defaultVariants: { template: "default" },
});

const linkContainerVariants = cva("", {
  variants: {
    template: {
      default: "line-clamp-2 font-semibold text-xl",
      readcv: "",
      retro: "line-clamp-2 font-mono font-semibold text-xl",
      monochrome: "text-lg",
      LoraCream: "font-semibold text-[#1C1C1A] text-sm",
      Vesper: "font-semibold text-base text-zinc-100",
      NightScript:"mb-4 font-semibold text-base text-zinc-100"
    },
  },
  defaultVariants: { template: "default" },
});

const linkVariants = cva("", {
  variants: {
    template: {
      default: "gap-1",
      readcv: "text-readcv-primary",
      retro: "gap-1 text-black",
      monochrome: "",
      LoraCream: "transition-colors duration-150 hover:text-[#C9A84C]",
      Vesper:
        "underline-offset-4 transition-colors duration-150 hover:text-zinc-300 hover:underline",
      NightScript:"underline-offset-4 transition-colors duration-150 hover:text-zinc-300 hover:underline"
    },
  },
  defaultVariants: { template: "default" },
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
      Vesper: "font-medium text-xs text-zinc-500",
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
      retro: "mt-2 font-mono",
      monochrome:
        "prose-sm overflow-auto prose-headings:text-monochrome-secondary prose-strong:text-monochrome-secondary text-monochrome-secondary marker:text-monochrome-secondary",
      LoraCream:
        "prose-sm prose mt-1 overflow-auto break-words prose-headings:text-[#9E9A93] prose-strong:text-[#1C1C1A] text-[#1C1C1A]/75 marker:text-[#9E9A93]",
      Vesper:
        "prose-sm prose mt-2 overflow-auto break-words prose-headings:text-zinc-400 prose-strong:text-zinc-200 text-sm text-zinc-400 marker:text-zinc-600",
      NightScript:"prose-sm prose break-words prose-headings:text-zinc-400 prose-strong:text-zinc-200 text-sm text-zinc-400 marker:text-zinc-600"
    },
  },
  defaultVariants: { template: "default" },
});

const Product = ({ products_ih, template = "default", config }) => {
  if (isEmpty(products_ih)) {
    return null;
  }

  const mergedConfig = { exclude: ["headings", "code"], ...(config || {}) };

  return (
    <section className={containerVariants({ template })} id="indie-products">
      <h2 className={headingVariants({ template })}>Indie Products</h2>
      <p className={subheadingVariants({ template })}>
        Built in public, shipped with purpose!
      </p>
      <div className={innerContainerVariants({ template })}>
        {products_ih?.map((product, index) => (
          <div
            className={itemVariants({ template })}
            id={`indie-product-${index + 1}`}
            key={product.name || index}
          >
            <div className="flex flex-row items-center gap-4">
              {product.logo ? (
                <Image
                  alt="Product Logo"
                  className={logoVariants({ template })}
                  height={50}
                  src={product.logo}
                  unoptimized
                  width={50}
                />
              ) : (
                <div className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 font-bold text-lg text-zinc-400">
                  {product.name?.charAt(0) || "P"}
                </div>
              )}
              <div className="flex flex-col gap-0.5">
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
