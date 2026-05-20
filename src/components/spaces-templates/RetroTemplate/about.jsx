import { isEmpty } from "lodash";
import MarkdownRenderer from "@/components/markdown-renderer";

const About = ({ about }) => {
  if (isEmpty(about)) {
    return null;
  }

  return (
    <div className="mb-8 border-black/10 border-l-2 pl-4 font-mono lg:my-11">
      <div>
        <span className="text-purple-600">{">> "}</span>
        <MarkdownRenderer config={{ exclude: ["headings"] }}>
          {about}
        </MarkdownRenderer>
      </div>
    </div>
  );
};

export default About;
