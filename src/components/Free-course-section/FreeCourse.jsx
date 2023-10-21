import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/html.png";
import courseImg02 from "../../assests/images/js.png";
import courseImg03 from "../../assests/images/css.png";
import courseImg04 from "../../assests/images/c++.png";
import courseImg05 from "../../assests/images/java.png";
import courseImg06 from "../../assests/images/python.png";
import courseImg07 from "../../assests/images/csharp.png";
import courseImg08 from "../../assests/images/c.png";


import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "HTML",
    imgUrl: courseImg01,
  },
  {
    id: "02",
    title: "Javascript",
    imgUrl: courseImg02,
  },

  {
    id: "03",
    title: "CSS",
    imgUrl: courseImg03,
  },

  {
    id: "04",
    title: "C++",
    imgUrl: courseImg04,
  },
  {
    id: "05",
    title: "Java",
    imgUrl: courseImg05,
  },
  {
    id: "06",
    title: "Python",
    imgUrl: courseImg06,
  },
  {
    id: "07",
    title: "C Sharp",
    imgUrl: courseImg07,
  },
  {
    id: "08",
    title: "C programming",
    imgUrl: courseImg08,
  },
];

const FreeCourse = () => {
  const [showAllCourses, setShowAllCourses] = useState(false);
  const displayedCourses = showAllCourses ? freeCourseData : freeCourseData.slice(0, 4);

  const toggleShowAll = () => {
    setShowAllCourses(!showAllCourses);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Programming Languages</h2>
          </Col>

          {displayedCourses.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
        {freeCourseData.length > 4 && (
          <div className="text-center">
            {showAllCourses ? (
              <button className="btn" onClick={toggleShowAll}>
                See Less
              </button>
            ) : (
              <button className="btn" onClick={toggleShowAll}>
                See All
              </button>
            )}
          </div>
        )}
      </Container>
    </section>
  );
};
export default FreeCourse;
