import { isEmpty } from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";

export default function Photo({ photo, name }) {
  if (isEmpty(photo)) {
    return null;
  }

  return (
    <div className="flex basis-1/4 justify-center">
      <Avatar className="mb-5 aspect-square min-h-[300px] min-w-[250px] overflow-hidden rounded-none">
        <AvatarImage
          alt={name}
          className="h-full w-full object-cover"
          src={photo}
        />
        <AvatarFallback className="rounded-none bg-[#EDEAE3] font-mono text-2xl text-[#1C1C1A]">
          {getNameInitials(name)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
