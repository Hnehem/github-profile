/* eslint-disable react/prop-types */
import mitImg from "../assets/Chield_alt.svg";
import nestingImg from "../assets/Nesting.svg";
import starImg from "../assets/Star.svg";
import "../components/Repository.css";

// eslint-disable-next-line react/prop-types
export default function Repository({
  url,
  license,
  forked,
  stared,
  descript,
  title,
  updated,
}) {
  // eslint-disable-next-line react/prop-types
  if (license) license = license.spdx_id;

  function handleClick(url) {
    const repoUrl = url;

    window.open(`${repoUrl}`, "_blank");
  }

  function calcUpdate(lastDate) {
    const currentDate = new Date();
    const last = new Date(lastDate);

    const difference = currentDate.getTime() - last.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let message = days > 1 ? `Updated ${days} days ago.` : `Updated ${days} day ago.`;
    if (days == 0) message = 'Updated today!';

    return <p>{message}</p>;
  }

  const update = calcUpdate(updated);

  return (
    <div
      title="Go to repositoy"
      className="repositoryCard"
      onClick={() => handleClick(url)}
    >
      <p className="repoTitle">{title}</p>
      <p className="repoDescription">{descript}</p>
      <div className="repoData">
        {license && (
          <div>
            <img src={mitImg} alt="chield icon" />
            <p>{license}</p>
          </div>
        )}
        <div>
          <img src={nestingImg} alt="fork icon" />
          <p>{forked}</p>
        </div>
        <div>
          <img src={starImg} alt="star icon" />
          <p>{stared}</p>
        </div>
        {update}
      </div>
    </div>
  );
}
