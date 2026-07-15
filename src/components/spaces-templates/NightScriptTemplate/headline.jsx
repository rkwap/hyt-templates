export default function Headline(props) {
  const data = props.data ?? props;
  const text = data.headline ?? data.tagline;
  if (!text) {
    return null;
  }

  return (
    <p className="mt-3 max-w-xl text-base text-zinc-400 leading-relaxed">
      {text}
    </p>
  );
}
