import Repository from "./Repository";
import "../components/UserRepositories.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../state/state";
import ReposLoader from "./UI/ReposLoader";

export default function UserRepositories() {
  const { user } = useContext(AppContext);

  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getRepositories = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user.login}/repos`
      );
      const repos = await response.json();

      setRepos(repos);
      setLoading(false);
    };

    getRepositories();
  }, [user.login]);

  function showAllRepos() {
    setShowAll(true);
  }

  function showLess() {
    setShowAll(false);
  }

  let repositories = showAll ? repos : repos.slice(0, 4);
  return (
    <>
      <div id="repositories">
        {!loading &&
          repositories.map((repo) => (
            <Repository
              key={repo.id}
              url={repo.html_url}
              descript={repo.description}
              forked={repo.forks}
              license={repo.license}
              stared={repo.stargazers_count}
              title={repo.name}
              updated={repo.updated_at}
            />
          ))}
        {loading && <ReposLoader />}
      </div>
      {repositories.length > 0 ? (
        <div className="goTo">
          {!showAll && <p onClick={showAllRepos}>View all repositories.</p>}
          {showAll && <p onClick={showLess}>View less</p>}
        </div>
      ) : (
        <div className="goTo">
          <p>No repositories to show!</p>
        </div>
      )}
    </>
  );
}
