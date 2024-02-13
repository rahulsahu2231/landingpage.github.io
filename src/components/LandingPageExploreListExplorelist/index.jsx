import React from "react";

import { Input, Line, Text } from "components";

const LandingPageExploreListExplorelist = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-2.5 items-center justify-center pl-3 md:pr-10 sm:pr-5 pr-[61px] py-3 w-auto md:w-full">
          <Text
            className="text-gray-600 text-sm tracking-[0.07px] w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.peoplecommunitytext}
          </Text>
          <Line className="bg-blue_gray-100 h-px w-full" />
        </div>
        <Input
          name="frame12013"
          placeholder="Places - Venues"
          className="!placeholder:text-gray-600 !text-gray-600 font-poppins p-0 text-left text-sm tracking-[0.07px] w-full"
          wrapClassName="w-full"
          shape="square"
          color="white_A700"
          size="xs"
          variant="fill"
        ></Input>
        <Input
          name="frame12012"
          placeholder="Programs - Events"
          className="!placeholder:text-gray-600 !text-gray-600 font-poppins p-0 text-left text-sm tracking-[0.07px] w-full"
          wrapClassName="w-full"
          shape="square"
          color="white_A700"
          size="sm"
          variant="fill"
        ></Input>
        <Input
          name="frame12011"
          placeholder="Products - Store"
          className="!placeholder:text-gray-600 !text-gray-600 font-poppins p-0 text-left text-sm tracking-[0.07px] w-full"
          wrapClassName="w-full"
          shape="square"
          color="white_A700"
          size="xs"
          variant="fill"
        ></Input>
        <div className="bg-white-A700 flex flex-col items-center justify-center pl-3 md:pr-10 sm:pr-5 pr-[169px] py-3 rounded-bl rounded-br w-auto md:w-full">
          <Text
            className="text-gray-600 text-sm tracking-[0.07px] w-auto"
            size="txtPoppinsRegular14Gray600"
          >
            {props?.blogstext}
          </Text>
        </div>
      </div>
    </>
  );
};

LandingPageExploreListExplorelist.defaultProps = {
  peoplecommunitytext: "People - Community",
  blogstext: "Blogs",
};

export default LandingPageExploreListExplorelist;
