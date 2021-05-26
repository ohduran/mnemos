import React from "react";
import * as boatAnimatedStyles from "../styles/boatanimated.module.css";

const BoatAnimated = () => {
  return (
    <div className={boatAnimatedStyles.boat}>
      <div className={boatAnimatedStyles.wrap}>
        <div className={boatAnimatedStyles.main}>
          <div className={boatAnimatedStyles.boatTopLayer}>
            <div className={boatAnimatedStyles.top}>
              <div className={boatAnimatedStyles.pole}></div>
              <div className={boatAnimatedStyles.help}>
                <span></span>
              </div>
            </div>
            <div className={boatAnimatedStyles.bottom}></div>
          </div>
          <div className={boatAnimatedStyles.boatMidLayer}>
            <div className={boatAnimatedStyles.top}></div>
            <div className={boatAnimatedStyles.bottom}></div>
          </div>
          <div className={boatAnimatedStyles.boatBotLayer}>
            <div className={boatAnimatedStyles.top}></div>
            <div className={boatAnimatedStyles.bottom}></div>
          </div>
        </div>
      </div>
      <div className={boatAnimatedStyles.water}>
        <div
          className={`${boatAnimatedStyles.drops} ${boatAnimatedStyles.clearfix} ${boatAnimatedStyles.drops1}`}
        >
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropA}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropB}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropC}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropD}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropE}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropF}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropG}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropH}`}
          ></span>
        </div>
        <div
          className={`${boatAnimatedStyles.drops} ${boatAnimatedStyles.clearfix} ${boatAnimatedStyles.drops2}`}
        >
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropA}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropB}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropC}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropD}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropE}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropF}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropG}`}
          ></span>
          <span
            className={`${boatAnimatedStyles.drop} ${boatAnimatedStyles.dropH}`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default BoatAnimated;
