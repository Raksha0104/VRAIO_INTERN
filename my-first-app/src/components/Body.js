import React from "react";
import Card from "./Card";

export default function Body() {
  const condition = "This is my first react app";
  const cardData = [
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "9mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "10mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "11mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "12mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "13mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "14mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "15mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "16mins",
    },
    {
      imageUrl: "",
      description: "This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
      time: "17mins",
    }
  ];
  return (
    <div className="container">
      <div className="row">
  
        {/* {condition == "This is my first react app" ? "dfghj" :"This is test"} */}
        {/* {condition == "This is my first react app" && "dfghj" } */}
        {cardData.map((data, index) => {
          return (
            
            <Card
              // key={index}
              imageUrl={data.imageUrl}
              description={data.description}
              time={data.time}
            />
          );
        })}
      </div>
    </div>
  );
}
