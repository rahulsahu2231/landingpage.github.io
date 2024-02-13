import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-lg" };
const variants = {
  outline: { black_900: "border border-black-900 border-solid text-black-900" },
  fill: {
    white_A700: "bg-white-A700 text-deep_purple-400",
    deep_purple_400: "bg-deep_purple-400 text-white-A700",
    blue_gray_50: "bg-blue_gray-50",
  },
};
const sizes = { xs: "p-1", sm: "p-[9px]", md: "p-3" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900",
    "white_A700",
    "deep_purple_400",
    "blue_gray_50",
  ]),
};

export { Button };
