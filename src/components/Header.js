import { useDispatch, useSelector } from "react-redux";
import Icon from "./Icon";
import { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { AVATAR_URL, LOGO_URL, SupportedLanguage } from "../utils/Common";
import { toggleGPTSearchView } from "../utils/GPTSlice";
import { setLang } from "../utils/configSlice";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const user = useSelector((store) => store.user);
  const GPTView = useSelector((store) => store.gpt.showGPTSearchView);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        navigate("/");
      }
    });
  }, []);

  const handleMouseOver = () => {
    setIsDropDownOpen(true);
  };

  // const handleMouseOut = () => {
  //   setIsDropDownOpen(false);
  // };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(setLang(e.target.value));
  };

  return (
    <div className=" absolute w-screen px-32 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {user && (
        <>
          <div className="flex p-2">
           {GPTView && <select
              className="p-2 m-2 bg-gray-800 text-white"
              onChange={handleLanguageChange}
            >
              {SupportedLanguage.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
}
            <button
              className="py-2 px-4 bg-purple-400 text-white my-2 mx-4 rounded-lg h-10"
              onClick={handleGPTSearchClick}
            >
             {GPTView?"Home":"Search"}
            </button>
            <div onMouseOver={handleMouseOver}>
              <img className="w-12 h-12 " src={AVATAR_URL} alt="userIcon"></img>
            </div>

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
