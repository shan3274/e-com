import React, { useState,useEffect } from "react";
import firebase from "../services/client";
import { app, db } from "../services/client";

import { collection, addDoc } from "firebase/firestore";
import { getDownloadURL, ref, getStorage, uploadBytes } from "firebase/storage";
import "firebase/storage";

const addpost = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [img, setimg] = useState([]);
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [manuYear, setManuyear] = useState("");
  const [seller, setSeller] = useState("");
  const [types, setTypes] = useState("l");

  console.log('category',types);
  const databaseRef = collection(db, `POSTS/8O5FcdbI3OSdlGGogVR1/${types}`);
  const downloadImageURLs = [];
  const addData = async () => {
    console.log("add data opt", img);
    const storageRef = getStorage();
    const imageURLs = [];

    let ins = 0;
    for (const image of img) {
      const imagRef = ref(
        storageRef,
        `Post/Image/'${Date.now()}-${image.name}`
      );
      imageURLs[ins] = await uploadBytes(imagRef, image);
      getDownloadURL(ref(storageRef, imageURLs[ins].ref.fullPath)).then(
        (response) => downloadImageURLs.push(response)
      );
      ins++;
    }

    console.log('image url',downloadImageURLs)
    const dataShow = {
      brand: brand,
      price: price,
      manuYear: manuYear,
      seller,
      seller,
      title: title,
      details: details,
      imageUrls: downloadImageURLs,
    };
    console.log(dataShow);
    addDoc(databaseRef, dataShow).then(() => {
      alert("done");
      setTitle("");
      setDetails("");
      setBrand("");
      setManuyear("");
      setSeller("");
      setPrice("");
      setimg([]);
      window.location.reload(true);
    });
    
  };
  
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-[300px] h-[70px] flex justify-center items-center my-6 border bg-yellow-400 rounded-lg shadow-slate-500 drop-shadow-xl">
        <label htmlFor="file">Add Pictures +</label>
      </div>
      <input
        className="hidden"
        id="file"
        type="file"
        onChange={(e) => setimg(e.target.files)}
        multiple
      />
      <div className="flex flex-col">
        <label htmlFor="">Product Name</label>
        <input
          type="text"
          className="border w-[300px] h-[35px]"
          placeholder="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-[300px] flex flex-col">
        <label htmlFor="">Product Description</label>
        <textarea
          cols="30"
          rows="2"
          placeholder="Product Description"
          className="border w-[300px] m-3 resize-none relative left-[-.8rem]"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Brand Name</label>
        <input
          type="text"
          className="border w-[300px] h-[35px]"
          placeholder="Brand Name"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Price</label>
        <input
          type="text"
          className="border w-[300px] h-[35px]"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Year of Manufacturing</label>
        <input
          type="text"
          className="border w-[300px] h-[35px]"
          placeholder="Brand Name"
          value={manuYear}
          onChange={(e) => setManuyear(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
      <label htmlFor="">Category</label>
        <select value={types} onChange={(e) => setTypes(e.target.value)} className='border w-[300px] h-[35px]'>
          <option value="Homepage">Home Page</option>
          <option value="Television">Television</option>
          <option value="AirConditioner">Air Conditioner</option>
          <option value="HomeAppliance">Home Appliance</option>
          <option value="Parts">Parts</option>
          <option value="Accessories">Accessories</option>
          
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Seller Name</label>
        <input
          type="text"
          className="border w-[300px] h-[35px]"
          placeholder="Seller Name"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
        />
      </div>
      <button
        className="border rounded-2xl bg-slate-200 w-[300px] h-[35px] m-8 hover:bg-slate-100"
        onClick={addData}
      >
        post
      </button>
    </div>
  );
};

export default addpost;
