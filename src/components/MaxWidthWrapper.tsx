import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ children, className }: children) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-5 md:px-10 lg:px-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
