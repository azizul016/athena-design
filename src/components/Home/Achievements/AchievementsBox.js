import React from "react";
import { faSmile, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AchievementsBox = (props) => {
  const { img, num, title } = props.data;
  return (
    <div className="col-md-6 col-sm-12">
      <div className="achi-wrapper d-flex align-items-center">
        <div className="achi-img">
          {img ? (
            <img style={{ width: "50px" }} src={img} alt="images" />
          ) : (
            <FontAwesomeIcon
              style={{
                fontSize: "50px",
                color: "#5d5d5d",
                borderRadius: "50%",
              }}
              className="icons"
              icon={faSmile}
            />
          )}
        </div>
        <div className="achi-info">
          <h1>{num}</h1>
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementsBox;
