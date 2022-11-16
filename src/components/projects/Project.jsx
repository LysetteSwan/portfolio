import React from "react";
import "./styles.css";
export default function Project({ title, subTitle, description, img, link }) {
  return (
    <div className="projectContainer">
      <img src={img} className="codeImg" />
      <section className="textContainer">
        <div className="gitHubContainerQuizler">
          {" "}
          <h3>{title} </h3>
          <a href={link}>
            <img
              src="https://cdn.icon-icons.com/icons2/2368/PNG/512/github_logo_icon_143772.png"
              className="githubLogo"
            />
          </a>
        </div>
        <h4>{subTitle}</h4>
        <p>{description}</p>
      </section>
    </div>
  );
}
