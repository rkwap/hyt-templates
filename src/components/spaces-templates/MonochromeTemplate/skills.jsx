import { isEmpty } from "lodash";
import { CircleSmall } from "lucide-react";

export default function Skills({ skills }) {
  if (isEmpty(skills)) {
    return null;
  }

  return (
    <section className="basis-1/4" id="skills">
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">Skills</h2>
      <ul className="flex flex-col gap-1 pl-2 md:gap-3 md:p-0">
        {skills.slice(0, 6).map((skill) => (
          <li className="flex items-center gap-2" key={skill.value}>
            <CircleSmall
              className="flex-shrink-0"
              fill="hsl(var(--monochrome-secondary))"
              size={12}
              stroke="hsl(var(--monochrome-secondary))"
            />
            <span className="overflow-hidden text-ellipsis">{skill.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
