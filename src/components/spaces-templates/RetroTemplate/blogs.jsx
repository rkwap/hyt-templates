import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";

const Blogs = ({ blogs }) => {
  if (isEmpty(blogs)) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="featured-blogs">
      <h2 className="font-bold font-mono text-3xl">Featured Blogs</h2>
      <ul className="space-y-4 lg:space-y-2">
        {blogs?.map((blog, index) => (
          <li id={`featured-blog-${index + 1}`} key={`blog-${index + 1}`}>
            <CustomLink
              className="flex-1 font-mono font-semibold text-md text-zinc-700 md:text-lg"
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
};

export default Blogs;
