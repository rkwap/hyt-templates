import { isEmpty } from "lodash";

const Headline = ({ headline }) => {
  if (isEmpty(headline)) {
    return null;
  }

  return <p className="mb-4 font-mono text-blue-400">{headline}</p>;
};

export default Headline;
