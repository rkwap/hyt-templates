export default function Name(props) {
  const data = props.data ?? props;
  return (
    <div>
      <h1 className="font-semibold text-4xl text-white leading-tight tracking-tight">
        {data.name}
      </h1>
      {data.title && (
        <p className="mt-0.5 text-sm text-white/60">{data.title}</p>
      )}
      {data.location && (
        <p className="mt-0.5 text-white/40 text-xs">{data.location}</p>
      )}
    </div>
  );
}
