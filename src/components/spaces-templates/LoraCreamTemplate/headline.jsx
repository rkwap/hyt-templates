export default function Headline(props) {
  const data = props.data ?? props;
  const text = data.headline ?? data.tagline;
  if (!text) {
    return null;
  }

  return <p className="mt-1 text-[#9E9A93] text-sm leading-relaxed">{text}</p>;
}
