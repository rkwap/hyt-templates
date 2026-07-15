function SkillBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700 bg-zinc-800/60 px-3 py-1.5 text-sm text-zinc-300 transition-colors duration-150 hover:border-zinc-500 hover:text-zinc-100">
      {label}
    </span>
  );
}

function SkillGroup({ label, items }) {
  if (!items?.length) {
    return null;
  }
  return (
    <div>
      <p className="mb-3 font-semibold text-xs text-zinc-500 uppercase tracking-widest">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <SkillBadge key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

const toArr = (v) => {
  if (!v) {
    return [];
  }
  if (Array.isArray(v)) {
    return v;
  }
  return String(v)
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
};

export default function Skills(props) {
  const data = props.data ?? props;
  const raw = data.skills;
  if (!raw) {
    return null;
  }

  return (
    <section id="skills">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        Skills &amp; Tools
      </h2>

      {Array.isArray(raw) ? (
        <div className="flex flex-wrap gap-2">
          {raw.map((skill) => (
            <SkillBadge
              key={skill.value ?? skill}
              label={skill.label ?? skill}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <SkillGroup items={toArr(raw.design)} label="Design" />
          <SkillGroup items={toArr(raw.dev)} label="Development" />
          <SkillGroup items={toArr(raw.tools)} label="Tools" />
        </div>
      )}
    </section>
  );
}
