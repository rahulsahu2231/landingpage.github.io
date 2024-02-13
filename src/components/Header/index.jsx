import React from "react";

import { Img, List, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-[60px] md:h-auto md:ml-[0] ml-[97px] md:mt-0 my-2.5 object-cover w-[60px]"
          src="images/img_hobbycuelogov2.png"
          alt="hobbycuelogovTwo"
        />
        <div className="bg-gray-50 border border-blue_gray-50 border-solid flex flex-row items-center justify-between ml-6 md:ml-[0] md:mt-0 my-5 pl-3 rounded-lg w-[21%] md:w-full">
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
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[370px] mr-[100px] md:mt-0 my-4 w-[34%] md:w-full">
          <List
            className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[51%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-row items-start justify-evenly w-full">
              <Img
                className="h-6 w-6"
                src="images/img_explore.svg"
                alt="explore"
              />
              <Text
                className="mt-0.5 text-black-900 text-sm"
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
            <div className="flex flex-row items-center justify-evenly w-full">
              <Img
                className="h-6 w-6"
                src="images/img_hobbies.svg"
                alt="hobbies"
              />
              <Text
                className="text-black-900 text-sm"
                size="txtPoppinsMedium14Black900"
              >
                Hobbies
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </List>
          <Img
            className="h-6 ml-6 md:ml-[0] w-6"
            src="images/img_bookmarkblack24dp.svg"
            alt="bookmarkblackTwentyFour"
          />
          <Img
            className="h-6 ml-6 md:ml-[0] w-6"
            src="images/img_notificationsblack24dp.svg"
            alt="notificationsbl"
          />
          <Img
            className="h-6 ml-6 md:ml-[0] w-6"
            src="images/img_cart.svg"
            alt="cart"
          />
          <Img
            className="h-12 md:h-auto ml-6 md:ml-[0] rounded-[50%] w-12"
            src="images/img_ellipse23.png"
            alt="ellipseTwentyThree"
          />
          <Img
            className="h-6 ml-1 md:ml-[0] w-6"
            src="images/img_arrowdown_gray_600.svg"
            alt="arrowdown"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
