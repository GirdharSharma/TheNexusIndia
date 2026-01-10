import Link from "next/link";
import React from "react";

export default function FooterCopyright({ dark }) {
  return (
    <section
      className={`footer-copyright ${dark ? "footer-copyright-dark" : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="copyright-item text-center d-block d-md-flex justify-content-between align-items-center">
              <p>© Copyright 2026, All Rights Reserved</p>
              <ul>
                {/* <li>
                  <Link href="/about">About</Link>
                </li> */}
                <li>
                  <a href="/terms-and-condition">Terms&Conditions</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
