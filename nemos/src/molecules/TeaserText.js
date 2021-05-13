import React from "react"
import * as howItWorksStyles from "../styles/how-it-works.module.css"

const TeaserText = ({title, children}) =>{
    return (
        <article className={`w-7/12 md:w-5/12 mx-auto ${howItWorksStyles.wrapper}`}>
            <h3 className="text-xl text-center font-semibold">{title}</h3>
            {children}
        </article>
    )
}

export default TeaserText