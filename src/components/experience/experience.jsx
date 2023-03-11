import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
export default function experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <h4>Javascript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React JS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon" />
              <h4>REST</h4>
            </article>
          </div>
        </div>
        <div className="otherskills">
          <h3>Programming Languages </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Java</h4>
              </article>
              <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Python</h4>
            </article>
          </div>
        </div>
        <div className="databases">
          <h3>Databases </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>PostgreSQL</h4>
              </article>
              <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon" />
              <h4>MongoDb</h4>
            </article>
          </div>
        </div>
        <div className="databases">
          <h3>Other Technologies </h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Docker</h4>
              </article>
              <article className="experience__details">
              <BsFillPatchCheckFill  className="experience__details-icon"/>
              <h4>AWS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
