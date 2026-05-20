import { isEmpty } from "lodash";

const Headline = ({ headline }) => {
  if (isEmpty(headline)) {
    return null;
  }

  return (
    <p className="text-center font-medium text-secondary md:text-start">
      {headline}
    </p>
  );
};

export default Headline;
