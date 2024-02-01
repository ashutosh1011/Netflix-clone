import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { AVATAR_URL, LOGO_URL } from "../utils/Common";

const Header = () => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector(store=>store.user)
  const dispatch =useDispatch();
  const navigate=useNavigate();

 useEffect(() => {
   onAuthStateChanged(auth, (user) => {
     if (user) {
       const { displayName, email, uid } = user;
       dispatch(
         addUser({
           id: uid,
           name: displayName,
           email: email,
         })
       );
       navigate("/browse");
     } else {
       dispatch(removeUser(null));
       navigate("/")
     }
   });
 }, []);



  const handleMouseOver = () => {
    setIsDropDownOpen(true);
  };

  const handleMouseOut = () => {
    setIsDropDownOpen(false);
  };








  return (
    <div className=" absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (
        <>
          <div
            className="flex p-2"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <img
              className="w-12 h-12 "
              src={AVATAR_URL}
              alt="userIcon"
            ></img>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              id="dropdown"
              className="p-2"
              onClick={() => setIsDropDownOpen(true)}
            >
              <path d="m14 20 10 10 10-10z"></path>
              <path fill="none" d="M0 0h48v48H0z"></path>
            </svg>

            {isDropDownOpen && (
              <>
                <Icon />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
