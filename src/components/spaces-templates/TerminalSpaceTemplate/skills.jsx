const Skills = ({ skills = [] }) => {
  if (!skills.length) {
    return null;
  }

  return (
    <section className="flex flex-wrap gap-2" id="skills">
      {skills.slice(0, 6).map((skill) => (
        <span
          className="cursor-pointer font-bold font-mono text-white/70 text-xs transition-colors duration-150 hover:text-green-400"
          key={skill.value}
        >
          #{skill.label}
        </span>
      ))}
    </section>
  );
};

export default Skills;
