import "./App.css";
import SearchUser from "./components/SearchUser";
import UserProfile from "./components/UserProfile";
import UserRepositories from "./components/UserRepositories";

function App() {
  return (
      <div id="container">
        <SearchUser />
        <UserProfile />
        <UserRepositories />
      </div>
  );
}

export default App;
