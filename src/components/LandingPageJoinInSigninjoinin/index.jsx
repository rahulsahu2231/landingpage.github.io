import React from "react";

import { Line, Text } from "components";

const LandingPageJoinInSigninjoinin = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start">
          <Text
            className="text-gray-500 text-xl"
            size="txtPoppinsSemiBold20Gray500"
          >
            {props?.signintext}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-2/5">
          <Text
            className="text-deep_purple-400 text-xl"
            size="txtPoppinsSemiBold20Deeppurple400"
          >
            {props?.joinintext}
          </Text>
          <Line className="bg-deep_purple-400 h-0.5 mt-0.5 w-full" />
        </div>
      </div>
    </>
  );
};

LandingPageJoinInSigninjoinin.defaultProps = {
  signintext: "Sign In",
  joinintext: "Join In",
};

export default LandingPageJoinInSigninjoinin;
