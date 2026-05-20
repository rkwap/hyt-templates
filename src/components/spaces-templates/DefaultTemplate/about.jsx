import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";

const About = ({ about }) => {
  if (isEmpty(about)) {
    return null;
  }

  return (
    <MarkdownRenderer
      className="rounded-xl border border-secondary/20 bg-secondary/5 px-4 pt-1"
      config={{ exclude: ["headings"] }}
    >
      {about}
    </MarkdownRenderer>
  );
};

export default About;
