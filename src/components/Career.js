import React from "react";
import {
  BsCheck2Circle,
  BsCheckCircleFill,
  BsCheckCircle,
} from "react-icons/bs";
import { NavLink } from "react-router-dom";
import png1 from "../students2.png";
const Career = () => {
  return (
    <>
      <div className="container-fluid mt-3 row align-items-center">
        <div class="hell col-12 text-center  about-banner ">
          <h2>Career</h2>
          <p>
            It is a pleasure and sorrows, that they should not be elected in
            some cases we may be able to do. It was from this, or something
            similar because it is pleasure, look for the debts. No one of these
            will open the very laborious, all the consequences of things, of
            current events.
          </p>
        </div>
      </div>
      <div class="col-12 my-5">
        <section id="course-details" class="course-details">
          <div class="container aos-init aos-animate" data-aos="fade-up">
            <div class="row">
              <div class="col-lg-8">
                <img src={png1} class="img-fluid my-3" alt="" />
                <h3>Vacancy details</h3>
                <p>
                  Required experience and energetic female English teacher for
                  Pre-Primary school. Teacher should be fluent in english. Send
                  your resume to this mail id blueswanplayschool@gmail.com. We
                  will intimate for interview.
                </p>
              </div>
              <div class=" col-lg-4">
                <div className="career_cont">
                  <div class="course-info d-flex justify-content-between align-items-center ">
                    <h5>Mobile No.</h5>
                    <p>
                      <a href="#">+91 9673454330</a>
                    </p>
                  </div>

                  <div class="course-info d-flex justify-content-between align-items-center ">
                    <h5>weeks</h5>
                    <p>6 Days a Week</p>
                  </div>

                  <div class="course-info d-flex justify-content-between align-items-center ">
                    <h5>School Timing</h5>
                    <p>10:00 AM - 1:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <a to="/" class="btn home_button p-2 text-white">
              For More Details
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Career;
