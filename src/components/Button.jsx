import { cn } from "../lib/utils";

export const Button = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        "h-9 min-w-fit rounded-md bg-[--blue] px-3 font-medium text-white shadow-md active:scale-95",
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-2">{children}</div>
    </button>
  );
};
