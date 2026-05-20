import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";

export default function Blogs({ blogs }) {
  if (isEmpty(blogs)) {
    return null;
  }

  return (
    <section
      className="mt-5 w-full border-monochrome-tertiary border-t-4 pt-5"
      id="featured-blogs"
    >
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">
        Featured Blogs
      </h2>
      <ul className="flex flex-col gap-2 pl-1 md:pl-4">
        {blogs.map((blog, index) => (
          <li id={`featured-blog-${index + 1}`} key={index}>
            <CustomLink
              className="overflow-auto break-words text-sm md:text-lg"
              iconSize={15}
              label={blog.blog_title}
              rel="noopener noreferrer nofollow"
              target="_blank"
              url={blog.blog_url}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
