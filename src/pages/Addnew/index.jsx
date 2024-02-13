import React from "react";

import { Img, List, Text } from "components";
import Header from "components/Header";

const AddnewPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins gap-6 items-center justify-start mx-auto pb-[219px] w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs1 w-full" />
        <div className="bg-white-A700 flex flex-col items-center justify-start p-10 md:px-5 rounded-lg w-[59%] md:w-full">
          <div className="flex flex-col gap-8 items-center justify-start w-full">
            <div className="flex flex-row gap-4 items-start justify-center w-[34%] md:w-full">
              <Img className="h-10 w-10" src="images/img_add.svg" alt="add" />
              <Text
                className="mt-[3px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                Add Your Listing
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 border-2 border-deep_purple-400 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start mt-2 w-[36%] md:w-full">
                    <div className="flex flex-row gap-2 items-end justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_groupsblack24dp.svg"
                        alt="groupsblack24dp"
                      />
                      <Text
                        className="mb-0.5 mt-[7px] text-black-900_01 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        People
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mb-2 text-black-900_01 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    An Individual or Organization. Teacher, Coach, Professional
                    or Online Seller. Company, Business or Association.
                  </Text>
                </div>
                <div className="bg-white-A700 border-2 border-light_green-700 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start mt-2 w-[32%] md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_locationonblack24dp.svg"
                        alt="locationonblack"
                      />
                      <Text
                        className="text-black-900_01 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Place
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mb-2 text-black-900_01 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    An Address. Classroom, Shop, Performance or Event Venue,
                    Sports Arena, Play Area, Studio, School or Campus.
                  </Text>
                </div>
                <div className="bg-white-A700 border-2 border-red-400 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start mt-2 w-2/5 md:w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-full">
                      <Img
                        className="h-10 w-10"
                        src="images/img_cart_red_400.svg"
                        alt="cart"
                      />
                      <Text
                        className="text-black-900_01 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Product
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mb-2 text-black-900_01 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    An Item that you can Book, Buy or Rent. Appointment, Ticket,
                    or Voucher. Equipment, Instrument or Activity Kit.
                  </Text>
                </div>
                <div className="bg-white-A700 border-2 border-light_blue-700 border-solid flex flex-1 flex-col gap-6 items-start justify-start p-4 rounded-lg w-full">
                  <div className="flex flex-col items-center justify-start mt-2 w-[43%] md:w-full">
                    <div className="flex flex-row gap-2 items-end justify-start w-full">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 w-10"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <Text
                        className="mb-0.5 mt-[7px] text-black-900_01 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Program
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mb-2 text-black-900_01 text-sm w-full"
                    size="txtPoppinsRegular14"
                  >
                    An Event with Venue and Date. Meetup, Workshop or Webinar.
                    Exhibition, Performance or Competition.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddnewPage;
