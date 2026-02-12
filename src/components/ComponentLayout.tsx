import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ComponentLayoutProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};
export const ComponentLayout = ({
  children,
  className,
  id,
}: ComponentLayoutProps) => {
  return (
    <section
      id={id}
      className={cn(
        "max-w-360 w-full px-4 md:px-10 lg:px-20 mx-auto",
        className,
      )}
    >
      {children}
    </section>
  );
};
