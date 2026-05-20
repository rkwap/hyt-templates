import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";

const About = ({ about }) => {
  if (isEmpty(about)) {
    return null;
  }

  return (
    <div className="my-9 text-sm">
      <h2 className="mb-[0.7rem] text-readcv-primary">About</h2>
      <MarkdownRenderer
        className="prose-sm prose ml-4 prose-a:text-readcv-secondary prose-headings:text-readcv-secondary prose-headings:text-sm prose-strong:text-readcv-secondary text-readcv-secondary text-sm sm:ml-0"
        config={{ exclude: ["headings"] }}
      >
        {about}
      </MarkdownRenderer>
    </div>
  );
};

export default About;
