import { useState } from "react";
import Link from "next/link";
import Auth from "./Auth";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const [btn, setBtn] = useState(true);
  const [cat1, setCat1] = useState(false);
  const [cat2, setCat2] = useState(false);
  const [cat3, setCat3] = useState(false);
  const [cat4, setCat4] = useState(false);
  const [cat5, setCat5] = useState(false);
  const [cat6, setCat6] = useState(false);
  const [cat7, setCat7] = useState(false);

  var jsonData = require("./DATA_FETCH.json");

  const [counter, setCounter] = useState(0);
  const [authbtn, setAuthbtn] = useState(false);

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const router = useRouter();

  const [flag, setFlag] = useState(false);

  const fetcData = (value) => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     const results = json.filter((user) => {
    //       return (
    //         value &&
    //         user &&
    //         user.name &&
    //         user.name.toLowerCase().includes(value)
    //       );
    //     });
    //     setResults(results);
    //   });

    const results = jsonData.filter((user) => {
      return (
        value && user && user.name && user.name.toLowerCase().includes(value)
      );
    });
    setResults(results);
  };
  const handleChange = (value) => {
    setSearch(value);
    fetcData(value);
  };

  const open = () => {
    setBtn(false);
    setAuthbtn(false);
  };
  const close = () => {
    setBtn(true);
    setAuthbtn(false);
  };
  useEffect(() => {}, [search]);
  return (
    <main className="w-full">
      <header className="w-full h-[8rem] flex items-center justify-around">
        <div
          className={
            btn
              ? "relative left-[-40px] lg:left-[-40px] z-20"
              : "relative left-[-10px] lg:left-[-40px] z-20"
          }
        >
          {btn ? (
            <svg
              width="25"
              height="89"
              viewBox="0 0 145 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={open}
            >
              <path
                d="M2 2H143"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M2 87H143"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M2 44H143"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          ) : (
            <svg
              width="25"
              height="89"
              viewBox="0 0 145 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={close}
            >
              <path
                d="M2 2H143"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M80 86L143 87"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
              <path
                d="M34 43L143 44"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>
          )}
        </div>
        <div
          className={
            btn
              ? "relative left-[-150px] lg:left-[-13%]"
              : "relative left-[-61px] lg:left-[-13%]"
          }
        >
          <svg
            width="100"
            height="66"
            viewBox="0 0 242 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[70px] sm:w-[100px]"
            onClick={() => router.push("/")}
          >
            <path
              d="M34.516 0.611999L33.504 7.604H8.94V28.304H30.284V35.296H8.94V57.008H35.252V64H0.2V0.611999H34.516ZM43.9575 38.792V31.616H69.9935V38.792H43.9575Z"
              fill="black"
            />
            <path
              d="M101.947 14.412C104.83 14.412 107.467 14.8413 109.859 15.7C112.251 16.4973 114.551 17.816 116.759 19.656L112.711 24.992C110.994 23.7653 109.307 22.876 107.651 22.324C106.056 21.7107 104.278 21.404 102.315 21.404C98.3896 21.404 95.323 22.968 93.115 26.096C90.9683 29.224 89.895 33.8547 89.895 39.988C89.895 46.1213 90.9683 50.66 93.115 53.604C95.2616 56.4867 98.3283 57.928 102.315 57.928C104.216 57.928 105.964 57.652 107.559 57.1C109.154 56.4867 110.932 55.536 112.895 54.248L116.759 59.768C112.343 63.3253 107.406 65.104 101.947 65.104C95.3843 65.104 90.2016 62.896 86.399 58.48C82.6576 54.064 80.787 47.9613 80.787 40.172C80.787 35.02 81.6456 30.512 83.363 26.648C85.0803 22.784 87.503 19.7787 90.631 17.632C93.8203 15.4853 97.5923 14.412 101.947 14.412ZM144.636 14.412C151.444 14.412 156.718 16.6813 160.46 21.22C164.262 25.7587 166.164 31.9227 166.164 39.712C166.164 44.7413 165.305 49.188 163.588 53.052C161.87 56.8547 159.386 59.8293 156.136 61.976C152.885 64.0613 149.021 65.104 144.544 65.104C137.736 65.104 132.43 62.8347 128.628 58.296C124.825 53.7573 122.924 47.5933 122.924 39.804C122.924 34.7747 123.782 30.3587 125.5 26.556C127.217 22.692 129.701 19.7173 132.952 17.632C136.202 15.4853 140.097 14.412 144.636 14.412ZM144.636 21.22C136.233 21.22 132.032 27.4147 132.032 39.804C132.032 52.132 136.202 58.296 144.544 58.296C152.885 58.296 157.056 52.1013 157.056 39.712C157.056 27.384 152.916 21.22 144.636 21.22ZM228.814 14.412C232.801 14.412 235.99 15.7613 238.382 18.46C240.774 21.0973 241.97 24.6853 241.97 29.224V64H233.506V30.42C233.506 24.164 231.237 21.036 226.698 21.036C224.306 21.036 222.282 21.7413 220.626 23.152C218.97 24.5013 217.192 26.648 215.29 29.592V64H206.826V30.42C206.826 24.164 204.557 21.036 200.018 21.036C197.565 21.036 195.51 21.7413 193.854 23.152C192.198 24.5627 190.45 26.7093 188.61 29.592V64H180.146V15.516H187.414L188.15 22.6C191.769 17.1413 196.43 14.412 202.134 14.412C205.14 14.412 207.685 15.1787 209.77 16.712C211.917 18.2453 213.45 20.392 214.37 23.152C216.272 20.3307 218.357 18.184 220.626 16.712C222.957 15.1787 225.686 14.412 228.814 14.412Z"
              fill="#329A4F"
            />
          </svg>
        </div>
        <div className="absolute top-[6%] left-[12rem] mr-[55px] lg:relative lg:top-[-1.1rem] lg:left-[-20.5rem]">
          <input
            type="text"
            placeholder="search here"
            value={search}
            onChange={(e) => handleChange(e.target.value)}
            className="border-[.5px] border-black w-[150px] h-[30px] absolute left-[45%] top-[6.5%] rounded-3xl px-5 sm:w-[650px] sm:left-[30%] sm:h-[35px]"
          />

          <svg
            width="18"
            viewBox="0 0 71 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-[-140px] top-[8px]  lg:left-[39rem] lg:top-[.5rem]"
          >
            <path
              d="M24 26L63.1879 50.8256"
              stroke="black"
              stroke-width="15"
              stroke-linecap="round"
            />
            <path
              d="M47.5 26C47.5 39.072 37.3349 49.5 25 49.5C12.6651 49.5 2.5 39.072 2.5 26C2.5 12.928 12.6651 2.5 25 2.5C37.3349 2.5 47.5 12.928 47.5 26Z"
              fill="white"
              stroke="black"
              stroke-width="5"
            />
          </svg>
        </div>

        <div
          className={
            btn
              ? " lg:block hidden absolute left-[80px] top-[110px] z-10 lg:relative lg:left-[rem] lg:top-[0rem]"
              : "absolute left-[80px] top-[110px] z-10 lg:relative lg:left-[rem] lg:top-[0rem]"
          }
        >
          <svg
            width="30"
            viewBox="0 0 308 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // className={
            //   // btn
            //     // ? "hidden sm:block sm:absolute sm:top-[-5.6rem] right-[16rem]"
            //     "relative left-[7rem]"
            // }
          >
            <g filter="url(#filter0_d_0_1)">
              <circle cx="154" cy="150" r="150" fill="white" />
              <circle
                cx="154"
                cy="150"
                r="147.5"
                stroke="black"
                stroke-width="5"
              />
            </g>
            <g filter="url(#filter1_d_0_1)">
              <path
                d="M99 126C99 100.595 119.595 80 145 80H162C187.405 80 208 100.595 208 126V126H99V126Z"
                fill="white"
              />
              <path
                d="M145 85H162C182.951 85 200.232 100.715 202.698 121H104.302C106.768 100.715 124.049 85 145 85Z"
                stroke="black"
                stroke-width="10"
              />
            </g>
            <path
              d="M70 123H237C239.761 123 242 125.239 242 128V143.5C242 192.377 202.377 232 153.5 232C104.623 232 65 192.377 65 143.5V128C65 125.239 67.2386 123 70 123Z"
              fill="white"
              stroke="black"
              stroke-width="10"
            />
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="308"
                height="308"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_0_1"
                x="95"
                y="80"
                width="117"
                height="54"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          className={
            btn
              ? " lg:block hidden relative top-[110px] left-[80px] z-50  lg:left-[-12%] lg:top-[-1%] xl:left-[-10%] 2xl:left-[-12%]"
              : "relative top-[60px] left-[-73%] z-50  lg:left-[-12%] lg:top-[-1%] xl:left-[-10%] 2xl:left-[-12%] "
          }
        >
          <svg
            width="30"
            viewBox="0 0 308 308"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // className={
            //   btn
            //     ? "hidden sm:flex "
            //     :"absolute top-[6.5%] right-[15%]"
            // }
            onClick={() => {
              setBtn(true);
             router.push('/Auth')
            }}
          >
            <g filter="url(#filter0_d_0_1)">
              <circle cx="154" cy="150" r="150" fill="white" />
              <circle
                cx="154"
                cy="150"
                r="147.5"
                stroke="black"
                stroke-width="5"
              />
            </g>
            <path
              d="M214 202V231H94V202C94 168.863 120.863 142 154 142C187.137 142 214 168.863 214 202Z"
              fill="white"
              stroke="black"
              stroke-width="10"
            />
            <g filter="url(#filter1_d_0_1)">
              <ellipse cx="151.5" cy="116.5" rx="51.5" ry="52.5" fill="white" />
              <path
                d="M198 116.5C198 142.825 177.091 164 151.5 164C125.909 164 105 142.825 105 116.5C105 90.1754 125.909 69 151.5 69C177.091 69 198 90.1754 198 116.5Z"
                stroke="black"
                stroke-width="10"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="0"
                y="0"
                width="308"
                height="308"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_0_1"
                x="96"
                y="64"
                width="111"
                height="113"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </header>
     
      <div
        className={
          btn
            ? "hidden"
            : " flex flex-col w-[10rem] lg:w-[20rem] p-10 h-screen justify-start text-center text-[25px] relative top-0 bg-white  gap-6 z-1"
        }
      >
        <Link
          href=""
          onClick={() => {
            setCounter(() => counter * 0);

            if (counter % 2 == 0) {
              setCounter(() => counter + 1);
              setCat1(true);
            } else {
              setCounter(() => counter + 1);
              setCat1(false);
            }
            setCat2(false);
            setCat3(false);
            setCat4(false);
            setCat5(false);
            setCat6(false);
          }}
          className="text-[15px] hover:text-blue-500 hover:scale-[1.01] ease-in-out text-left"
        >
          Category 1
        </Link>
        <div className={cat1 ? " flex flex-col text-left" : "hidden"}>
          <Link href="" className="text-[13px] ">
            item 1
          </Link>
          <Link href="" className="text-[13px]">
            item 2
          </Link>
          <Link href="" className="text-[13px]">
            item 3
          </Link>
          <Link href="" className="text-[13px]">
            item 4
          </Link>
          <Link href="" className="text-[13px]">
            item 5
          </Link>
        </div>
        <Link
          href=""
          onClick={() => {
            setCounter(() => counter * 0);
            if (counter % 2 == 0) {
              setCounter(() => counter + 1);
              setCat2(true);
            } else {
              setCounter(() => counter + 1);
              setCat2(false);
            }
            setCat1(false);
            setCat3(false);
            setCat4(false);
            setCat5(false);
            setCat6(false);
          }}
          className="text-[15px] hover:text-blue-500 hover:scale-[1.01] ease-in-out text-left"
        >
          Category 2
        </Link>
        <div className={cat2 ? " flex flex-col text-left" : "hidden"}>
          <Link href="" className="text-[13px]">
            item 1
          </Link>
          <Link href="" className="text-[13px]">
            item 2
          </Link>
          <Link href="" className="text-[13px]">
            item 3
          </Link>
          <Link href="" className="text-[13px]">
            item 4
          </Link>
          <Link href="" className="text-[13px]">
            item 5
          </Link>
        </div>
        <Link
          href=""
          onClick={() => {
            setCounter(() => counter * 0);
            if (counter % 2 == 0) {
              setCounter(() => counter + 1);
              setCat3(true);
            } else {
              setCounter(() => counter + 1);
              setCat3(false);
            }
            setCat1(false);
            setCat2(false);
            setCat4(false);
            setCat5(false);
            setCat6(false);
          }}
          className="text-[15px] hover:text-blue-500 hover:scale-[1.01] ease-in-out text-left"
        >
          Category 3
        </Link>
        <div className={cat3 ? " flex flex-col text-left" : "hidden"}>
          <Link href="" className="text-[13px]">
            item 1
          </Link>
          <Link href="" className="text-[13px]">
            item 2
          </Link>
          <Link href="" className="text-[13px]">
            item 3
          </Link>
          <Link href="" className="text-[13px]">
            item 4
          </Link>
          <Link href="" className="text-[13px]">
            item 5
          </Link>
        </div>
        <Link
          href=""
          onClick={() => {
            setCounter(() => counter * 0);
            if (counter % 2 == 0) {
              setCounter(() => counter + 1);
              setCat4(true);
            } else {
              setCounter(() => counter + 1);
              setCat4(false);
            }
            setCat1(false);
            setCat3(false);
            setCat2(false);
            setCat5(false);
            setCat6(false);
          }}
          className="text-[15px] hover:text-blue-500 hover:scale-[1.01] ease-in-out text-left"
        >
          Category 4
        </Link>
        <div className={cat4 ? " flex flex-col text-left" : "hidden"}>
          <Link href="" className="text-[13px]">
            item 1
          </Link>
          <Link href="" className="text-[13px]">
            item 2
          </Link>
          <Link href="" className="text-[13px]">
            item 3
          </Link>
          <Link href="" className="text-[13px]">
            item 4
          </Link>
          <Link href="" className="text-[13px]">
            item 5
          </Link>
        </div>
        <Link
          href=""
          onClick={() => {
            setCounter(() => counter * 0);
            if (counter % 2 == 0) {
              setCounter(() => counter + 1);
              setCat5(true);
            } else {
              setCounter(() => counter + 1);
              setCat5(false);
            }
            setCat1(false);
            setCat3(false);
            setCat4(false);
            setCat2(false);
            setCat6(false);
          }}
          className="text-[15px] hover:text-blue-500 hover:scale-[1.01] ease-in-out text-left"
        >
          Category 5
        </Link>
        <div className={cat5 ? " flex flex-col text-left" : "hidden"}>
          <Link href="" className="text-[13px]">
            item 1
          </Link>
          <Link href="" className="text-[13px]">
            item 2
          </Link>
          <Link href="" className="text-[13px]">
            item 3
          </Link>
          <Link href="" className="text-[13px]">
            item 4
          </Link>
          <Link href="" className="text-[13px]">
            item 5
          </Link>
        </div>
        <Link
          href=""
          onClick={() => {
            setCounter(() => counter * 0);
            if (counter % 2 == 0) {
              setCounter(() => counter + 1);
              setCat6(true);
            } else {
              setCounter(() => counter + 1);
              setCat6(false);
            }
            setCat1(false);
            setCat3(false);
            setCat4(false);
            setCat5(false);
            setCat2(false);
          }}
          className="text-[15px] hover:text-blue-500 hover:scale-[1.01] ease-in-out text-left"
        >
          Category 6
        </Link>
        <div className={cat6 ? " flex flex-col text-left" : "hidden"}>
          <Link href="" className="text-[13px]">
            item 1
          </Link>
          <Link href="" className="text-[13px]">
            item 2
          </Link>
          <Link href="" className="text-[13px]">
            item 3
          </Link>
          <Link href="" className="text-[13px]">
            item 4
          </Link>
          <Link href="" className="text-[13px]">
            item 5
          </Link>
        </div>
      </div>
      <div
        className={
          search == ""
            ? "hidden"
            : "lg:w-[600px] absolute left-[12rem] max-h-[20rem] min-h-[2rem] min-w-[9rem] overflow-scroll top-[6rem] lg:left-[28rem] border rounded-lg p-10 bg-white"
        }
      >
        {results.map((data) => {
          return (
            <div className={""}>
              <div
                className=""
                onClick={() => {
                  setSearch(data.name);
                  if (router.push(data.path)) {
                    setSearch("");
                  }
                }}
              >
                {data.name}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
