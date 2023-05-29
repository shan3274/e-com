import React from "react";
import Nav from "../Nav";
import firebase from "../services/client";
import { useEffect, useState } from "react";
import { app, db } from "../services/client";
import { getDocs, collection } from "firebase/firestore";
import { getDownloadURL, ref, getStorage } from "firebase/storage";
import Link from "next/link";
import { useRouter } from "next/router";
const Tv = () => {
  const databaseRef = collection(db, "POSTS/8O5FcdbI3OSdlGGogVR1/Television");


  const router = useRouter();
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
    <div>
      <Nav />
      
      <div className="w-full h-screen flex justify-center items-center absolute top-[2rem] z-[-1]">
        <div className="w-[1100px] h-[550px] shadow-sm  grid grid-cols-3 p-4 overflow-y-scroll">
          {data.map((data) => {
            return (
              <>
                <div className="w-[350px] h-[200px] m-3 flex flex-col justify-center items-center shadow-lg rounded-lg">
                  <div className="w-full grid grid-cols-1 gap-[20px] p-[10px] flex-none rounded-lg ">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-[200px] flex overflow-hidden rounded-lg">
                        {data?.imageUrls?.map((img) => {
                          return (
                            <div className="w-full grid grid-cols-1 gap-[20px] p-[10px] flex-none rounded-lg">
                              <img src={img} className="w-[200px] px-[1rem]" />
                            </div>
                          );
                        })}
                      </div>
                      <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-[20px] cursor-pointer" onClick={()=>router.push(`/post/data/${data.id}`)}>{data.title}</h1>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default Tv;
