import { isEmpty } from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";

export default function Photo({ photo, name }) {
  if (isEmpty(photo)) {
    return null;
  }

  return (
    <Avatar className="h-24 w-24 overflow-hidden rounded-full border-2 border-zinc-700 md:h-28 md:w-28">
      <AvatarImage
        alt={name}
        className="h-full w-full object-cover"
        src={photo}
      />
      <AvatarFallback className="rounded-full bg-zinc-800 text-2xl text-zinc-300">
        {getNameInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
}
