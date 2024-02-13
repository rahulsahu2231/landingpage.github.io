import React from "react";

import { Img, Input, Line, Text } from "components";

const LandingPageJoinInColumnframe12008 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Input
          name="frame12008"
          placeholder="Password"
          className="!placeholder:text-gray-500_01 !text-gray-500_01 font-poppins p-0 text-left text-xs w-full"
          wrapClassName="border border-blue_gray-50 border-solid flex w-auto md:w-full"
          suffix={
            <Img
              className="h-4 ml-[35px] my-px"
              src="images/img_password.svg"
              alt="Password"
            />
          }
          shape="round"
          color="white_A700"
          size="xs"
          variant="fill"
        ></Input>
        <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
          <Line className="bg-white-A700 h-1 mb-[7px] sm:mt-0 mt-[3px] rounded-sm w-[15%]" />
          <Line className="bg-white-A700 h-1 mb-[7px] ml-0.5 sm:ml-[0] sm:mt-0 mt-[3px] rounded-sm w-[15%]" />
          <Line className="bg-white-A700 h-1 mb-[7px] ml-0.5 sm:ml-[0] sm:mt-0 mt-[3px] rounded-sm w-[15%]" />
          <Text
            className="sm:ml-[0] ml-[130px] text-[10px] text-gray-500"
            size="txtPoppinsSemiBold10"
          >
            {props?.passwordstrengthtext}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingPageJoinInColumnframe12008.defaultProps = {
  passwordstrengthtext: "Password strength",
};

export default LandingPageJoinInColumnframe12008;
