
import React,{useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Login(){
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

 const login=async(e)=>{
  e.preventDefault();
  await signInWithEmailAndPassword(auth,email,password);
  window.location="/dashboard";
 };

 return(
  <form onSubmit={login}>
   <h2>Login</h2>
   <input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
   <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
   <button>Login</button>
  </form>
 );
}
