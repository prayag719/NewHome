import React from "react";

const FreeCourseCard = (props) => {
  const { imgUrl, title } = props.item;

  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="" className="w-100" />
        <button className="btn free__btn">Learn</button>
      </div>

      <div className="free__course__details">
        <h6>{title}</h6>

        <div className=" d-flex align-items-center gap-5">
          <span className=" d-flex align-items-center gap-2"></span>

          <span className=" d-flex align-items-center gap-2"></span>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseCard;
