import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import axios from "./axios";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }
    fetchData();
  }, []);
  // {
  //   name: "Ian Somerhalder",
  //   url: "http://images4.fanpop.com/image/photos/16300000/Ian-Somerhalder-2010-Scream-Awards-HD-the-vampire-diaries-actors-16365428-2560-1971.jpg",
  // },
  // {
  //   name: "Selena Gomez",
  //   url: "https://i.pinimg.com/originals/4e/8f/31/4e8f317c308fb7b7af1e460e2403d599.png",
  // },
  // {
  //   name: "Chris Hemsworth",
  //   url: "https://www.biography.com/.image/t_share/MTU0ODUwMjQ0NjIwNzI0MDAx/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg",
  // },
  // {
  //   name: "Taylor Swift",
  //   url: "https://media.vanityfair.com/photos/602c3ebab3de5e8d0957c44f/16:9/w_2000,h_1125,c_limit/VF1421_Taylor_Swift_Tout.jpg",
  // },
  // {
  //   name: "Cilian Murphy",
  //   url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tommy-shelby-cillian-murphy-peaky-blinders-1569234705.jpg?crop=1.00xw:0.334xh;0,0.0270xh&resize=1200:*",
  // },
  // {
  //   name: "Nina Dobrev",
  //   url: "https://64.media.tumblr.com/979fcf946571c171973359499d5f0113/tumblr_o8gc8i6YSk1v79sbao3_r1_1280.jpg",
  // },
  // {
  //   name: "Shelby Wyatt",
  //   url: "https://wallpapercave.com/wp/wp3695520.jpg",
  // },
  // {
  //   name: "Garret Dilahunt",
  //   url: "https://tvline.com/wp-content/uploads/2017/11/garrett.jpg",
  // },
  console.log(people);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  ); //npm install --save react-tinder-card --legacy-peer-deps
}

export default TinderCards;
