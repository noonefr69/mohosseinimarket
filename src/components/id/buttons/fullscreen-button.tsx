"use client";

import { Button } from "@/components/ui/button";
import { Fullscreen, XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

export default function FullScreenButton({ image }: { image: string }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  return (
    <>
      <Dialog onOpenChange={setIsFullScreen} open={isFullScreen}>
        <DialogTrigger asChild>
          <Button
            className="absolute top-2 right-2 z-10"
            onClick={() => setIsFullScreen(true)}
            size="icon"
            variant={"outline"}
          >
            <Fullscreen />
          </Button>
        </DialogTrigger>
        <DialogContent className="min-h-1/2 min-w-1/2" showCloseButton={false}>
          <div className="relative">
            <DialogClose asChild>
              <Button
                className="absolute top-0 right-0 z-50"
                size={"icon"}
                variant={"ghost"}
              >
                <XIcon />
              </Button>
            </DialogClose>
            <Image
              src={!image || image.trim() === "" ? "/placeholder.svg" : image}
              alt={image}
              fill
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
