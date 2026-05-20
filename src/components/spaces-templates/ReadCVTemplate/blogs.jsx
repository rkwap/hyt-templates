import { isEmpty } from "lodash";
import CustomLink from "@/components/ui/custom/link";

const Blogs = ({ blogs }) => {
  if (isEmpty(blogs)) {
    return null;
  }

  return (
    <section className="my-[3.75rem] text-sm" id="featured-blogs">
      <h2 className="mb-[0.7rem] text-readcv-primary">Featured Blogs</h2>
      <ul className="mt-6 ml-4 flex flex-col gap-6 sm:ml-0">
        {blogs?.map((blog, index) => (
          <li id={`featured-blog-${index + 1}`} key={`blog-${index + 1}`}>
            <CustomLink
              className="overflow-auto break-words text-readcv-secondary text-sm"
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
