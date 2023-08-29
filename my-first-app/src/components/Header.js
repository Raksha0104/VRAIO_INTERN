import React from "react";

export default function Header() {
  return (
    <section className="jumbotron">
      <div>
        <h1>Album example</h1>
        <p>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <p>
          <a href="#" className="btn btn-primary">
            Main call to action
          </a>
          <a href="#" className="btn btn-secondary">
            Secondary action
          </a>
        </p>
      </div>
    </section>
  );
}
