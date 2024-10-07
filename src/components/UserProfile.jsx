import ProfileDetail from "./ProfileDetail";
import './UserProfile.css';

export default function UserProfile() {
    return (
        <div id='profile'>
            <div className="profileInfo">
                <div className="profileImg">
                <img src="" alt="" />
            </div>
            <div className="profileData">
                <ProfileDetail title='Followers' value='29876' />
                <ProfileDetail title='Followers' value='29876' />
                <ProfileDetail title='Followers' value='29876' />
            </div>
            </div>
            <div className="user">
                <p className="userName">GitHub</p>
                <p className="userDescrption">How people build software.</p>
            </div>
        </div>
    )
}