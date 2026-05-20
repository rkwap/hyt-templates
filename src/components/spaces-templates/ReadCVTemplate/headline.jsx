import { isEmpty } from "lodash";

const Headline = ({ headline }) => {
  if (isEmpty(headline)) {
    return null;
  }

  return <p className="text-readcv-secondary text-sm">{headline}</p>;
};

export default Headline;
