const Headline = ({ headline }) => {
  if (!headline) {
    return null;
  }
  return <p className="mb-4 font-mono text-blue-400 text-sm">{headline}</p>;
};

export default Headline;
