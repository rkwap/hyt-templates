export default function Hero({ data }) {
  return (
    <section className="flex items-center gap-6">
      {/* Avatar / Initials circle */}
      <div className="flex h-16 w-16 flex-shrink-0 select-none items-center justify-center rounded-full bg-[#C9A84C] font-semibold text-2xl text-white">
        {data.initials}
      </div>
      <div>
        <h1 className="font-semibold text-4xl text-[#1C1C1A] leading-tight">
          {data.name}
        </h1>
        {data.title && (
          <p className="mt-0.5 text-[#9E9A93] text-sm">{data.title}</p>
        )}
        {data.location && (
          <p className="mt-0.5 text-[#9E9A93]/70 text-xs">{data.location}</p>
        )}
      </div>
    </section>
  );
}
