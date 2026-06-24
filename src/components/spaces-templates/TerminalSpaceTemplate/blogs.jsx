import Link from "next/link";

const Blogs = ({ blogs = [] }) => {
  if (!blogs.length) {
    return null;
  }

  return (
    <section className="mt-10 space-y-4" id="featured-blogs">
      <h2 className="font-bold font-mono text-3xl text-white">
        Featured Blogs
      </h2>
      <ul className="space-y-3 lg:space-y-2">
        {blogs.map((blog, index) => (
          <li id={`featured-blog-${index + 1}`} key={`blog-${index + 1}`}>
            <Link
              className="inline-flex items-center gap-1 font-mono font-semibold text-zinc-300 transition-colors hover:text-green-400 md:text-lg"
              href={blog.blog_url}
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              {blog.blog_title}
              <span className="text-sm text-zinc-400">↗</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Blogs;
