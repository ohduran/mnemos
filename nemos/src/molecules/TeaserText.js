import React from "react"
import * as teaserTextStyles from "../styles/teaser-text.module.css"

const TeaserText = ({title, children}) =>{
    return (
        <article className={`w-9/12 md:w-5/12 mx-auto ${teaserTextStyles.wrapper}`}>
            <h3 className="text-xl text-center font-semibold">{title}</h3>
            {children}
        </article>
    )
}

export default TeaserText