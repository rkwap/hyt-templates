import { isEmpty } from "lodash";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/utils";

const DEFAULT_TARGET = "_blank";
const DEFAULT_REL = "noopener noreferrer nofollow";
const DEFAULT_ICON_SIZE = 15;

function CustomLink({
  url,
  label,
  className,
  target,
  rel,
  iconSize,
  classNames = {},
}) {
  const baseClass = "flex md:items-center cursor-pointer";

  if (isEmpty(url)) {
    return <div className={cn(baseClass, className)}>{label}</div>;
  }

  return (
    <Link
      aria-label={label}
      className={cn(baseClass, "hover:underline", className)}
      href={url}
      rel={rel || DEFAULT_REL}
      target={target || DEFAULT_TARGET}
    >
      <span className={classNames.label}>{label}</span>
      <ArrowUpRight height={iconSize || DEFAULT_ICON_SIZE} />
    </Link>
  );
}

export default CustomLink;
