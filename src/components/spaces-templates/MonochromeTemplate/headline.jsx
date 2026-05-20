import { isEmpty } from "lodash";

export default function Headline({ headline }) {
  if (isEmpty(headline)) {
    return null;
  }

  return (
    <div className="text:xs text-center font-light tracking-wider md:text-sm md:tracking-widest">
      {headline}
    </div>
  );
}
