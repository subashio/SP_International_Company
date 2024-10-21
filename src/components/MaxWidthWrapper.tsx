import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto w-full max-w-screen-2xl px-5 md:px-10 lg:px-20",
      className,
    )}
    {...props}
  />
));
MaxWidthWrapper.displayName = "MaxWidthWrapper";

export default MaxWidthWrapper;
