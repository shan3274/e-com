import { useState } from "react";
import {app} from './services/client'
import {getAuth,createUserWithEmailAndPassword,GithubAuthProvider,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { useRouter } from "next/router";

const Auth = () => {
    const auth = getAuth();
  const router = useRouter();
  const gitpro = new GithubAuthProvider();
  const googlepro = new GoogleAuthProvider();

  const signup = ()=>{
    createUserWithEmailAndPassword(auth,email,pwd).then(()=>{
        router.push('/post');
    });
  }

  const git =()=>{
    signInWithPopup(auth,gitpro).then((response)=>{
        console.log(response.user);
    })
  }

  const google = ()=>{
    signInWithPopup(auth,googlepro).then((response)=>{
        console.log(response.user);
    })
  }

  const [pwd, setPwd] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className='w-[200px] h-[200px] bg-gray-100 drop-shadow-sm rounded-2xl flex flex-col items-center justify-center gap-5 '>

        <div className="border-[.3px] px-7 rounded-2xl bg-white drop-shadow-2xl ">
        <input type="button" value="Login" />
        </div>
    
        <div className="w-[200px] h-[.5px] bg-black"></div>
        <div className="border-[.3px] px-7 rounded-2xl bg-white drop-shadow-2xl">
        <input type="button" value="Google" onClick={google}/>
        </div>
        <div className="border-[.3px] px-7 rounded-2xl bg-white drop-shadow-2xl">
        <input type="button" value="github" onClick={git}/>
        </div>
        {/* <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/> */}
        
    </div>
  )
}

export default Auth