import mitImg from '../assets/Chield_alt.svg';
import nestingImg from '../assets/Nesting.svg';
import starImg from '../assets/Star.svg';
import '../components/Repository.css'

// eslint-disable-next-line react/prop-types
export default function Repository({license, forked, stared, update, descript, title}) {

  // eslint-disable-next-line react/prop-types
  if (license) license = license.spdx_id;
  console.log(license);
  
  return (
    <div className="repositoryCard">
      <p className="repoTitle">{title}</p>
      <p className="repoDescription">
        {descript}
      </p>
      <div className="repoData">
        {license && <div>
            <img src={mitImg} alt="chield icon" />
            <p>{license}</p>
        </div>}
        <div>
            <img src={nestingImg} alt="fork icon" />
            <p>{forked}</p>
        </div>
        <div>
            <img src={starImg} alt="star icon" />
            <p>{stared}</p>
        </div>
        <p>updated 4 day ago</p>
      </div>
    </div>
  );
}
