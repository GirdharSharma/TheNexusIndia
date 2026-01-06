import React from "react";

export default function ContactInfo() {
  return (
    // <section className="contact-info-area pt-70 pb-90">
    //   <div className="container">
    //     <div className="row justify-content-center">
    //       <div className="col-lg-4 col-md-6">
    //         <div className="contact-info-item mt-30">
    //           <h3 className="title">Headquarters</h3>
    //           <span>
    //             <i className="fas fa-map-marker-alt"></i> LOCATION:
    //           </span>
    //           <ul>
    //             <li>44 Canal Center Plaza #200</li>
    //             <li>Alexandria, VA 22314, USA</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-md-6">
    //         <div className="contact-info-item mt-30">
    //           <h3 className="title">Let’s talk</h3>
    //           <span>
    //             <i className="fas fa-phone"></i> CALL NOW:
    //           </span>
    //           <ul>
    //             <li>+41 27 966 26690</li>
    //             <li>+880 1945 381758</li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-lg-4 col-md-6">
    //         <div className="contact-info-item mt-30">
    //           <h3 className="title">Let’s chat</h3>
    //           <span>
    //             <i className="fas fa-envelope"></i> EMAIL:
    //           </span>
    //           <ul>
    //             <li>hello@newspark.com</li>
    //             <li>adsales@@newspark.com</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="row">
    //       <div className="col-lg-12">
    //         <div className="map-area">
    //           <iframe
    //             src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9198.688804852873!2d90.4003856461435!3d23.80073745243844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605153382124!5m2!1sen!2sbd"
    //             width="600"
    //             height="450"
    //             style={{ border: 0 }}
    //             allowfullscreen=""
    //             aria-hidden="false"
    //             tabIndex="0"
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <>
      <style>{`
              
    .contact-info {
      display: inline-block;
      width: 100%;
      text-align: center;
          margin-bottom: 10px;
    }
    .contact-info-icon {
    margin-bottom: 15px;
    }
    .contact-info-item {
      background: #071c34;
      padding: 30px 0px;
    }
    .contact-page-sec .contact-page-form h2 {
      color: #071c34;
      text-transform: capitalize;
      font-size: 22px;
      font-weight: 700;
    }
    .contact-page-form .col-md-6.col-sm-6.col-xs-12 {
      padding-left: 0;
    }  
    .contact-page-form.contact-form input {
      margin-bottom: 5px;
    }  
    .contact-page-form.contact-form textarea {
      height: 110px;
    }
    .contact-page-form.contact-form input[type="submit"] {
      background: #071c34;
      width: 150px;
      border-color: #071c34;
    }
    .contact-info-icon i {
      font-size: 48px;
      color: #fda40b;
    }
    .contact-info-text p{margin-bottom:0px;}
    .contact-info-text h2 {
      color: #fff;
      font-size: 22px;
      text-transform: capitalize;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .contact-info-text span {
      color: #999999;
      font-size: 16px;
      font-weight: ;
      display: inline-block;
      width: 100%;
    }
    
    .contact-page-form input {
      background: #f9f9f9 none repeat scroll 0 0;
      border: 1px solid #f9f9f9;
      margin-bottom: 20px;
      padding: 12px 16px;
      width: 100%;
      border-radius: 4px;
    }
    
    .contact-page-form .message-input {
    display: inline-block;
    width: 100%;
    padding-left: 0;
    }
    .single-input-field textarea {
      background: #f9f9f9 none repeat scroll 0 0;
      border: 1px solid #f9f9f9;
      width: 100%;
      height: 120px;
      padding: 12px 16px;
      border-radius: 4px;
    }
    .single-input-fieldsbtn input[type="submit"] {
      background: #fda40b none repeat scroll 0 0;
      color: #fff;
      display: inline-block;
      font-weight: 600;
      padding: 10px 0;
      text-transform: capitalize;
      width: 150px;
      margin-top: 20px;
      font-size: 16px;
    }
    .single-input-fieldsbtn input[type="submit"]:hover{background:#071c34;transition: all 0.4s ease-in-out 0s;border-color:#071c34}
    .single-input-field  h4 {
      color: #464646;
      text-transform: capitalize;
      font-size: 14px;
    }
    .contact-page-form {
      display: inline-block;
      width: 100%;
      margin-top: 30px;
    }
    
    .contact-page-map {
      margin-top: 36px;
    }
    .contact-page-form form {
        padding: 20px 15px 0;
    } `}</style>
      <section class="contact-page-sec pt-60 pb-60">
        <div class="container">
          <div class="row pt-30 pb-30">
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-map-marked"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>HeadQuarter</h2>
                    <span>India </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>E-mail</h2>
                    <span>
                      <a
                        href="mailto:contact@thenexusindia.in"
                        style={{ color: "#999999" }}
                      >
                        contact@thenexusindia.in
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-info">
                <div class="contact-info-item">
                  <div class="contact-info-icon">
                    <i class="fas fa-clock"></i>
                  </div>
                  <div class="contact-info-text">
                    <h2>office time</h2>
                    <span>Mon - Sat 10:00 am - 6.00 pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="contact-page-form" method="post">
                <h2>Get in Touch</h2>
                <form action="contact-mail.php" method="post">
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="text"
                          placeholder="Your Name"
                          name="name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          name="phone"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12">
                      <div class="single-input-field">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </div>
                    </div>
                    <div class="col-md-12 message-input">
                      <div class="single-input-field">
                        <textarea
                          placeholder="Write Your Message"
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="single-input-fieldsbtn">
                      <input type="submit" value="Send Now" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-4">
              <div class="contact-page-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.02912911311!2d76.69348873658222!3d30.73506264436677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1553497921355"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style={{ border: "0" }}
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
