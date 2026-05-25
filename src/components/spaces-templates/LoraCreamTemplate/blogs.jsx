export default function Blogs(props) {
  const data = props.data ?? props;
  const blogs = data.blogs ?? data.writing ?? [];
  if (!blogs.length) {
    return null;
  }

  return (
    <section className="mt-16">
      <h2 className="mb-8 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Writing
      </h2>
      <div className="space-y-6">
        {blogs.map((post, i) => {
          const title = post.blog_title ?? post.title;
          const url = post.blog_url ?? post.url;
          return (
            <div
              className="group relative border-[#E8E4DD] border-l-2 pl-5 transition-colors duration-200 hover:border-[#C9A84C]"
              key={i}
            >
              <h3 className="font-semibold text-[#1C1C1A] text-sm leading-snug">
                {url ? (
                  <a
                    className="transition-colors duration-150 hover:text-[#C9A84C]"
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              {post.summary && (
                <p className="mt-1 text-[#9E9A93] text-xs leading-relaxed">
                  {post.summary}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
