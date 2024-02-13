import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Header1 from "components/Header1";
import LandingPageJoinInColumnframe12008 from "components/LandingPageJoinInColumnframe12008";
import LandingPageJoinInSigninjoinin from "components/LandingPageJoinInSigninjoinin";
import LandingPageSignInLoginwithother from "components/LandingPageSignInLoginwithother";
import LandingPageSignInRowrectangleseventyone from "components/LandingPageSignInRowrectangleseventyone";

const LandingPageJoinInPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="bg-gray-100 flex md:flex-col flex-row md:gap-10 items-start justify-between pt-[100px] md:px-10 sm:px-5 px-[100px] w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start md:mt-0 mt-[3px] w-[58%] md:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 tracking-[0.72px]"
                size="txtPoppinsSemiBold36Black900"
              >
                <span className="text-black-900 font-poppins text-left font-semibold italic">
                  Explore your
                </span>
                <span className="text-light_blue-700 font-poppins text-left font-semibold italic">
                  {" "}
                  hobby
                </span>
                <span className="text-black-900 font-poppins text-left font-semibold italic">
                  {" "}
                  or{" "}
                </span>
                <span className="text-deep_purple-400 font-poppins text-left font-semibold italic">
                  passion
                </span>
              </Text>
              <Text
                className="leading-[30.00px] mt-7 text-black-900 text-sm tracking-[0.28px] w-full"
                size="txtPoppinsLight14"
              >
                <>
                  Sign-in to interact with a community of fellow hobbyists and
                  an eco-system of experts, teachers, suppliers, classes,
                  workshops, and places to practice, participate or perform.
                  Your hobby may be about visual or performing arts, sports,
                  games, gardening, model making, cooking, indoor or outdoor
                  activities…
                </>
              </Text>
              <Text
                className="leading-[30.00px] mt-4 text-black-900 text-sm tracking-[0.28px] w-full"
                size="txtPoppinsLight14"
              >
                If you are an expert or a seller, you can Add your Listing and
                promote yourself, your students, products, services or events.
                Hop on your hobbyhorse and enjoy the ride.
              </Text>
            </div>
            <Img
              className="h-[216px]"
              src="images/img_group27.svg"
              alt="groupTwentySeven"
            />
          </div>
          <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-0.5 w-auto sm:w-full">
            <LandingPageJoinInSigninjoinin className="flex flex-row gap-8 items-start justify-center w-auto" />
            <div className="flex flex-col gap-7 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <LandingPageSignInLoginwithother className="bg-gray-100 border border-deep_purple-400 border-solid flex flex-row gap-[88px] items-start justify-start pl-6 md:pr-10 pr-32 sm:px-5 py-3 rounded-lg w-auto sm:w-full" />
                <div className="bg-gray-100 border border-deep_purple-400 border-solid flex flex-row gap-[79px] items-start justify-start pl-6 md:pr-10 pr-[119px] sm:px-5 py-3 rounded-lg w-auto sm:w-full">
                  <Img
                    className="h-4 w-4"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                  <Text
                    className="text-black-900_01 text-sm w-auto"
                    size="txtPoppinsSemiBold14Black90001"
                  >
                    Continue with Facebook
                  </Text>
                </div>
              </div>
              <LandingPageSignInRowrectangleseventyone className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full" />
              <div className="flex flex-col gap-3 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Input
                    name="inputfields"
                    placeholder="Email"
                    className="p-0 placeholder:text-gray-500 text-left text-xs w-full"
                    wrapClassName="border border-blue_gray-50 border-solid w-full"
                    type="email"
                    shape="round"
                    color="white_A700"
                    size="xs"
                    variant="fill"
                  ></Input>
                  <LandingPageJoinInColumnframe12008 className="flex flex-col gap-1.5 items-center justify-start w-full" />
                </div>
                <div className="flex flex-col gap-3 items-center justify-center w-auto sm:w-full">
                  <Text
                    className="text-gray-600 text-xs w-auto"
                    size="txtPoppinsRegular12Gray600"
                  >
                    <span className="text-gray-600 font-poppins text-left font-normal">
                      By continuing, you agree to our{" "}
                    </span>
                    <span className="text-black-900_01 font-poppins text-left font-normal">
                      Terms of Service
                    </span>
                    <span className="text-gray-600 font-poppins text-left font-normal">
                      {" "}
                      and{" "}
                    </span>
                    <span className="text-black-900_01 font-poppins text-left font-normal">
                      Privacy Policy
                    </span>
                    <span className="text-gray-600 font-poppins text-left font-normal">
                      .
                    </span>
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold min-w-[410px] sm:min-w-full text-center text-sm"
                    shape="round"
                    color="deep_purple_400"
                    size="sm"
                    variant="fill"
                  >
                    Agree and Continue
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-col items-center justify-center mx-auto my-[100px] w-[87%]">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="md:gap-5 gap-6 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-6 items-start justify-start ml-1 md:ml-[0] w-[28%] md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_groupsblack24dp.svg"
                      alt="groupsblack24dp"
                    />
                    <Text
                      className="mt-1 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsSemiBold24Black900"
                    >
                      People
                    </Text>
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] mt-[23px] text-black-900 text-lg w-[99%] sm:w-full"
                    size="txtPoppinsLight18"
                  >
                    Find a teacher, coach, or expert for your hobby interest in
                    your locality. Find a partner, teammate, accompanist or
                    collaborator.
                  </Text>
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-semibold min-w-[122px] ml-1 md:ml-[0] mt-8 text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Connect
                  </Button>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-6 items-center justify-start ml-1 md:ml-[0] w-1/4 md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_locationonblack24dp.svg"
                      alt="locationonblack"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsSemiBold24Black900"
                    >
                      Place
                    </Text>
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] mt-6 text-black-900 text-lg w-[99%] sm:w-full"
                    size="txtPoppinsLight18"
                  >
                    Find a class, school, playground, auditorium, studio, shop
                    or an event venue. Book a slot at venues that allow booking
                    through hobbycue.
                  </Text>
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-semibold min-w-[122px] ml-1 md:ml-[0] mt-8 text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Meet up
                  </Button>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-6 items-center justify-start ml-1 md:ml-[0] w-[31%] md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_shoppingbasketblack24dp.svg"
                      alt="shoppingbasketb"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsSemiBold24Black900"
                    >
                      Product
                    </Text>
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] mt-6 text-black-900 text-lg w-[99%] sm:w-full"
                    size="txtPoppinsLight18"
                  >
                    Find equipment or supplies required for your hobby. Buy,
                    rent or borrow from shops, online stores or from community
                    members.
                  </Text>
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-semibold min-w-[122px] ml-1 md:ml-[0] mt-8 text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Get it
                  </Button>
                </div>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-1 flex-col items-start justify-start p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-6 items-center justify-start ml-1 md:ml-[0] w-[33%] md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtPoppinsSemiBold24Black900"
                    >
                      Program
                    </Text>
                  </div>
                  <Text
                    className="ml-1 md:ml-[0] mt-6 text-black-900 text-lg w-[99%] sm:w-full"
                    size="txtPoppinsLight18"
                  >
                    Find events, meetups and workshops related to your hobby.
                    Register or buy tickets online.
                  </Text>
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-semibold min-w-[122px] ml-1 md:ml-[0] mt-[59px] text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Attend
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPageJoinInPage;
