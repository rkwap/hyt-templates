import { cva } from "class-variance-authority";
import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";

const containerVariants = cva("", {
  variants: {
    template: {
      default: "mt-10 space-y-4",
      readcv: "my-[3.75rem] text-sm",
      retro: "mt-10 space-y-4",
      monochrome: "mt-5 w-full border-monochrome-tertiary border-t-4 pt-5",
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
      retro: "font-bold font-mono text-3xl",
      monochrome: "mb-2 font-bold text-2xl md:mb-4 md:text-3xl",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const listVariants = cva("", {
  variants: {
    template: {
      default: "space-y-4 lg:space-y-2",
      readcv: "mt-6 ml-4 flex flex-col gap-6 sm:ml-0",
      retro: "space-y-4 lg:space-y-2",
      monochrome: "flex flex-col gap-2 pl-1 md:pl-4",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const linkVariants = cva("", {
  variants: {
    template: {
      default: "font-medium text-md text-zinc-700 md:text-lg",
      readcv: "overflow-auto break-words text-readcv-secondary text-sm",
      retro: "flex-1 font-mono font-semibold text-md text-zinc-700 md:text-lg",
      monochrome: "overflow-auto break-words text-sm md:text-lg",
    },
  },
  defaultVariants: {
    template: "default",
  },
});

const FeaturedSocialPostsSection = ({
  featured_social_posts = [],
  template = "default",
}) => {
  if (isEmpty(featured_social_posts)) {
    return null;
  }

  return (
    <section
      className={containerVariants({ template })}
      id="featured-social-posts"
    >
      <h2 className={headingVariants({ template })}>Featured Social Posts</h2>
      <ul className={listVariants({ template })}>
        {featured_social_posts.map((post, index) => (
          <li id={`featured-social-post-${index + 1}`} key={index}>
            <CustomLink
              className={linkVariants({ template })}
              iconSize={15}
              label={post.post_title}
              rel="noopener noreferrer nofollow"
              target="_blank"
              url={post.post_url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedSocialPostsSection;
