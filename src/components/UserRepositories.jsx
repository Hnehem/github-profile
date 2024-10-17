import Repository from "./Repository";
import "../components/UserRepositories.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../state/state";

export default function UserRepositories() {
  const { user } = useContext(AppContext);
  console.log(user.login);

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepositories = async () => {
      const response = await fetch(
        `https://api.github.com/users/${user.login}/repos`
      );
      const repos = await response.json();

      console.log(repos);

      setRepos(repos.slice(0, 4));
    };

    getRepositories();
  }, [user.login]);

  return (
    <div id="repositories">
      {repos.map((repo) => (
        <Repository
          key={repo.id}
          descript={repo.description}
          forked={repo.forks}
          license={repo.license}
          stared={repo.stargazers_count}
          title={repo.name}
          update={repo.updated_at}
        />
      ))}
    </div>
  );
}
