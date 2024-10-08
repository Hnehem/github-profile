import "./SearchUser.css";
import mySearch from "../assets/Search.svg";

export default function SearchUser() {
  return (
    <div className="searchContainer">
      <div className="search">
        <img src={mySearch} alt="search" />
        <input type="text" placeholder="username" />
      </div>
    </div>
  );
}
