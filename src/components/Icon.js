import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from 'react-router-dom';


const Icon = () => {
     const navigate=useNavigate()
    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
        
        })
        .catch((error) => {
          navigate("/error");
        });
    };
  return (
    <div className="absolute z-10 mt-2 bg-black border border-gray-300 rounded-md shadow-lg bottom-1">
      <button
        className="p-2 text-white hover:underline"
        onClick={handleSignOut}
      >
     Sign Out of Netflix
      </button>
    </div>
  );
}

export default Icon