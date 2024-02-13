import React from "react";

const sizeClasses = {
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsLight12: "font-light font-poppins",
  txtPoppinsLight18: "font-light font-poppins",
  txtPoppinsMediumItalic36: "font-medium font-poppins italic",
  txtPoppinsLight18Gray600: "font-light font-poppins",
  txtPoppinsSemiBold20Deeppurple400: "font-poppins font-semibold",
  txtPoppinsBold14: "font-bold font-poppins",
  txtPoppinsSemiBold36: "font-poppins font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsSemiBold10: "font-poppins font-semibold",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold36Black900: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsRegular14WhiteA700: "font-normal font-poppins",
  txtPoppinsSemiBold14Black90001: "font-poppins font-semibold",
  txtPoppinsMedium14Black900: "font-medium font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold20WhiteA700: "font-poppins font-semibold",
  txtPoppinsSemiBold24Black900: "font-poppins font-semibold",
  txtPoppinsRegular12Black900: "font-normal font-poppins",
  txtPoppinsSemiBold20Gray500: "font-poppins font-semibold",
  txtPoppinsSemiBold24: "font-poppins font-semibold",
  txtPoppinsLight18Black90001: "font-light font-poppins",
  txtPoppinsRegular14Lightblue700: "font-normal font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular12Gray600: "font-normal font-poppins",
  txtPoppinsRegular14Gray600: "font-normal font-poppins",
  txtPoppinsRegular12Gray500: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
