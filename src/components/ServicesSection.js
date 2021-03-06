import React from "react";

// Styles
import styled from "styled-components";
import { About, Description, Image } from "../utils/style/styles";

// Animation

// Icons
import clock from "../assets/img/clock.svg";
import diaphragm from "../assets/img/diaphragm.svg";
import money from "../assets/img/money.svg";
import teamwork from "../assets/img/teamwork.svg";
import home2 from "../assets/img/home2.png";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>

      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
`;

const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 17rem;
  .icon {
    display: flex;
    align-items: center;

    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 0.75rem 1rem;
    }
  }
`;

export default ServicesSection;
