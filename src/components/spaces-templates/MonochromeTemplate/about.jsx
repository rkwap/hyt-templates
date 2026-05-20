import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";

export default function About({ about }) {
  if (isEmpty(about)) {
    return null;
  }

  return (
    <div className="grow text-justify">
      <h2 className="mb-2 font-bold text-2xl md:mb-4 md:text-3xl">About</h2>
      <MarkdownRenderer
        className="prose-sm prose ml-1 prose-a:text-monochrome-primary prose-headings:text-monochrome-primary prose-headings:text-sm prose-strong:text-monochrome-primary text-monochrome-primary text-sm sm:ml-0 md:m-0"
        config={{ exclude: ["headings"] }}
      >
        {about}
      </MarkdownRenderer>
    </div>
  );
}
