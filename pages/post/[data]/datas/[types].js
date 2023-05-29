import React, { useEffect, useState } from "react";
import { db, app } from "../../../services/client";
import "../../../services/client";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { useRouter } from "next/router";

const types = () => {
  const router = useRouter();
  const cat = router.query.data;
  console.log("category", router.query.data, "typec", router.query.type);
  const [values, setValues] = useState(null);
  const [data, setData] = useState([]);
  const datas = async () => {
    const docRef = doc(
      db,
      `POSTS/8O5FcdbI3OSdlGGogVR1/${cat}`,
      router.query.types
    );
    const v = await getDoc(docRef);
    setData(v.data());
  };

  useEffect(() => {
    if (router.query.types) {
      datas();
    }
  }, [router.query.types]);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute top-[3rem] z-[-1]">
        <div className="lg:w-[900px] h-[500px] flex lg:flex-row flex-col justify-around items-center shadow-2xl">
          <div className="lg:w-[400px] w-[300px] flex overflow-x-scroll h-[400px] overflow-y-hidden  items-center rounded-lg">
            {data?.imageUrls?.map((img) => {
              return (
                <div className="w-full grid grid-cols-1 gap-[20px]p-[10px] flex-none h-auto rounded-lg">
                  <img src={img} alt="" className="w-[300px] lg:w-[400px]" />
                </div>
              );
            })}
          </div>
          <div className="lg:w-[400px] h-[300px] flex  flex-col justify-center items-start px-3">
            <p>{data.title}</p>
            <p>{data.brand}</p>
            <p>{data.details}</p>
            {data.manuYear}
            {data.price}
            {data.seller}
          </div>
        </div>
      </div>
    </>
  );
};

export default types;
