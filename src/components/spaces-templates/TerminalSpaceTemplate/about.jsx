// Simple inline markdown renderer for bold (**text**) and line breaks
function renderMarkdown(text = "") {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        )}
        <br />
      </span>
    );
  });
}

const About = ({ about }) => {
  if (!about) {
    return null;
  }

  return (
    <div className="mb-8 border-green-500/40 border-l-2 pl-4 font-mono lg:my-11">
      <div className="text-sm text-zinc-300 leading-relaxed">
        <span className="font-bold text-purple-400">{">> "}</span>
        {renderMarkdown(about)}
      </div>
    </div>
  );
};

export default About;
