import React, { useContext, useEffect, useState } from "react";
import "./Team.css";
import axios from "axios";
import AlertContext from "../../utils/AlertContext";
import useTeams from "../../utils/useTeams";
import Card from "../../utils/Fields/Card";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const { alert, setAlert } = useContext(AlertContext);
  const [core, tech, media, culture] = useTeams(teams);

  const getTeams = async () => {
    try {
      const response = await axios.get(
        "https://waltz-server.onrender.com/admin/teams"
      );
      console.log(response.data.teams);
      setTeams(response.data.teams);
    } catch (e) {
      setAlert({
        isShow: true,
        message: e.response,
      });
    }
  };
  useEffect(() => {
    getTeams();
  }, []);

  return (
    <div className="team-main">
      <div className="hero-team-heading text-center">
        <span className="team-heading-txt shadow">Our Team </span>
      </div>

      <div className="team-container text-light">
        {core.length === 0 ? null : (
          <div class="container text-center mt-5 team-part1">
            <span className="part1-headtxt">CORE TEAM</span>
            <div class="row justify-content-evenly team-part1-content mt-5">
              {core.map((core) => (
                <Card key={core._id} {...core} />
              ))}
            </div>
          </div>
        )}
        {tech.length === 0 ? null : (
          <div class="container text-center mt-5 team-part1 team-body">
            <span className="part1-headtxt">TECH TEAM</span>

            <div class="team-section">
              {tech.map((tech) => (
                <Card key={tech._id} {...tech} />
              ))}
            </div>
          </div>
        )}
        {culture.length === 0 ? null : (
          <div class="container text-center mt-5 team-part1">
            <span className="part1-headtxt">CULTURE TEAM</span>

            <div class="row justify-content-evenly team-part1-content mt-5">
              {culture.map((culture) => (
                <Card key={culture._id} {...culture} />
              ))}
            </div>
          </div>
        )}
        {media.length === 0 ? null : (
          <div class="container text-center mt-5 team-part1">
            <span className="part1-headtxt">MEDIA TEAM</span>

            <div class="row justify-content-evenly team-part1-content mt-5">
              {media.map((media) => (
                <Card key={media._id} {...media} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
