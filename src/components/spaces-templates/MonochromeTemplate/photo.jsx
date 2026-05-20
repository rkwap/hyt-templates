import { isEmpty } from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";

export default function Photo({ photo, name }) {
  if (isEmpty(photo)) {
    return null;
  }

  return (
    <div className="flex basis-1/4 justify-center">
      <Avatar className="mb-5 aspect-square min-h-[300px] min-w-[250px] rounded-none object-fill">
        <AvatarImage alt={name} src={photo} />
        <AvatarFallback className="rounded-none font-mono text-monochrome-primary">
          {getNameInitials(name)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
