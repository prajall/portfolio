import { cn } from "@/lib/utils";
import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <section
      className={cn(
        className,
        "h-[95vh] max-h-[870px] min-h-[750px] w-full px-4 md:px-8 lg:px-20",
      )}
    > 
      {children}
    </section>
  );
};
// hello

export default SectionWrapper;
