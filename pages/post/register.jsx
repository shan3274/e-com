import React from "react";
import { app } from "../services/client";
import { useState,useEffect } from "react";
import {getAuth,createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useRouter } from "next/router";
const register = () => {


  const auth = getAuth();
  const router = useRouter();
  const gitpro = new GithubAuthProvider();
  const googlepro = new GoogleAuthProvider();

  const signup = ()=>{
    createUserWithEmailAndPassword(auth,email,pwd).then((response)=>{
        sessionStorage.setItem('Tokken',response.user)
        router.push('/post');
    });
  }

  const git =()=>{
    signInWithPopup(auth,gitpro).then((response)=>{
        sessionStorage.setItem('Tokken',response.user)
        console.log(response.user);
    })
  }

  const google = ()=>{
    signInWithPopup(auth,googlepro).then((response)=>{
        sessionStorage.setItem('Tokken',response.user)
        console.log(response.user);
    })
  }
  useEffect(()=>{
    
  },[])

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className='w-full h-screen flex flex-col items-center'>
      <input type="text" placeholder="email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      <input type="password" placeholder="password" 
      value={pwd}
      onChange={(e)=>setPwd(e.target.value)}
      />
      <button onClick={signup}>submit</button>
      <button onClick={git}>git</button>
      <button onClick={google}>google</button>
    </div>
  );
};

export default register;
