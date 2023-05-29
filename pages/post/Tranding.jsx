import Link from "next/link";
import firebase from "../services/client";
import React, { useEffect, useState } from "react";
import { app, db } from "../services/client";
import { getDocs, collection } from "firebase/firestore";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Tranding = () => {
  const databaseRef = collection(db, "POSTS/8O5FcdbI3OSdlGGogVR1/Homepage");

  const [data, setData] = useState([]);
  const storage = getStorage(app);
  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setData(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <Nav/> */}
      <div className="w-full flex justify-center items-center z-[-1]">
        <div className="w-[300px] h-[300px] flex justify-center items-center absolute top-[10rem] z-[-1] lg:w-[900px] lg:h-auto">
          <div className="w-[300px] h-[300px]  flex overflow-x-scroll rounded-lg border bg-white shadow-2xl drop-shadow-3xl lg:h-auto lg:w-[900px] ">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data.map((data) => {
                return (
                  <>
                    <SwiperSlide>
                      <div className="w-full grid grid-cols-1 gap-[20px] p-[10px] flex-none rounded-lg ">
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-[200px] flex overflow-hidden rounded-lg lg:w-[600px]">
                            {data?.imageUrls?.map((img) => {
                              return (
                                <div className="w-full grid grid-cols-1 gap-[20px] p-[10px] flex-none rounded-lg ">
                                  <img
                                    src={img}
                                    className="w-[200px] px-[1rem] lg:w-[600px]"
                                  />
                                </div>
                              );
                            })}
                          </div>
                          <div className="w-full flex flex-col items-center justify-center">
                            <h1 className="text-[25px]">{data.title}</h1>
                            <h2 className="text-[15px] text-gray-500">
                              {data.details}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
            {/* <div className="w-[300px] h-[300px] flex justify-center items-center absolute top-[10rem] z-[-1] lg:w-[900px] lg:h-auto">
          <div className="w-[300px] h-[300px]  flex overflow-x-scroll rounded-lg border bg-white shadow-2xl drop-shadow-3xl lg:h-auto lg:w-[900px] ">
            {data.map((data) => {
              return (
                <>
                  <div className="w-full grid grid-cols-1 gap-[20px] p-[10px] flex-none rounded-lg ">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-[200px] flex overflow-hidden rounded-lg lg:w-[600px]">
                        {data?.imageUrls?.map((img) => {
                          return (
                            <div className="w-full grid grid-cols-1 gap-[20px] p-[10px] flex-none rounded-lg ">
                              <img
                                src={img}
                                className="w-[200px] px-[1rem] lg:w-[600px]"
                              />
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-[25px]">{data.title}</h1>
                        <h2 className="text-[15px] text-gray-500">
                          {data.details}
                        </h2>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tranding;
