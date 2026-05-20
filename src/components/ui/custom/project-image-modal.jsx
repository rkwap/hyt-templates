import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/utils";

export default function ProjectImageModal({
  src,
  alt,
  height = 85,
  width = 150,
  className = "",
  config = {
    lightCloseText: true,
    disableFocusRing: true,
  },
}) {
  return (
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="max-w-md overflow-hidden border-0 bg-transparent"
            style={{ width: `${width}px`, height: `${height}px` }}
          >
            <Image
              alt={alt || ""}
              className={cn(
                "h-full w-full rounded-md border-0 object-cover shadow-none outline-0 ring-0",
                className
              )}
              height={height}
              src={src}
              unoptimized
              width={width}
            />
          </div>
        </DialogTrigger>
        <DialogContent
          className="max-w-7xl border-0 bg-transparent p-0"
          config={config}
        >
          <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
            <Image
              alt={alt || ""}
              className="h-full w-full object-contain"
              height={100}
              src={src}
              unoptimized
              width={400}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
