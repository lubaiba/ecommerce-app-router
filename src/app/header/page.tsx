'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(){

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid ">
          <Link className="navbar-brand" href="#">
            <Image src="/L-CART.png" alt="My Image" width={70} height={50} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/productList">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
             
              />
              <button
                className="btn btn-outline-success text-white"
                type="submit"
              >
                Search
              </button>
            </form>
            <div className="col-md-5 my-auto">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link text-white" href='/cart'>
                    <i className="fa fa-shopping-cart"></i> Cart (0)
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" href="#">
                    <i className="fa fa-heart"></i> Wishlist (0)
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i> Username
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/">
                        <i className="fa fa-user"></i> Profile
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                        <i className="fa fa-heart"></i> My Wishlist
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/">
                        <i className="fa fa-sign-out"></i> Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
