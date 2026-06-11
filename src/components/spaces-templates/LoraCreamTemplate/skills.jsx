function Pill({ label }) {
  return (
    <span className="cursor-default rounded-full border border-[#DDD9D0] bg-[#F6F3EE] px-2.5 py-0.5 text-[#9E9A93] text-[10px] transition-colors duration-150 hover:border-[#C9A84C] hover:text-[#C9A84C]">
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
      <p className="mb-2 font-bold text-[#C9A84C] text-[9px] uppercase tracking-wider">
        {label}
      </p>
      <div className="flex flex-wrap gap-1">
        {items.map((item) => (
          <Pill key={item} label={item} />
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
    <section>
      <h2 className="mb-6 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        Skills
      </h2>
      {Array.isArray(raw) ? (
        <div className="flex flex-wrap gap-1">
          {raw.map((skill) => (
            <Pill key={skill.value ?? skill} label={skill.label ?? skill} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <SkillGroup items={toArr(raw.design)} label="Design" />
          <SkillGroup items={toArr(raw.dev)} label="Dev" />
          <SkillGroup items={toArr(raw.tools)} label="Tools" />
        </div>
      )}
    </section>
  );
}
