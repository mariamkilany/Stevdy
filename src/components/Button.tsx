import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({
  className,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  console.log(
    twMerge(
      "bg-gradient-to-r to-gridiantColor1 from-gridiantColor2 text-white text-center rounded-lg inline-block py-2 px-10  hover:bg-gridiantColor2 hover:shadow-lg transition duration-300 ease-in-out ",
      className
    )
  );
  return (
    <button
      {...props}
      className={twMerge(
        "bg-gradient-to-r to-gridiantColor1 from-gridiantColor2 text-white text-center rounded-lg inline-block py-2 px-10  hover:bg-gridiantColor2 hover:shadow-lg transition duration-300 ease-in-out ",
        className
      )}
    >
      {props.children}
    </button>
  );
};
