import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the hidden water fall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the crystal clear waters of the islands of Bali"
              label="Leisure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Up for a challenge? Climb some of the worlds largest summits"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Explore the deepest depths"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Get lost exploring the Japanese metropolis"
              label="Culture"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
