import React from "react";
import { GrMapLocation } from "react-icons/bs";
import png1 from "../newpng2.png";
import png2 from "../newpng3.png";
import png3 from "../newpng4.png";
const Contact = () => {
  return (
    <>
      <div className="container-fluid mt-3 row align-items-center">
        <div class="hell col-12 text-center  about-banner ">
          <h2>Contact</h2>
          <p>
            It is a pleasure and sorrows, that they should not be elected in
            some cases we may be able to do. It was from this, or something
            similar because it is pleasure, look for the debts. No one of these
            will open the very laborious, all the consequences of things, of
            current events.
          </p>
        </div>
        <div class="col-12 ">
          <section id="contact" class="contact">
            <div data-aos="fade-up" class="aos-init aos-animate">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0265529256017!2d83.90558321459419!3d21.971943960286776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20c34de11d5807%3A0x70871d8635e418d6!2sBlue%20Swan%20Play%20School!5e0!3m2!1sen!2sin!4v1612246478806!5m2!1sen!2sin"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>

            <div class="container aos-init aos-animate" data-aos="fade-up">
              <div class="row mt-5">
                <div class="col-lg-5">
                  <div class="info">
                    <div class="address" style={{ marginTop: 40 }}>
                      <i class="fa-solid fa-location-dot me-3 career_contt"></i>
                      <h4>Location:</h4>
                      <p className="info">
                        At- Hutupara, Darlipali, Sundargarh, Odisha - 770072
                      </p>
                    </div>

                    <div class="email" style={{ marginTop: 40 }}>
                      <i class="fas fa-envelope me-3 career_contt"></i>
                      <h4> Email:</h4>
                      <p className="info">info@blueswanpublicschool.in</p>
                    </div>

                    <div
                      class="phone"
                      style={{ marginTop: 40, marginBottom: 100 }}
                    >
                      <i class="fa fa-phone me-3 career_contt"></i>
                      <h4>Call:</h4>
                      <p className="info">+91 9673454330</p>
                    </div>
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

export default Contact;
