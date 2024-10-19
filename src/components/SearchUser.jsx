import "./SearchUser.css";
import mySearch from "../assets/Search.svg";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../state/state";
import SearchLoader from "./UI/SearchLoader";

export default function SearchUser() {
  const { getUser } = useContext(AppContext);

  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const [newUser, setNewUser] = useState("");
  const [debouncedUser, setDebouncedUser] = useState("");
  const [user, setUser] = useState({
    user: undefined,
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
      try {
        const user = await fetch(
          `https://api.github.com/users/${debouncedUser}`
        );

        if (!user.ok) {
          console.log(user);

          throw new Error(user.status);
        }

        const response = await user.json();

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
        setLoading(false);
      } catch (error) {
        if (error.message == "404") {
          setError("Oops! This user doesn't exist");
        } else {
          setError(`There's been an error: ${error.message}`);
        }
        setLoading(false);
      }
    };

    if (debouncedUser) {
      getUser();
    }
  }, [debouncedUser]);

  const onInputChange = () => {
    setError('')
    setLoading(true);
    setNewUser(inputReff.current.value);
  };

  const chosingUser = () => {
    if (error) {
      setNewUser("");
      setUser("");
      return;
    }

    getUser({
      user: { ...user.user },
    });

    setNewUser("");
    setUser("");
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
        {newUser && (
          <div className="newUser" onClick={chosingUser}>
            {loading && <SearchLoader />}
            {!loading && (
              <>
                {error && <div className="error">{error}</div>}
                {!error && (
                  <>
                    <img src={user.user.avatar} alt="user avatar" />
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
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
