import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";

export default function About({ about }) {
  if (isEmpty(about)) {
    return null;
  }

  return (
    <section className="w-full">
      <h2 className="mb-4 font-bold text-[#9E9A93] text-[10px] uppercase tracking-widest">
        About
      </h2>
      <div className="mt-2 text-justify text-[#1C1C1A]/75 text-sm leading-relaxed">
        <MarkdownRenderer config={{ exclude: ["headings"] }}>
          {about}
        </MarkdownRenderer>
      </div>
    </section>
  );
}
