
import "./App.css";
import SearchUser from "./components/SearchUser";
import UserProfile from "./components/UserProfile";
import UserRepositories from "./components/UserRepositories";
import AppContexProvider from "./state/state";

function App() {
  return (
    <AppContexProvider>
      <div id="container">
        <SearchUser />
        <UserProfile />
        <UserRepositories />
      </div>
    </AppContexProvider>
  );
}

export default App;
