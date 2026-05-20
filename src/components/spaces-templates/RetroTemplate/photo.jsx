import { isEmpty } from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";

export const Photo = ({ photo, name }) => {
  if (isEmpty(photo)) {
    return null;
  }

  return (
    <Avatar className="h-20 w-20 rounded-none border-2 border-white/20">
      <AvatarImage alt="User image" src={photo} />
      <AvatarFallback className="rounded-none font-mono text-primary">
        {getNameInitials(name)}
      </AvatarFallback>
    </Avatar>
  );
};

export default Photo;
