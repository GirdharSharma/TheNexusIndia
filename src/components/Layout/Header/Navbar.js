import React from "react";
import Link from "next/link";
import categoryData from "@/data/categoryData.js";

function Navbar({ customClass }) {
  return (
    <>
      <style jsx>{`
        /* Common submenu styling */
        /* Multi-column layout */
        .newspark-header-main-menu ul.sub-menu.multi-column {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* 3 columns */
          gap: 10px;
          max-height: unset; /* disable scroll if multicolumn */
          overflow-y: visible;
          max-width: 600px;
        }

        .newspark-header-main-menu ul.sub-menu.multi-column li {
          white-space: nowrap;
        }

        /* Responsive: revert to scroll layout on mobile */
        @media (max-width: 768px) {
          .newspark-header-main-menu ul.sub-menu.multi-column {
            display: block;
            width: auto;
            max-height: 300px;
            overflow-y: auto;
          }
        }
      `}</style>

      <div className={`newspark-header-main-menu ${customClass || ""}`}>
        {categoryData && categoryData.length > 0 && (
          <ul>
            {categoryData.map((item, i) => (
              <li key={i}>
                {/* Level 1 Menu */}
                {item.child ? (
                  <Link href={item.link || "#"}>
                    {item.linkText}
                    {item.icon && <i className={`fal fa-${item.icon}`}></i>}
                  </Link>
                ) : (
                  <Link href={item.link}>{item.linkText}</Link>
                )}

                {/* Level 2 Submenu */}
                {item.child && item.submenu && (
                  <ul className="sub-menu">
                    {item.submenu.map((ltwo, j) => (
                      <li key={j}>
                        <Link href={ltwo.link || "#"}>
                          {ltwo.linkText}
                          {ltwo.child && <i className="fal fa-angle-down"></i>}
                        </Link>

                        {/* Level 3 Submenu */}
                        {ltwo.child && ltwo.third_menu && (
                          <ul
                            className={`sub-menu ${
                              ltwo.third_menu.length > 15 ? "multi-column" : ""
                            }`}
                          >
                            {ltwo.third_menu.map((lthree, k) => (
                              <li key={k}>
                                <Link href={lthree.link}>
                                  {lthree.linkText}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
