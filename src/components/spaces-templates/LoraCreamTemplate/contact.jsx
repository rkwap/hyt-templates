export default function Contact(props) {
  const data = props.data ?? props;
  const email = data.email;
  const linkedin = data.social_links?.linkedin;

  if (!(email || linkedin || data.contactBlurb)) {
    return null;
  }

  return (
    <section className="mt-16 rounded-2xl border border-[#DDD9D0] bg-[#EDEAE3] p-8 text-center">
      <h2 className="mb-3 font-semibold text-[#1C1C1A] text-lg">
        Get in touch
      </h2>
      {data.contactBlurb && (
        <p className="mx-auto mb-6 max-w-sm text-[#9E9A93] text-sm leading-relaxed">
          {data.contactBlurb}
        </p>
      )}
      <div className="flex flex-wrap justify-center gap-3">
        {email && (
          <a
            className="inline-block rounded-full bg-[#1C1C1A] px-8 py-3 font-semibold text-[#F6F3EE] text-sm transition-colors duration-200 hover:bg-[#C9A84C]"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        )}
        {!email && linkedin && (
          <a
            className="inline-block rounded-full bg-[#1C1C1A] px-8 py-3 font-semibold text-[#F6F3EE] text-sm transition-colors duration-200 hover:bg-[#C9A84C]"
            href={linkedin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Connect on LinkedIn
          </a>
        )}
      </div>
    </section>
  );
}
