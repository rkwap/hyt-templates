import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function renderMarkdown(text = "") {
  return text.split("\n").map((line, i) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span className="block" key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? (
            <strong className="text-white" key={j}>
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </span>
    );
  });
}

const Product = ({ products_ih = [] }) => {
  if (!products_ih.length) {
    return null;
  }

  return (
    <section className="mt-8 w-full space-y-4" id="indie-products">
      <h2 className="pt-4 font-bold font-mono text-3xl text-white">
        Indie Products
      </h2>
      <div className="flex flex-col items-start justify-between gap-5">
        {products_ih.map((product, index) => (
          <div
            className="w-full rounded-lg border border-l-4 border-l-purple-500 bg-zinc-900 px-5 py-5 shadow-sm"
            id={`indie-product-${index + 1}`}
            key={product.name || index}
          >
            <div className="mb-2 flex flex-row items-center gap-4">
              {product.logo ? (
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-zinc-700">
                  <Image
                    alt="Product Logo"
                    className="object-cover"
                    fill
                    src={product.logo}
                    unoptimized
                  />
                </div>
              ) : (
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 font-bold text-lg text-zinc-400">
                  {product.name?.charAt(0) || "P"}
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <h3 className="line-clamp-2 font-mono font-semibold text-white text-xl">
                  <Link
                    className="inline-flex items-center gap-1 transition-colors hover:text-green-400"
                    href={product.url || "#"}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {product.name}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </h3>
                {product.revenue > 0 && (
                  <span className="w-max rounded-full border border-purple-400/30 bg-purple-500/10 px-2.5 py-0.5 font-mono font-semibold text-purple-300 text-xs">
                    MRR: ${product.revenue}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-2 overflow-auto break-words font-mono text-sm text-zinc-300 leading-relaxed">
              {renderMarkdown(product.description)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
