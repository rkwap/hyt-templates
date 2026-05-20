import { isEmpty } from "lodash";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";

export const Photo = ({ photo, name }) => {
  if (isEmpty(photo)) {
    return null;
  }

  return (
    <>
      {photo && photo.length > 0 && (
        <Avatar className="h-[5.75rem] w-[5.75rem] rounded-full">
          <AvatarImage alt={name} src={photo} />
          <AvatarFallback className="rounded-none font-mono text-primary">
            {getNameInitials(name)}
          </AvatarFallback>
        </Avatar>
      )}
    </>
  );
};

export default Photo;
