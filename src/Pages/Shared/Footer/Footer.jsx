import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import visa from "../../../assets/visa.jpg";
import master from "../../../assets/mastercard.jpg";
import paypal from "../../../assets/paypal.png";
import american from "../../../assets/american.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-cyan-200 to-teal-200 p-10">
      <footer className="footer">
        <div>
        <Link to='/' className="flex items-center">
            <img className="w-20" src={logo} alt="" />
        <p className="text-xl font-bold">LEARNING CAMP</p>
        </Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link target="_blank" to='https://www.linkedin.com/in/fahad-ibne-hossain-1489411b0/'>
              <FaLinkedin className="text-4xl text-gray-600 hover:text-blue-800 hover:scale-150 duration-300" />
            </Link>
            <Link target="_blank" to='https://github.com/hridoyfahad30'>
              <FaGithub className="text-4xl text-gray-600 hover:text-black hover:scale-150 duration-300" />
            </Link>
            <Link target="_blank" to='https://www.facebook.com/ILOVEYOUFAHAD'>
              <FaFacebook className="text-4xl text-gray-600 hover:text-blue-500 hover:scale-150 duration-300" />
            </Link>
          </div>
        </div>
      </footer>
      <footer className="footer mt-8">
        <div>
          <span className="footer-title">Address</span>
          <a>66 Caledonian Road, London. N1 9DP</a>
          <a>0203 289 8484</a>
          <a>support@learning-capm.com</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn bg-cyan-400 hover:bg-cyan-200 absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="mt-4">
        <span className="footer-title">SECURE PAYMENT</span>
        <div className="flex gap-4 my-2">
          <a>
            <img className="w-24 h-12 rounded-md" src={visa} alt="" />
          </a>
          <a>
            <img className="w-24 h-12 rounded-md" src={master} alt="" />
          </a>
          <a>
            <img className="w-24 h-12 rounded-md" src={paypal} alt="" />
          </a>
          <a>
            <img className="w-24 h-12 rounded-md" src={american} alt="" />
          </a>
        </div>
      </div>
      <footer className="footer footer-center pt-8 ">
        <div>
          <p>Copyright © 2023 - All right reserved by Learning Camp</p>
          <p>Developed by <strong>FAHAD IBNE HOSSAIN</strong></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
