import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ComponentLayoutProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};
const ComponentLayout = ({ children, className, id }: ComponentLayoutProps) => {
  return (
    <section
      id={id}
      className={cn(
        "max-w-360 w-full md:px-10 py-10 md:py-20 mx-auto",
        className,
      )}
    >
      {children}
    </section>
  );
};

export default ComponentLayout;
