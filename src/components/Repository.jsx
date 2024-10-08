import mitImg from '../assets/Chield_alt.svg';
import nestingImg from '../assets/Nesting.svg';
import starImg from '../assets/Star.svg';
import '../components/Repository.css'

export default function Repository() {
  return (
    <div className="repositoryCard">
      <p className="repoTitle">.github</p>
      <p className="repoDescription">
        Client side accessibility error scanner.
      </p>
      <div className="repoData">
        <div>
            <img src={mitImg} alt="chield icon" />
            <p>MIT</p>
        </div>
        <div>
            <img src={nestingImg} alt="shared icon" />
            <p>72</p>
        </div>
        <div>
            <img src={starImg} alt="star icon" />
            <p>18437</p>
        </div>
        <p>updated 4 day ago</p>
      </div>
    </div>
  );
}
