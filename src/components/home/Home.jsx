import React from "react";
import "./styles.css";
import resume from "../../Resume.pdf";
export default function Home({ myData }) {
  return (
    <div className="homeContainer">
      <div className="infoAboutMeContainer">
        <h1 className="bubbletext">Hello I'm Lysette, a Software Developer</h1>
        <p className="about">
          I am a fullstack developer living near Phoenix Arizona. I received my
          Bachelor's degree in the Science of Nursing from Northern University
          of Arizona. I am a Registered Nurse who found a passion for softwear
          development and began self-studying for a year prior to completing the
          CooksSystem FastTrack Program. In my free time I enjoy reading,
          listening to podcasts and spending time with my two year old.
        </p>
      </div>
      <div className="avatarAndInfoContainer">
        <div className="imgContainer">
          <img src={myData.avatar_url} className="avatar" />
        </div>
        <div className="infoContainer">
          <p> {myData.bio}</p>
          <a href={resume} download="LysettesResume" className="resumeButton">
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
