import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";
import { ensureArray, hasContent } from "./utils";

const Blogs = ({ blogs }) => {
  const safeBlogs = ensureArray(blogs).filter(
    (blog) => hasContent(blog?.blog_title) || hasContent(blog?.blog_url)
  );

  if (isEmpty(safeBlogs)) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="featured-blogs">
      <h2 className="font-bold text-3xl">Featured Blogs</h2>
      <ul className="space-y-4 lg:space-y-2">
        {safeBlogs.map((blog, index) => (
          <BlogItem
            blog={blog}
            id={`featured-blog-${index + 1}`}
            key={`blog-${index + 1}`}
          />
        ))}
      </ul>
    </section>
  );
};

function BlogItem({ blog, id }) {
  return (
    <li id={id}>
      <span className="flex items-center justify-between">
        {blog?.blog_url ? (
          <CustomLink
            className="font-medium text-md text-zinc-700 md:text-lg"
            iconSize={15}
            label={blog?.blog_title || blog.blog_url}
            rel="noopener noreferrer nofollow"
            target="_blank"
            url={blog.blog_url}
          />
        ) : (
          <span className="font-medium text-md text-zinc-700 md:text-lg">
            {blog?.blog_title}
          </span>
        )}
      </span>
    </li>
  );
}

export default Blogs;
