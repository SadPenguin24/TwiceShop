import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import "./Navi.css";
import HamburgerMenu from "react-hamburger-menu";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";

function Navi({ isHome }) {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(isHome ? false : true);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  function handleClick() {
    const opener = isOpen ? false : true;
    setIsOpen(opener);
  }

  function handleLink() {
    setNavbar(true);
  }

  const logoutHandler = () => {
    dispatch(logout());
  };

  const changeNaviBG = () => {
    if (!isHome || window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNaviBG);

  return (
    <div className="navi sticky">
      <header>
        {/* <!-- Header desktop --> */}
        <div className="container-menu-desktop">
          <div
            className={
              navbar ? "wrap-menu-desktop active" : "wrap-menu-desktop"
            }
          >
            <nav className="limiter-menu-desktop container">
              {/* <!-- Logo desktop --> */}
              {/*<img
                className="logo navi-item"
                src="images/icons/logo-01.svg"
                alt="IMG-LOGO"
              />*/}

              <svg
                viewBox="38.1 38.5 457.5 497.9"
                xmlns="http://www.w3.org/2000/svg"
                className="logo"
              >
                <path
                  d="m433 46.6c-10.2 9.6-14.1 12.6-24 18.5-28.3 16.6-61.5 25.4-121 31.9-8.6 1-38.4 4.6-49.5 6-38.5 4.9-71.8 17.2-104.2 38.5-26.4 17.3-50.9 41.1-66 63.9-8.2 12.4-16.1 29-19.8 41.6-3 10.3-3.5 12.5-5 22.9-5.4 37.9 4.3 64.9 27.1 75.2 3.5 1.6 7.4 2.9 8.6 2.9 1.5 0 9.2-5.7 21.9-16.3 10.7-8.9 21.5-17.8 23.9-19.8 2.4-1.9 4-4 3.7-4.6-.4-.6-3.1-1.7-5.9-2.3-30.2-7.1-48.2-37.5-41.2-69.3 6.3-29 26.1-51.5 53.7-61.3 13-4.6 35.7-7.6 58.9-7.8 18.3-.1 17.9-.5 13.7 14-1.7 6-3.7 13.1-4.5 15.9-.7 2.7-2.7 10.2-4.5 16.5-11.5 42.2-17.9 70-23.5 103.5-2.2 12.7-2.6 18.4-2.7 37.5-.1 20.2.1 23.5 2.2 32.5 7.4 32.2 26.3 49.7 61.6 57 19.2 3.9 35.7-.4 54.3-14.2 4.6-3.5 9-6.3 9.6-6.3.7 0 4.4 2.9 8.2 6.5 12.1 11.5 23.9 15.8 43.3 15.7 13.8 0 20.9-1.6 32.5-7.3 15.8-7.8 32.2-24.1 43.8-43.4 4.4-7.3 12.8-24 15.8-31.5 1.2-3 2.6-6.4 3.1-7.5 1.5-3.4 5.9-17.7 7.9-26 3.4-14 5.1-28.3 4.9-41.9-.2-12.4-.1-13 2-14.8 1.3-1 3-1.8 3.8-1.8 4.9 0 16.9-9.1 21.2-15.9 8.7-14.2 7.8-29.6-2.2-37.5-5.3-4.2-14.1-4.8-20.7-1.4-4.9 2.5-6.3 5.3-3.2 6.2 2.7.9 7.2 7.6 7.2 10.8 0 6.5-6.9 9.8-12.8 6.1-3.1-1.9-12.2-11.3-12.2-12.5 0-.5-2.1-3.2-4.7-6-9.5-10.2-20.3-12.4-33.6-6.8-11 4.6-18.2 11.5-21.1 20.4-1.2 3.6 1.5 9.4 8 17.2 13.4 16.2 18.8 33 18.9 58.9 0 34-11.2 64.1-31.5 84.5-18.4 18.6-36.2 22.3-51.2 10.7-2.1-1.6-3.8-3.5-3.8-4.4 0-.8 2.4-4 5.3-7.1 17-18.2 28.6-40.3 33.7-64.4 3.6-17.1 1.7-33.7-5.1-44.8-6.6-10.7-18.5-16.3-34.9-16.4-24.6-.1-43 15.4-52.3 44.2-1.9 5.9-2.1 8.9-2.1 25.2 0 19.2.7 24.6 4.9 37.5 3 9.1 4.6 12.7 8.9 20.3 2 3.5 3.6 7 3.6 7.7 0 1.6-7 7.5-11.7 9.9-5.2 2.6-15.3 2.1-22.1-1.1-20.7-9.7-28.5-32.6-23.7-69.3 4-30.2 12.5-57.3 32.5-102.5.5-1.1 1.8-4.3 3-7 2.2-5.3 2.4-5.6 6.6-15 1.4-3.3 4.1-9.4 5.9-13.5s4.1-9.5 5.3-12c1.1-2.5 3.6-8 5.6-12.3 1.9-4.2 4.1-7.9 4.8-8.2s12.1-.7 25.3-.9c38.7-.7 58.4-5.2 77-17.4 21.6-14.3 36.3-37.2 43.3-67.2 2.3-9.8 4.3-29 4-38.5l-.3-10zm-111.6 265.8c7.1 3 9.4 11.8 5.7 22.6-3.5 10.2-12.1 29.4-15.4 34.2-2.2 3.4-3.3 3.5-4.8.7-5.1-9.7-7.1-39.3-3.2-47.9 2.4-5.2 5.5-8.3 9.8-9.8 4-1.4 4.1-1.4 7.9.2zm-133 171c-.3.7-.4 3.3-.2 5.7.3 4.2.4 4.4 3.8 4.7 6 .6 6 .6 6 21.8v19.4l2.3.6c1.3.3 4.1.4 6.3.2l3.9-.3.3-19.4c.1-11.8.7-20 1.3-20.7s2.7-1.4 4.7-1.6l3.7-.3v-11l-15.8-.3c-12.8-.2-15.8 0-16.3 1.2zm45.9 1.3c.3 1.6 1.3 5.7 2.2 9.3s2 8.1 2.4 10c4.3 17.9 7.5 29.7 8.3 30.7.6.7 3.2 1.3 5.9 1.3 4.2 0 5.1-.3 5.8-2.3 1.3-3.5 4.1-15.3 4.1-17.6 0-3.3 2.2-7.2 3.9-6.9 1.5.3 2.4 3.5 5.3 18.3.6 3.3 1.6 6.6 2.1 7.2 1.2 1.7 10.2 1.7 11.4 0 .5-.6 2.6-7.7 4.6-15.7 1.9-8 4.7-19 6.1-24.5s2.6-10.5 2.6-11.3c0-1.9-12-1.2-13.1.8-.4.8-1.7 6.7-2.9 13s-2.6 11.9-3.1 12.4c-1.2 1.4-3.7-5-5.5-14.5-2.4-12.5-2.6-12.9-7.8-12.9-2.5 0-4.7.4-5.1.9-.6 1-2.1 7.9-3.9 17.8-1.9 10.4-5.8 11-6.9 1-.3-2.8-1.3-8.5-2.2-12.5l-1.7-7.2h-13zm77.9 24 .3 26.8h12l.3-26.8.2-26.7h-13zm43-25.2c-6 1.9-10.8 5.8-14.2 11.8-2.6 4.6-3 6.1-3 13.2.1 12.1 4.8 20.2 14.5 24.6 6 2.8 18.4 2.6 24.3-.3 5.2-2.7 10.7-8.6 12.3-13.6 1.5-4.4.4-5.1-6.8-4.7-5 .3-5.8.7-9 4.4-3.2 3.8-3.8 4.1-8.7 4.1-3.9 0-6.1-.6-8-2.1-8.5-6.7-7.2-20.3 2.4-25.2 5.1-2.6 9.5-1.5 15 3.7 3.9 3.7 5.1 4.4 9 4.5 2.5 0 5.1-.3 5.9-.8 2.3-1.4-.6-7.9-5.8-13.1-7.4-7.4-17.6-9.8-27.9-6.5zm48.5-.8c-.9.8-.9 49.6-.1 51.7.5 1.4 2.7 1.6 13.9 1.6 9.3 0 13.6-.4 14.1-1.2.8-1.2.6-9.9-.2-10.7-.2-.2-3.2-.5-6.7-.6-7.5-.1-8.7-.7-8.7-4.5s1.3-4.4 8-4.2c7.4.3 8.4-.6 8.1-6.5-.1-2.6-.5-5-.7-5.3-.3-.3-3.8-.7-7.7-1-6.8-.5-7.2-.6-7.5-3.1-.4-3.7 1.5-4.8 8.8-5.1l6.5-.3.3-5.8.3-5.7h-13.9c-7.6 0-14.2.3-14.5.7z"
                  fill={navbar ? "black" : "white"}
                />
              </svg>

              {/* <!-- Menu desktop --> */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li>
                    <Link to="/">
                      <span className="navi-item">Home</span>
                    </Link>
                  </li>

                  <li>
                    <span className="navi-item">Orders</span>
                  </li>

                  <li>
                    <span className="navi-item">About</span>
                  </li>

                  <li>
                    <span className="navi-item">Contact</span>
                  </li>
                </ul>
              </div>

              {/* <!-- Icon header --> */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search navi-item">
                  <i class="fas fa-search"></i>
                </div>
                <Link to="/cart">
                  <div
                    className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart navi-item"
                    data-notify={cartItems?.length}
                  >
                    <span
                      class="fas fa-shopping-cart"
                      onClick={handleLink}
                    ></span>
                  </div>
                </Link>
                {userInfo ? (
                  <NavDropdown
                    title={
                      <i className="fa fa-user icon-header-item navi-item"></i>
                    }
                    id="username"
                  >
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="far fa-user icon-header-item navi-item"></i>
                    </Nav.Link>
                  </LinkContainer>
                )}
                {userInfo && userInfo.isAdmin && (
                  <NavDropdown title="Admin" id="adminmenu">
                    <LinkContainer to="/admin/userList">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/productList">
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderList">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                )}
              </div>
            </nav>
          </div>
        </div>

        {/* <!-- Header Mobile --> */}
        <div className="wrap-header-mobile">
          {/* <!-- Logo moblie --> */}
          <div className="logo-mobile">
            <a href="/">
              <img
                src="images/icons/logo-01.png"
                alt="IMG-LOGO"
                className="img-logo-mobile"
              />
            </a>
          </div>

          {/* <!-- Icon header --> */}
          <div className="wrap-icon-header flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search"></i>
            </div>

            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify="2"
            >
              <i className="zmdi zmdi-shopping-cart"></i>
            </div>

            <a
              href="/"
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify="0"
            >
              <i className="zmdi zmdi-favorite-outline"></i>
            </a>
          </div>

          {/* <!-- Button show menu --> */}
          <div className="burg">
            <HamburgerMenu
              isOpen={isOpen}
              menuClicked={handleClick}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
        </div>

        {/* <!-- Menu Mobile --> */}
        <div id="outer-container">
          <Menu
            right
            width={"100%"}
            isOpen={isOpen}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          >
            <main id="page-wrap" className="bm-item-list">
              <ul>
                <hr />
                <li id="sign in" className="menu-item bm-item">
                  Sign in
                </li>
                <hr />
                <li id="orders" className="menu-item bm-item">
                  Orders
                </li>
                <hr />
                <li id="about" className="menu-item bm-item">
                  About
                </li>
                <hr />
                <li id="contact" className="menu-item bm-item">
                  Contact
                </li>
                <hr />
              </ul>
            </main>
          </Menu>
        </div>

        {/* <!-- Modal Search --> */}
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>

            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search"></i>
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>

      {/* <!-- Cart --> */}
      <div className="wrap-header-cart js-panel-cart">
        <div className="s-full js-hide-cart"></div>

        <div className="header-cart flex-col-l p-l-65 p-r-25">
          <div className="header-cart-title flex-w flex-sb-m p-b-8">
            <span className="mtext-103 cl2"> Your Cart </span>

            <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
              <i className="zmdi zmdi-close"></i>
            </div>
          </div>

          <div className="header-cart-content flex-w js-pscroll">
            <ul className="header-cart-wrapitem w-full">
              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-01.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="/"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    White Shirt Pleat
                  </a>

                  <span className="header-cart-item-info"> 1 x $19.00 </span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-02.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="/"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Converse All Star
                  </a>

                  <span className="header-cart-item-info"> 1 x $39.00 </span>
                </div>
              </li>

              <li className="header-cart-item flex-w flex-t m-b-12">
                <div className="header-cart-item-img">
                  <img src="images/item-cart-03.jpg" alt="IMG" />
                </div>

                <div className="header-cart-item-txt p-t-8">
                  <a
                    href="/"
                    className="header-cart-item-name m-b-18 hov-cl1 trans-04"
                  >
                    Nixon Porter Leather
                  </a>

                  <span className="header-cart-item-info"> 1 x $17.00 </span>
                </div>
              </li>
            </ul>

            <div className="w-full">
              <div className="header-cart-total w-full p-tb-40">
                Total: $75.00
              </div>

              <div className="header-cart-buttons flex-w w-full">
                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10"
                >
                  View Cart
                </a>

                <a
                  href="shoping-cart.html"
                  className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10"
                >
                  Check Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navi;
