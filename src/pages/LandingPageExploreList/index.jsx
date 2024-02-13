import React from "react";

import { Button, Img, Input, Line, SeekBar, Text } from "components";
import Header1 from "components/Header1";
import LandingPageExploreListExplorelist from "components/LandingPageExploreListExplorelist";
import LandingPageJoinInColumnframe12008 from "components/LandingPageJoinInColumnframe12008";
import LandingPageJoinInSigninjoinin from "components/LandingPageJoinInSigninjoinin";
import LandingPageSignInLoginwithother from "components/LandingPageSignInLoginwithother";
import LandingPageSignInRowrectangleseventyone from "components/LandingPageSignInRowrectangleseventyone";

const LandingPageExploreListPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-end mx-auto w-full">
        <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="bg-gray-100 flex md:flex-col flex-row gap-[11px] items-start justify-start md:px-10 sm:px-5 px-[100px] w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-20 items-center justify-start md:mt-0 mt-[103px] w-[58%] md:w-full">
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
          <div className="md:h-[435px] h-[535px] sm:h-[624px] relative w-[43%] md:w-full">
            <div className="absolute bottom-[0] flex flex-col gap-8 items-start justify-start right-[0] w-auto">
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
            <LandingPageExploreListExplorelist className="absolute flex flex-col items-center justify-start left-[0] shadow-bs top-[0] w-auto" />
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col mx-auto w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[100px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
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
                        Find a teacher, coach, or expert for your hobby interest
                        in your locality. Find a partner, teammate, accompanist
                        or collaborator.
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
                        Find a class, school, playground, auditorium, studio,
                        shop or an event venue. Book a slot at venues that allow
                        booking through hobbycue.
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
                        rent or borrow from shops, online stores or from
                        community members.
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
                        Find events, meetups and workshops related to your
                        hobby. Register or buy tickets online.
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
            </div>
            <div className="bg-white-A700 md:h-[468px] h-[530px] mt-[-16px] mx-auto py-4 w-full z-[1]">
              <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col md:gap-10 gap-20 h-full items-center justify-start m-auto p-10 sm:px-5 rounded-lg w-[87%]">
                <div className="flex flex-row gap-4 items-center justify-center w-[28%] md:w-full">
                  <Img
                    className="h-[54px] w-[54px]"
                    src="images/img_add.svg"
                    alt="add"
                  />
                  <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-black-900_01"
                    size="txtPoppinsSemiBold36"
                  >
                    Add your own
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[30.00px] text-black-900_01 text-lg tracking-[0.36px] w-full"
                    size="txtPoppinsLight18Black90001"
                  >
                    Are you a teacher or expert? Do you sell or rent out
                    equipment, venue or event tickets? Or, you know someone who
                    should be on hobbycue? Go ahead and Add your Own page
                  </Text>
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-semibold min-w-[122px] text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Add new
                  </Button>
                </div>
              </div>
              <div className="absolute bg-gray-50_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[100px] md:px-10 sm:px-5 w-full">
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col gap-8 items-start justify-start p-10 sm:px-5 rounded-lg w-full">
                  <div className="flex flex-row gap-6 items-center justify-start w-1/5 md:w-full">
                    <Img
                      className="h-10 w-10"
                      src="images/img_add.svg"
                      alt="add_One"
                    />
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Add your own
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] text-black-900_01 text-lg tracking-[0.36px] w-full"
                    size="txtPoppinsLight18Black90001"
                  >
                    Are you a teacher or expert? Do you sell or rent out
                    equipment, venue or event tickets? Or, you know someone who
                    should be on hobbycue? Go ahead and Add your Own page
                  </Text>
                  <Button
                    className="border border-deep_purple-400 border-solid cursor-pointer font-semibold min-w-[122px] text-center text-sm"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    Add new
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[-33px] mx-auto p-[100px] md:px-10 sm:px-5 w-full z-[1]">
            <div className="bg-gray-100 flex flex-col items-center justify-start p-10 sm:px-5 rounded-lg w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
                  <div className="flex flex-row gap-6 items-center justify-start w-full">
                    <div className="bg-white-A700 flex flex-col h-10 items-center justify-start rotate-[180deg] rounded-[50%] w-10">
                      <Img
                        className="h-10 rounded-tl-[50%] rounded-tr-[50%] w-10"
                        src="images/img_user.svg"
                        alt="user"
                      />
                    </div>
                    <Text
                      className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                      size="txtPoppinsSemiBold24"
                    >
                      Testimonials
                    </Text>
                  </div>
                </div>
                <Text
                  className="leading-[30.00px] mt-8 text-gray-600 text-lg tracking-[0.36px] w-full"
                  size="txtPoppinsLight18Gray600"
                >
                  In a fast growing and ever changing city like Bangalore, it
                  sometimes becomes very difficult to find or connect with like
                  minded people. Websites like hobbycue.com is a great service
                  which helps me get in touch with, communicate, connect, and
                  exchange ideas with other dancers. It also provides the extra
                  benefit of finding products and services that I can avail,
                  which I can be assured is going to be of great quality as it
                  comes recommended by people of the hobbycue community. To have
                  discussions, to get visibility, and to be able to safely
                  explore various hobbies and activities in my city, all under
                  one roof, is an excellent idea and I highly recommend it.
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-10 w-full">
                  <div className="bg-deep_purple-100 flex md:flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[19px] rounded-lg w-[67%] md:w-full">
                    <Button
                      className="flex h-10 items-center justify-center md:ml-[0] ml-[13px] md:mt-0 my-[11px] w-10"
                      shape="circle"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_playarrowblack24dp.svg"
                        alt="playarrowblackTwo"
                      />
                    </Button>
                    <SeekBar
                      inputValue={[0]}
                      trackColors={["", "#ffffff"]}
                      thumbClassName="h-3 bg-deep_purple-400 w-3 flex justify-center items-center rounded-[50%] outline-none"
                      className="flex h-3 ml-10 md:ml-[0] md:mt-0 my-[25px] rounded-[1px] w-[65%]"
                      trackClassName="h-[3px] flex rounded-[1px] w-full"
                    />{" "}
                    <Text
                      className="ml-3 md:ml-[0] text-deep_purple-400 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      0:00
                    </Text>
                    <div className="h-[60px] md:h-[62px] mb-0.5 ml-12 md:ml-[0] relative w-[10%] md:w-full">
                      <Img
                        className="absolute h-[60px] inset-y-[0] my-auto right-[0] rounded-[50%] w-[60px]"
                        src="images/img_ellipse26.png"
                        alt="ellipseTwentySix"
                      />
                      <Img
                        className="absolute bottom-[0] h-8 left-[0] w-8"
                        src="images/img_micblack24dp1.svg"
                        alt="micblack24dpOne"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row gap-6 items-center justify-between w-[27%] md:w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse12.png"
                      alt="ellipseTwelve"
                    />
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-deep_purple-400 text-lg tracking-[0.36px]"
                        size="txtPoppinsSemiBold18"
                      >
                        Shubha Nagarajan
                      </Text>
                      <Text
                        className="mt-1 text-light_blue-700 text-sm tracking-[0.28px]"
                        size="txtPoppinsRegular14Lightblue700"
                      >
                        Classical Dancer
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50_01 flex flex-col items-center justify-end p-[30px] sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start max-w-[1240px] mt-[70px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
              <div className="flex flex-col gap-[30px] items-start justify-start">
                <Text
                  className="italic text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtPoppinsMediumItalic36"
                >
                  <span className="text-black-900 font-poppins text-left font-medium italic">
                    Your{" "}
                  </span>
                  <span className="text-deep_purple-400 font-poppins text-left font-medium italic">
                    Hobby
                  </span>
                  <span className="text-black-900 font-poppins text-left font-medium italic">
                    , Your{" "}
                  </span>
                  <span className="text-light_blue-700 font-poppins text-left font-medium italic">
                    Community...
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[147px] text-center text-xl"
                  shape="round"
                  color="deep_purple_400"
                  size="sm"
                  variant="fill"
                >
                  Get started
                </Button>
              </div>
              <Button
                className="flex h-10 items-center justify-center mb-[7px] md:mt-0 mt-[83px] shadow-bs w-10"
                shape="circle"
                color="white_A700"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-4"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
              </Button>
            </div>
            <Img
              className="h-[302px]"
              src="images/img_group99.svg"
              alt="groupNinetyNine"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col md:gap-10 gap-[60px] items-center justify-end pt-[60px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1217px] mx-auto md:px-5 w-full">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsBold14"
              >
                Hobbycue
              </Text>
              <Text
                className="mt-4 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                About Us
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Our Services
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Work with Us
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                FAQ
              </Text>
              <a
                href="javascript:"
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
              >
                <Text size="txtPoppinsRegular14">Contact Us</Text>
              </a>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsBold14"
              >
                How Do I
              </Text>
              <a
                href="javascript:"
                className="mt-4 text-black-900_01 text-sm tracking-[0.07px]"
              >
                <Text size="txtPoppinsRegular14">Sign Up</Text>
              </a>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Add a Listing
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Claim Listing
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Post a Query
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Add a Blog Post
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Other Queries
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsBold14"
              >
                Quick Links
              </Text>
              <Text
                className="mt-4 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Listings
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Blog Posts
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Shop / Store
              </Text>
              <Text
                className="mt-2 text-black-900_01 text-sm tracking-[0.07px]"
                size="txtPoppinsRegular14"
              >
                Community
              </Text>
            </div>
            <div className="flex md:flex-1 flex-col gap-[50px] items-center justify-start w-[30%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900_01 text-sm tracking-[0.07px]"
                  size="txtPoppinsBold14"
                >
                  Social Media
                </Text>
                <div className="flex flex-row gap-6 items-center justify-between w-full">
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_104498facebookicon.svg"
                      alt="104498facebooki"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_5296514birdtw.svg"
                      alt="5296514birdtw"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_5335781camera.svg"
                      alt="5335781camera"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_5279116pinpin.svg"
                      alt="5279116pinpin"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_843777googleg.svg"
                      alt="843777googleg"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_overflowmenu.svg"
                      alt="overflowmenu"
                    />
                  </Button>
                  <Button
                    className="flex h-6 items-center justify-center rounded-[50%] w-6"
                    shape="circle"
                    color="blue_gray_50"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-4"
                      src="images/img_4375108logotelegramicon.svg"
                      alt="4375108logotele"
                    />
                  </Button>
                  <div className="bg-blue_gray-50 flex flex-col h-6 items-center justify-start p-1 rounded-[50%] w-6">
                    <div className="flex flex-col h-4 items-center justify-start py-0.5 w-4">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-3"
                          src="images/img_lock.svg"
                          alt="lock"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-black-900_01 text-sm tracking-[0.07px]"
                  size="txtPoppinsBold14"
                >
                  Invite Friends
                </Text>
                <div className="bg-white-A700 border border-deep_purple-400 border-solid flex flex-row items-center justify-between pl-4 rounded-lg w-full">
                  <Text
                    className="text-gray-500 text-xs"
                    size="txtPoppinsRegular12Gray500"
                  >
                    Email ID
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold min-w-[59px] rounded-br-lg rounded-tr-lg text-center text-xs tracking-[0.06px]"
                    color="deep_purple_400"
                    size="md"
                    variant="fill"
                  >
                    Invite
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex flex-col items-center justify-start p-[30px] sm:px-5 w-full">
            <Text
              className="text-black-900_01 text-sm tracking-[0.07px]"
              size="txtPoppinsMedium14"
            >
              © Purple Cues Private Limited
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageExploreListPage;
