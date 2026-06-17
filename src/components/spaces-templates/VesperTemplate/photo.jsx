import { isEmpty } from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";

export default function Photo({ photo, name, size = "md" }) {
  if (isEmpty(photo)) {
    return null;
  }

  const sizeClass = size === "sm" ? "h-9 w-9" : "h-24 w-24 md:h-28 md:w-28";

  return (
    <Avatar
      className={`${sizeClass} flex-shrink-0 overflow-hidden rounded-full border-2 border-zinc-700`}
    >
      <AvatarImage
        alt={name}
        className="h-full w-full object-cover"
        src={photo}
      />
      <AvatarFallback className="rounded-full bg-zinc-800 text-sm text-zinc-300">
        {getNameInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
