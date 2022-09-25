import React from "react";
import frame1 from "../students1.png";
import frame2 from "../students2.png";
import {
  BsCheck2Circle,
  BsCheckCircleFill,
  BsCheckCircle,
} from "react-icons/bs";
const Curriculum = () => {
  return (
    <>
      <div className="container-fluid curriculum mt-3 row align-items-center">
        <div class="hell col-12 text-center  about-banner">
          <h2>Curriculum</h2>
          <p>
            It is a pleasure and sorrows, that they should not be elected in
            some cases we may be able to do. It was from this, or something
            similar because it is pleasure, look for the debts. No one of these
            will open the very laborious, all the consequences of things, of
            current events.
          </p>
        </div>
        <div class="col-12 align-items-center my-5">
          <section id="events" class="events">
            <div class="container-fluid" data-aos="fade-up">
              <div class="row">
                <div class="col-md-6 d-flex align-items-stretch">
                  <div class="card">
                    <div class="card-img">
                      <img src={frame1} alt="..." className="img-fluid" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="">Philosophy of Our Curriculum</a>
                      </h5>
                      <p class="font-italic text-center">
                        The curriculum is based on the belief that children
                        learn best through “active learning,” direct, hands-on
                        experiences with people, objects, events, and ideas.
                      </p>
                      <p class="card-text">
                        {" "}
                        Children are encouraged to “construct’ their own
                        knowledge by pursuing their personal interests and
                        goals, guided by trained adults who understand the
                        important learning areas for children in the preschool
                        years. Active learning is central to all the activities
                        in the program, whether planned by adults or initiated
                        by children. Our Curriculum, in other words, reflects in
                        its 3 C’s Curriculum- Child, Content, and Context.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-stretch ">
                  <div class="card">
                    <div class="card-img">
                      <img src={frame1} alt="..." className="img-fluid" />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">
                        <a href="">What does this curriculum include?</a>
                      </h5>
                      <p class="font-italic text-center">
                        Key Developmental Indicators
                      </p>
                      <p class="card-text">
                        Preschool Key Developmental Indicators (Key Experiences)
                        “Key developmental indicators” (KDls) are early
                        childhood milestones that guide teachers as they plan &
                        assess learning experiences & interact with children to
                        support learning. The term “key developmental
                        indicators” replaces the term “key experiences.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-12 align-items-left curriculum_base my-4">
          <section id="about" class="about">
            <div class="container aos-init aos-animate" data-aos="fade-up">
              <div class="row">
                <div
                  class="col-lg-20 order-10 order-lg-10 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div class="col-lg-30   content">
                    <p></p>
                    <h3>Glimpse of Curriculum</h3>
                    <ul>
                      <li>
                        <BsCheckCircle />
                        &nbsp; Approaches to Learning Making and expressing
                        choices, plans, and decisions, Solving problems
                        encountered in play.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Language, Literacy, and Communication Talking with
                        others about personally meaningful experiences
                        Describing objects, events, and relations, Having fun
                        with language: listening to stories and poems, making up
                        stories and rhymes, Writing in various ways: drawing,
                        scribbling, letter-like forms. invented spelling,
                        conventional forms, Reading in various ways: reading
                        storybooks, signs, and symbols, one’s own writing,
                        Dictating stories.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Social and Emotional Development Taking care of
                        one’s own needs, Expressing feelings in words, Dealing
                        with social conflict.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Physical Development, Health, and Well-Being.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Arts and Sciences Paper tearing, Watercolours-
                        dabbing, Paper crumpling and pasting, Clay modeling and
                        many others.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Science and Technology: Classification Recognizing
                        objects by sight, sound, touch, taste, and smell,
                        Exploring and describing similarities, differences, and
                        the attributes of things and others.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Social Studies.
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Time
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Visual Arts
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Dramatic Art
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Music
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Fine Motor Development
                      </li>
                      <br />
                      <li>
                        <BsCheckCircle />
                        &nbsp;Mathematics
                      </li>
                    </ul>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
