export default function Contact(props) {
  const data = props.data ?? props;
  const email = data.email;
  const linkedin = data.social_links?.linkedin;

  if (!(email || linkedin || data.contactBlurb)) {
    return null;
  }

  return (
    <section id="contact">
      <h2 className="mb-2 font-bold text-3xl text-zinc-100 md:text-4xl">
        Contact
      </h2>
      <p className="mb-10 text-base text-zinc-500 italic">
        Get in touch before I write another line of code!
      </p>

      <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-8">
        {data.contactBlurb && (
          <p className="mb-8 max-w-lg text-base text-zinc-400 leading-relaxed">
            {data.contactBlurb}
          </p>
        )}
        <div className="flex flex-wrap gap-3">
          {email && (
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-2.5 font-medium text-sm text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-zinc-100"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          )}
          {linkedin && (
            <a
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-2.5 font-medium text-sm text-zinc-200 transition-colors duration-200 hover:border-zinc-500 hover:text-zinc-100"
              href={linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
