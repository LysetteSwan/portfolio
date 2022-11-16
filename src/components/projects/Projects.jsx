import React from "react";
import "./styles.css";
import apiImg from "../../images/api.png";
import quizlerImg from "../../images/quizler.png";
import sqlImg from "../../images/SQL.png";
import Project from "./Project";
export default function Projects() {
  return (
    <div className="container">
      <section className="title"> Highlighted Projects</section>
      <Project
        title="Twitter API clone"
        subTitle="RESTful Web Service"
        description=" The goal of this group project was to implement a RESTful API using
        Spring Boot, JPA, and PostgreSQL. This project required 30 endpoints
        that emulated features of Twitter such as retweeting, mentioning,
        and creating a user. A database schema was created and Spring
        services and controllers were used to handle requests and perform
        validation. The endpoints were then tested in Postman to ensure
        functionality."
        img={apiImg}
        link="https://github.com/fasttrackd-student-work/spring-assessment-social-media-sprint-10-team-1"
      />
      <Project
        title="Quizler"
        subTitle="CLI Quiz Generator"
        description=" This JavaScript project consisted of custom library for a command
            line application which builds quizzes. The user is able to take a
            quiz the user built or pull random questions from multiple quizzes
            and take a random quiz."
        img={quizlerImg}
        link="https://github.com/fasttrackd-student-work/js-assignment-quizler-LysetteSwan"
      />
      <Project
        title="SQL"
        subTitle="Database Schema"
        description=" The ERD created in PGAdmin consisted of 4 columns: People, Location,
        Interests and Person_Interest. This project is centered around a
        database that connects people who have similar interests, and live
        in close proximity to one another by implementing several query
        statements."
        img={sqlImg}
        link="https://github.com/fasttrackd-student-work/js-assignment-quizler-LysetteSwan"
      />
    </div>
  );
}
