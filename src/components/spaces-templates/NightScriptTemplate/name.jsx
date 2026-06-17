export default function Name(props) {
  const data = props.data ?? props;
  return (
    <div>
      <h1 className="font-bold text-4xl text-zinc-100 leading-tight tracking-tight md:text-5xl">
        {data.name}
      </h1>
      {data.title && (
        <p className="mt-2 text-base text-zinc-400">{data.title}</p>
      )}
      {data.location && (
        <p className="mt-1 text-sm text-zinc-600">{data.location}</p>
      )}
    </div>
  );
}
