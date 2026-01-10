import React from "react";

export default function TermsConditions() {
  return (
    <>
      <style>{`
              .privacy-policy {
                background: #f8f9fa;
              }
              .privacy-policy a {
                pointer-events: auto;
              }
              
              
              .policy-card {
                background: #ffffff;
                padding: 3rem;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
              }
              
              .policy-title {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 0.5rem;
              }
              
              .policy-date {
                color: #6c757d;
                margin-bottom: 2rem;
                font-size: 0.95rem;
              }
              
              .policy-content {
                h2 {
                  font-size: 1.4rem;
                  font-weight: 600;
                  margin-top: 2.5rem;
                  margin-bottom: 1rem;
                }
              
                p {
                  color: #555;
                  line-height: 1.7;
                  font-size: 1rem;
                }
              
                ul {
                  margin-top: 1rem;
                  list-style-type: circle;
              
                  li {
                    margin-bottom: 0.6rem;
                    color: #555;
                    position: relative;
                    padding-left: 0.5rem;
                  }
                }
              }
              
             `}</style>
      <section className="privacy-policy pt-70 pb-70">
        <div className="container">
          <div className="policy-card">
            <h1 className="policy-title">Terms & Conditions</h1>
            <p className="policy-date">Last updated: 10-01-2026</p>

            <div className="policy-content">
              <p>Welcome to The Nexus India!</p>
              <p>
                These terms and conditions outline the rules and regulations for
                the use of The Nexus India's Website, located at{" "}
                <a href="https://www.thenexusindia.in/">
                  https://www.thenexusindia.in
                </a>
                <br />
              </p>
              <p>
                By accessing this website, we assume you accept these terms and
                conditions. Do not continue to use The Nexus India if you do not
                agree to take all of the terms and conditions stated on this
                page.
              </p>
              <h2>1. Definitions</h2>
              <ul>
                <li>
                  "Website" refers to The Nexus India, accessible from{" "}
                  <a href="https://www.thenexusindia.in/">
                    https://www.thenexusindia.in
                  </a>
                </li>
                <li>
                  "We", "Us", and "Our" refers to the owners, operators, and
                  creators of The Nexus India.
                </li>
                <li>"You" refers to the user or viewer of our website.</li>
              </ul>
              <h2>2. Use of Content (News & Information)</h2>
              <p style={{ paddingLeft: "1rem" }}>
                The content provided on this website (including news articles,
                blog posts, sports updates, and opinions) is for general
                informational purposes only. While we strive to provide
                up-to-date and accurate information:
              </p>
              <ul>
                <li>
                  We make no representations or warranties of any kind, express
                  or implied, about the completeness, accuracy, reliability, or
                  availability of the information.
                </li>
                <li>
                  Any reliance you place on such information is strictly at your
                  own risk.
                </li>
                <li>
                  Opinions expressed in "Blogs" or "Expert Opinions" sections
                  are those of the authors and do not necessarily reflect the
                  official policy or position of The Nexus India.
                </li>
              </ul>
              <h2>3. Intellectual Property Rights</h2>
              <p style={{ paddingLeft: "1rem" }}>
                Unless otherwise stated, The Nexus India and/or its licensors
                own the intellectual property rights for all material on The
                Nexus India. All intellectual property rights are reserved.
              </p>
              <p style={{ paddingLeft: "1rem" }}>You must not:</p>
              <ul>
                {" "}
                <li>
                  Republish material from The Nexus India (without valid
                  attribution).
                </li>
                <li>
                  Sell, rent, or sub-license material from The Nexus India.
                </li>
                <li>
                  Reproduce, duplicate, or copy material from The Nexus India
                  for commercial purposes.
                </li>
              </ul>
              <h2>4. User Comments and Conduct</h2>
              <ul>
                <li>
                  Parts of this website may offer an opportunity for users to
                  post and exchange opinions and information (e.g., Comments
                  section).
                </li>
                <li>
                  The Nexus India does not filter, edit, publish, or review
                  Comments prior to their presence on the website.
                </li>
                <li>
                  Comments reflect the views and opinions of the person who
                  posts them.
                </li>
                <li>
                  We reserve the right to monitor all Comments and to remove any
                  Comments which can be considered inappropriate, offensive, or
                  causes breach of these Terms and Conditions.
                </li>
              </ul>
              <h2>5. Third-Party Links</h2>
              <ul>
                <li>
                  Our Service may contain links to third-party web sites or
                  services (including advertisements and news sources) that are
                  not owned or controlled by The Nexus India.
                </li>
                <li>
                  The Nexus India has no control over, and assumes no
                  responsibility for, the content, privacy policies, or
                  practices of any third-party web sites.
                </li>
                <li>
                  You acknowledge and agree that The Nexus India shall not be
                  responsible or liable, directly or indirectly, for any damage
                  or loss caused by the use of any such content or services.
                </li>
              </ul>
              <h2>6. Limitation of Liability</h2>
              <ul>
                <li>
                  In no event shall The Nexus India, nor any of its officers,
                  directors, and employees, be held liable for anything arising
                  out of or in any way connected with your use of this Website.
                  We shall not be liable for any indirect, consequential, or
                  special liability arising out of or in any way related to your
                  use of this Website.
                </li>
              </ul>
              <h2>7. Changes to Terms</h2>
              <p style={{ paddingLeft: "1rem" }}>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. By continuing to access or use
                our Service after those revisions become effective, you agree to
                be bound by the revised terms.
              </p>
              <h2>8. Governing Law</h2>
              <p style={{ paddingLeft: "1rem" }}>
                These Terms shall be governed and construed in accordance with
                the laws of India, and you submit to the non-exclusive
                jurisdiction of the state and federal courts located in Gujrat
                for the resolution of any disputes.
              </p>
              <h2>9. Contact Us</h2>
              <p style={{ paddingLeft: "1rem" }}>
                {" "}
                If you have any questions about these Terms and Conditions, you
                can contact us:
              </p>
              <ul>
                <li>
                  <strong>By Email:</strong>{" "}
                  <a href="mailto:contact@thenexusindia.in">
                    contact@thenexusindia.in
                  </a>
                </li>

                <li>
                  By visiting this page on our website:{" "}
                  <a
                    href="https://www.thenexusindia.in/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.thenexusindia.in/contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
