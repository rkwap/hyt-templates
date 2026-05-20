import { isEmpty } from "lodash";

const Skills = ({ skills }) => {
  if (isEmpty(skills)) {
    return null;
  }

  return (
    <section className="my-[3.75rem] text-sm" id="skills">
      <h2 className="mb-[0.7rem] text-readcv-primary">Skills</h2>
      <div className="mt-6 ml-4 grid gap-3 sm:ml-0 sm:grid-cols-3">
        {skills.slice(0, 6).map((skill) => (
          <span
            className="cursor-pointer text-readcv-secondary text-sm"
            key={skill.value}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
