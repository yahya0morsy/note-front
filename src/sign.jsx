import axios from "axios";
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Outlet, Link, Navigate,redirect } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
function Sign(){
  let navigate = useNavigate();
  const [y ,sety] =useState()

  async function submit(){
    await axios.post('http://localhost:8000/log/auth', {
      username:document.getElementById("user").value,
      password:document.getElementById("pass").value
    }, { withCredentials: true })
    .then(function (response) {
      if(response.data=="logged in"){navigate('/try', { replace: true })};console.log('logged in');
      sety(response.data)
      
    })
    .catch(function (error) {
      console.log(error)
      checker(error)
    })
   
  
  }
  function checker(responde){
    if(responde){
      document.getElementById("state").textContent = "wrong username or password";
    }
   }
  function passt(){
    document.getElementById("state").textContent = "wrong username or password";
    }
  return(
    <div className="min-h-screen min-w-screen bg-slate-800 flex flex-col justify-center">

        <div className="sign bg-gray-500 place-self-center  flex flex-col place-items-start border-4 border-black">
        <div className="sm:text-lg md:text-xl lg:text-2xl my-2 mx-2">username: <input type="text" className="h-10 w-48 border-2 border-black rounded-md" id="user"></input></div>
        <div className="sm:text-lg md:text-xl lg:text-2xl my-2 mx-2">password: <input type="text" className="h-10 w-48 border-2 border-black rounded-md" id="pass"></input></div>
        <div className="flex flex-row ">
        <button className="w-20 h-8 mx-2 bg-white rounded-md hover:bg-blue-500 hover:shadow-md hover:shadow-black duration-150" onClick={()=>submit()}>submit</button>
        <div id="state" className="">enter your login data</div>
        </div>
        <br/>
        <div className="place-self-center"><button className="text-lg text-red-700" onClick={()=>navigate('/addUser', { replace: true })}>resigner</button></div>
        


        </div>
        



    </div>
  )  
}
export default Sign