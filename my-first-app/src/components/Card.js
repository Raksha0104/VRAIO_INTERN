import React from "react";
import ButtonCard from "./ButtonCard";

export default function Card(props){
    // console.log("Data",props)
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="card ">
            <img src="/Thumbnail.jpg" alt="Thumbnail" />
            <div className="card-body">
              <p className="card-text">
                {props.description}
              </p>
              <ButtonCard time={props.time} />
            </div>
          </div>
        </div>
    );
}