import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNameInitials } from "@/utils/helpers/string";
import { hasContent } from "./utils";

const Photo = ({ photo, name }) => {
  if (!hasContent(photo)) {
    return null;
  }

  return (
    <>
      {photo && photo.length > 0 && (
        <Avatar className="h-32 w-32 rounded-2xl border-2 border-white/20 shadow-sm">
          <AvatarImage alt={name} src={photo} />
          <AvatarFallback className="rounded-none bg-secondary/20 font-bold font-mono text-xl">
            {getNameInitials(name)}
          </AvatarFallback>
        </Avatar>
      )}
    </>
  );
};

export default Photo;
