import React, { useState } from "react";
import Link from "next/link";
import categoryData from "@/data/categoryData";

function Drawer({ drawer, action }) {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (key) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      <div className={`off_canvars_overlay ${drawer ? "active" : ""}`}></div>

      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                {/* Close Button */}
                <div className="canvas_close">
                  <a href="#" onClick={action}>
                    <i className="fa fa-times"></i>
                  </a>
                </div>

                {/* Logo */}
                <div className="offcanvas-brand text-center mt-20 mb-30">
                  <img
                    src="/images/logo/tni-logo-transparent.png"
                    alt="newsprk"
                  />
                </div>

                {/* MENU */}
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu list-unstyled">
                    {categoryData.map((item, i) => {
                      const level1Key = `l1-${i}`;

                      return (
                        <li key={level1Key}>
                          {/* Level 1 */}
                          <div className="menu-item">
                            {item.child && (
                              <span
                                className="menu-expand"
                                onClick={() => toggleMenu(level1Key)}
                              >
                                <i
                                  className={`fa ${
                                    openMenus[level1Key]
                                      ? "fa-angle-up"
                                      : "fa-angle-down"
                                  }`}
                                ></i>
                              </span>
                            )}

                            <Link href={item.link || "#"}>{item.linkText}</Link>
                          </div>

                          {/* Level 2 */}
                          {item.child &&
                            item.submenu &&
                            openMenus[level1Key] && (
                              <ul
                                className="sidebar-sub-menu list-unstyled ml-3"
                                style={{ display: "block" }}
                              >
                                {item.submenu.map((sItem, j) => {
                                  const level2Key = `l2-${i}-${j}`;

                                  return (
                                    <li key={level2Key}>
                                      <div className="menu-item">
                                        {sItem.child && (
                                          <span
                                            className="menu-expand"
                                            onClick={() =>
                                              toggleMenu(level2Key)
                                            }
                                          >
                                            <i
                                              className={`fa ${
                                                openMenus[level2Key]
                                                  ? "fa-angle-up"
                                                  : "fa-angle-down"
                                              }`}
                                            ></i>
                                          </span>
                                        )}

                                        <Link href={sItem.link || "#"}>
                                          {sItem.linkText}
                                        </Link>
                                      </div>

                                      {/* Level 3 */}
                                      {sItem.child &&
                                        sItem.third_menu &&
                                        openMenus[level2Key] && (
                                          <ul className="ml-3">
                                            {sItem.third_menu.map(
                                              (third, k) => (
                                                <li key={`l3-${i}-${j}-${k}`}>
                                                  <Link href={third.link}>
                                                    {third.linkText}
                                                  </Link>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
