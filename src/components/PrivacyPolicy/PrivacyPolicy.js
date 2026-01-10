import React from "react";

export default function PrivacyPolicy() {
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
            <h1 className="policy-title">Privacy Policy for The Nexus India</h1>
            <p className="policy-date">Last updated: 10-01-2026</p>

            <div className="policy-content">
              <p>
                At The Nexus India (accessible from{" "}
                <a href="https://www.thenexusindia.in/">
                  https://www.thenexusindia.in
                </a>
                ), the privacy of our visitors is one of our top priorities.
                This Privacy Policy document contains types of information that
                is collected and recorded by The Nexus India and how we use it.
                <br />
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us.
              </p>
              <h2>1. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy
                and agree to its terms.
              </p>
              <h2>2. Information We Collect</h2>
              <ul>
                <li>
                  We may collect personal information from you in a variety of
                  ways, including, but not limited to, when users visit our
                  site, register on the site, subscribe to the newsletter, and
                  in connection with other activities, services, features, or
                  resources we make available on our Site.
                </li>
                <li>
                  Personal Information: When you subscribe to our newsletter or
                  contact us, we may ask for your name and email address.
                </li>
                <li>
                  Log Files: Like many other Web sites, The Nexus India makes
                  use of log files. The information inside the log files
                  includes internet protocol (IP) addresses, type of browser,
                  Internet Service Provider (ISP), date/time stamp,
                  referring/exit pages, and the number of clicks. This is used
                  to analyze trends, administer the site, and track user's
                  movement around the site. This data is not linked to any
                  information that is personally identifiable.
                </li>
              </ul>
              <h2>3. How We Use Your Information</h2>
              <p style={{ paddingLeft: "1rem" }}>
                We use the information we collect in various ways, including to:
              </p>
              <ul>
                {" "}
                <li>Provide, operate, and maintain our website.</li>
                <li>Improve, personalize, and expand our website content.</li>
                <li>Understand and analyze how you use our website.</li>
                <li>
                  Send you emails (if you have subscribed to our newsletter).
                </li>
                <li>Prevent fraud and ensure website security.</li>
              </ul>
              <h2>4. Cookies and Web Beacons</h2>
              <ul>
                <li>
                  Like any other website, The Nexus India uses 'cookies'. These
                  cookies are used to store information including visitors'
                  preferences, and the pages on the website that the visitor
                  accessed or visited. The information is used to optimize the
                  users' experience by customizing our web page content based on
                  visitors' browser type and/or other information.
                </li>
              </ul>
              <h2>5. Google AdSense & DoubleClick DART Cookie</h2>
              <ul>
                <li>
                  Google is a third-party vendor on our site. It also uses
                  cookies, known as DART cookies, to serve ads to our site
                  visitors based upon their visit to{" "}
                  <a href="https://www.thenexusindia.in/">
                    www.thenexusindia.in
                  </a>{" "}
                  and other sites on the internet.
                </li>
                <li>
                  Users may opt-out of the use of the DART cookie by visiting
                  the Google ad and content network Privacy Policy at the
                  following URL:{" "}
                  <a href="https://policies.google.com/technologies/ads">
                    https://policies.google.com/technologies/ads
                  </a>
                </li>
                <li>
                  Advertising Partners: Some of advertisers on our site may use
                  cookies and web beacons. Our advertising partners include
                  Google AdSense.
                </li>
              </ul>
              <h2>6. Third-Party Privacy Policies</h2>
              <ul>
                <li>
                  The Nexus India's Privacy Policy does not apply to other
                  advertisers or websites. Thus, we are advising you to consult
                  the respective Privacy Policies of these third-party ad
                  servers for more detailed information. It may include their
                  practices and instructions about how to opt-out of certain
                  options.
                </li>
              </ul>
              <h2>
                7. CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h2>
              <p style={{ paddingLeft: "1rem" }}>
                Under the CCPA, among other rights, California consumers have
                the right to:
              </p>
              <ul>
                <li>
                  Request that a business that collects a consumer's personal
                  data disclose the categories and specific pieces of personal
                  data that a business has collected about consumers.
                </li>
                <li>
                  Request that a business delete any personal data about the
                  consumer that a business has collected.
                </li>
                <li>
                  Request that a business that sells a consumer's personal data,
                  not sell the consumer's personal data.
                </li>
                <li>
                  If you make a request, we have one month to respond to you. If
                  you would like to exercise any of these rights, please contact
                  us.
                </li>
              </ul>
              <h2>8. GDPR Data Protection Rights</h2>
              <p style={{ paddingLeft: "1rem" }}>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
              </p>
              <ul>
                <li>
                  The right to access – You have the right to request copies of
                  your personal data.
                </li>
                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate.
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
              </ul>
              <h2>9. Children's Information</h2>
              <ul>
                <li>
                  Another part of our priority is adding protection for children
                  while using the internet. We encourage parents and guardians
                  to observe, participate in, and/or monitor and guide their
                  online activity.
                </li>
                <li>
                  The Nexus India does not knowingly collect any Personal
                  Identifiable Information from children under the age of 13. If
                  you think that your child provided this kind of information on
                  our website, we strongly encourage you to contact us
                  immediately and we will do our best efforts to promptly remove
                  such information from our records.
                </li>
              </ul>
              <h2>10. Contact Us</h2>
              <ul>
                <li>
                  If you have any questions about this Privacy Policy, please
                  contact us:
                </li>
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
