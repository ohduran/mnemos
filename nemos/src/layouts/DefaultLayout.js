import React from "react";
import {Seo} from "../molecules";
import {Footer, NavBar} from "../organisms";

const DefaultLayout = ({children, className}) => {
  return (
    <div
      className={`min-h-screen min-w-screen grid grid-cols-3`}
      style={{
        gridTemplateRows: "max-content 1fr max-content",
      }}
    >
      <Seo
        title={"Nemos"}
        description={"Estudia el PER con viento de popa"}
        article={false}
      />
      <NavBar className="col-start-1 col-span-3" />
      <main
        className={`col-start-1 col-span-3 row-start-2 mb-5 ${
          className ? className : ""
        }`}
      >
        {children}
      </main>
      <Footer className="col-start-1 col-span-3 row-start-3" />
    </div>
  );
};

export default DefaultLayout;
