const Card = ({ name, imageUrl, position, github, linkedin }) => {
  return (
    <div class="profile-card col-4">
      <div class="img">
        <img src={imageUrl} />
      </div>
      <div class="caption">
        <h3>{name}</h3>

        <p className="fs-6">{position}</p>
        {/* <p className="fs-6">IT 2nd Year</p> */}

        <div class="social-links">
          {github ? (
            <a href={github}>
              <i class="fab fa-github"></i>
            </a>
          ) : null}
          {linkedin ? (
            <a href={linkedin}>
              <i class="fab fa-linkedin"></i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Card;
