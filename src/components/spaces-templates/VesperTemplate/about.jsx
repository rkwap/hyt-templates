import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";

export default function About({ about }) {
  if (isEmpty(about)) {
    return null;
  }

  return (
    <section className="w-full" id="about">
      <h2 className="mb-8 font-bold text-3xl text-zinc-100 md:text-4xl">
        About Me
      </h2>
      <div className="text-base text-zinc-400 leading-relaxed">
        <MarkdownRenderer
          className="prose-sm prose max-w-none break-words prose-headings:text-zinc-300 prose-strong:text-zinc-200 text-zinc-400 marker:text-zinc-600"
          config={{}}
        >
          {about}
        </MarkdownRenderer>
      </div>
    </section>
  );
}
