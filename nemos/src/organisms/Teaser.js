import React from "react";
import {TeaserText} from "../molecules";

const Teaser = ({title, children, IconComponent, isOdd}) => {
  return (
    <section
      className={`flex flex-col items-center justify-center min-h-screen ${
        isOdd ? "bg-nord-4" : ""
      }`}
    >
      <div
        className={`my-5 w-11/12 mx-auto flex flex-col justify-between items-center ${
          isOdd ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <TeaserText title={title}>{children}</TeaserText>
        <IconComponent className="mt-5 md:mt-0 h-64 md:h-80 mx-auto" />
      </div>
    </section>
  );
};

export default Teaser;
