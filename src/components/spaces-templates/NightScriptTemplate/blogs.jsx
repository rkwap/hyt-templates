export default function Blogs(props) {
  const data = props.data ?? props;
  const blogs = data.blogs ?? data.writing ?? [];
  if (!blogs.length) {
    return null;
  }

  return (
    <section id="writing">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        Writing
      </h2>

      <ol className="space-y-6">
        {blogs.map((post, i) => {
          const title = post.blog_title ?? post.title;
          const url = post.blog_url ?? post.url;
          return (
            <li className="flex gap-5" key={i}>
              <span className="mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/60 font-semibold text-xs text-zinc-400">
                {i + 1}
              </span>
              <div className="flex-1 border-zinc-800 border-b pb-6 last:border-b-0 last:pb-0">
                <h3 className="font-semibold text-base text-zinc-100 leading-snug">
                  {url ? (
                    <a
                      className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-zinc-300"
                      href={url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {title}
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-zinc-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Blog icon</title>
                        <path
                          clipRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  ) : (
                    title
                  )}
                </h3>
                {post.summary && (
                  <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                    {post.summary}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
