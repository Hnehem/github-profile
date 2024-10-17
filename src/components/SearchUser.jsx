import "./SearchUser.css";
import mySearch from "../assets/Search.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../state/state";

export default function SearchUser() {
  const { getUser } = useContext(AppContext);

  const [newUser, setNewUser] = useState("");
  const [debouncedUser, setDebouncedUser] = useState("");
  const [user, setUser] = useState({
    user: undefined,
    reposUrl: "",
  });

  const inputReff = useRef();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDebouncedUser(newUser);
    }, 500);


    return () => {
      clearTimeout(timeOut);
    };
  }, [newUser]);

  useEffect(() => {
    // if (!debouncedUser.length > 0) return;

    const getUser = async () => {
      const user = await fetch(`https://api.github.com/users/${debouncedUser}`);

      const response = await user.json();
      console.log(response);

      setUser({
        user: {
          login: response.login,
          userName: response.name,
          bio: response.bio,
          avatar: response.avatar_url,
          following: response.following,
          followers: response.followers,
          location: response.location,
        },
        reposUrl: response.repos_url,
      });
    };

    if (debouncedUser) {
      getUser();
    }
  }, [debouncedUser]);

  const onInputChange = () => {
    setNewUser(inputReff.current.value);
  };

  const chosingUser = () => {
    getUser({
      user: { ...user.user },
      // resposUrl: user.reposUrl,
    });

    setNewUser('')
    setUser('')
  };

  return (
    <div className="searchContainer">
      <div className="search">
        <img src={mySearch} alt="search" />
        <input
          ref={inputReff}
          value={newUser}
          onChange={onInputChange}
          type="text"
          placeholder="username"
        />
        {user.user && (
          <div className="newUser" onClick={chosingUser}>
            <img src={user.user.avatar} alt="" />
            <div className="newUserInfo">
              <p>{user.user.userName}</p>
              {user.user.bio && (
                <span>
                  {user.user.bio.length > 64
                    ? user.user.bio.slice(0, 64) + "..."
                    : user.user.bio}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
