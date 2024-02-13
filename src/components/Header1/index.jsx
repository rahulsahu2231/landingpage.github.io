import React from "react";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[60px] sm:h-auto md:ml-[0] ml-[97px] md:mt-0 my-2.5 object-cover w-[21%] md:w-full"
          src="images/img_hobbycuelogov2_60x293.png"
          alt="hobbycuelogo"
        />
        <div className="bg-gray-50 border border-blue_gray-50 border-solid flex flex-row items-center justify-between md:ml-[0] ml-[34px] md:mt-0 my-5 pl-3 rounded-lg w-[21%] md:w-full">
          <Text className="text-gray-500 text-xs" size="txtPoppinsLight12">
            Search here...
          </Text>
          <div className="bg-deep_purple-400 flex flex-col h-10 items-center justify-start p-3 rounded-br-lg rounded-tr-lg w-10">
            <Img
              className="h-4 rounded-br-[50%] rounded-tr-[50%] w-4"
              src="images/img_search.svg"
              alt="search"
            />
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[90px] mr-[100px] md:mt-0 my-5 w-[37%] md:w-full">
          <div className="flex flex-row items-start justify-evenly w-[21%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_explore_deep_purple_400.svg"
              alt="explore"
            />
            <Text
              className="mt-[3px] text-black-900 text-sm"
              size="txtPoppinsMedium14Black900"
            >
              Explore
            </Text>
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
          <div className="flex flex-row items-start justify-center w-[22%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-6 items-center justify-start w-6"
              style={{ backgroundImage: "url('images/img_group7.svg')" }}
            >
              <div className="h-6 md:h-auto relative w-6">
                <Img
                  className="h-[19px] m-auto w-[19px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Img
                  className="absolute h-3 inset-[0] justify-center m-auto rounded-[1px] w-3"
                  src="images/img_star1_12x12.svg"
                  alt="starOne"
                />
              </div>
            </div>
            <Text
              className="ml-1 mt-0.5 text-black-900 text-sm"
              size="txtPoppinsMedium14Black900"
            >
              Hobbies
            </Text>
            <Img
              className="h-6 ml-1 w-6"
              src="images/img_arrowdown.svg"
              alt="arrowdown_One"
            />
          </div>
          <Img
            className="h-6 w-6"
            src="images/img_bookmarkblack24dp.svg"
            alt="bookmarkblackTwentyFour"
          />
          <Img
            className="h-6 w-6"
            src="images/img_notificationsblack24dp.svg"
            alt="notificationsbl"
          />
          <Img className="h-6 w-6" src="images/img_cart.svg" alt="cart" />
          <div className="flex flex-col items-center justify-start w-[22%] md:w-full">
            <Button
              className="border border-deep_purple-400 border-solid cursor-pointer font-poppins font-semibold min-w-[112px] text-center text-sm"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
