import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Daisy Rei Cube </span>
            from <span className="purple"> Iligan City, Philippines.</span>
            <br />
            I am currently a student taking up Bachelor Of Science major in Database Management at MSU NAAWAN.
            <br />
            <br />
            I'm a 21-year-old third child in my family, navigating the adventure of self-discovery with a dash of cool and cute vibes.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          Commit to Jehovah whatever you do,
And your plans will succeed.{" "}
          </p>
          <footer className="blockquote-footer">Proverbs 16:3</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
