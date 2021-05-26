import React from "react";
import {Helm} from "../icons";

import * as quoteStyles from "../styles/quote.module.css";

const Testimonial = ({children, author, authorImageSrc, className}) => {
  return (
    <div
      className={`${
        className ? className : ""
      } text-nord-0 w-64 sm:w-72 md:w-80 rounded-2xl shadow-lg grid p-1 items-center justify-center relative`}
      style={{
        gridTemplateColumns: "1fr",
        minHeight: "24rem",
      }}
    >
      <div
        className="h-full w-full border border-nord-10 rounded-xl grid col-start-1"
        style={{gridTemplateRows: "max-content 1fr max-content"}}
      >
        <div className="row-start-1 pt-1 flex justify-end items-baseline">
          <div className="flex items-center">
            <span className="text-xs font-family-secondary">Nemos.es</span>
            <Helm className="h-6 w-6 ml-1 mr-1" />
          </div>
        </div>

        <div
          className={`row-start-2 self-center justify-self-center mx-1 pt-5 text-xl ${quoteStyles.quote} `}
        >
          <blockquote className="mt-3 md:mt-5 mx-2 font-semibold">
            {children}
          </blockquote>
        </div>
        <div className="row-start-3 mt-3 md:mt-5 mr-3 pb-3">
          <p className="text-right"> — {author}</p>
          <div className="flex justify-end">
            <img
              className="rounded-full mt-3 h-16 w-16 object-cover shadow-xl border-2 border-nord-6"
              src={authorImageSrc}
              alt={`Foto de ${author}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
