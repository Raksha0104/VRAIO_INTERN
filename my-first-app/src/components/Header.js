import React from "react";
import MainAction from "./MainAction";
import SecondaryAction from "./SecondaryAction";

export default function Header(props) {
  return (
    <section className="jumbotron">
      <div className="text-center my-5">
        <h1>{props.title}</h1>
        <p>
          {props.description}
        </p>
        <MainAction />
        <SecondaryAction />
      </div>
    </section>
  );
}
