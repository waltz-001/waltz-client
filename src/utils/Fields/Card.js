import "./Card.css";
const Card = ({ name, imageUrl, position, description, github, linkedin }) => {
  return (
    <div class="profile-card col-4">
      <div class="img">
        <img src={imageUrl} />
      </div>
      <div class="caption">
        <h3 className="texting">{name}</h3>

        <p className="texting">{position}</p>
        <p className="texting">{description}</p>

        <div class="social-links">
          {github ? (
            <a href={github} target="_blank" rel="noreferrer">
              <i class="fab fa-github"></i>
            </a>
          ) : null}
          {linkedin ? (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Card;
