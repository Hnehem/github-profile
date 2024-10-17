import { useContext, useEffect } from "react";
import ProfileDetail from "./ProfileDetail";
import "./UserProfile.css";
import { AppContext } from "../state/state";

export default function UserProfile() {
  const {user, getUser} = useContext(AppContext);
  const {avatar, followers, following, location, bio, userName} = user;

  useEffect(() => {
    const setUser = async () => {
      const user = await fetch(`https://api.github.com/users/github`);

      const response = await user.json();
      
      getUser({
        user: {
          login: response.login,
          userName: response.name,
          bio: response.bio,
          avatar: response.avatar_url,
          following: response.following,
          followers: response.followers,
          location: response.location,
        },
      })
    }

    setUser()
  }, []);

  return (
    <div id="profile">
      <div className="profileInfo">
        <div className="profileImg">
          <img src={avatar} alt="User avatar" />
        </div>
        <div className="profileData">
          <ProfileDetail title="Followers" value={followers} />
          <ProfileDetail title="Following" value={following} />
          {location && <ProfileDetail title="Location" value={location} />}
        </div>
      </div>
      <div className="user">
        <p className="userName">{userName}</p>
        <p className="userDescription">{bio}</p>
      </div>
    </div>
  );
}
