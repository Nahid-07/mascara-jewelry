import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#062002] p-12">
      <div className="max-w-7xl mx-auto text-white grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:justify-items-center">
        <div>
          <h3>CONNECT</h3>
          <ul>
            <li>Email Us</li>
            <li>
              <a href="">Call Us</a>
            </li>
            <li>
              <a href="">9am-5pm EST</a>
            </li>
            <li>
              <a href="">Visit Us</a>
            </li>
            <li>
              <a href="">Booking virtual appointment</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>CUSTOMER SERVICE</h3>
          <ul>
            <li>
              <a href="">faq & help</a>
            </li>
            <li>
              <a href="">Return & exchange policy</a>
            </li>
            <li>
              <a href="">shipping & special info</a>
            </li>
            <li>
              <a href="">Gift cards</a>
            </li>
            <li>
              <a href="">Necklace size chart</a>
            </li>
            <li>
              <a href="">Ring sizer</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>MASCARA FAM</h3>
          <ul>
            <li>
              <a href="">The origin story</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Jewelry care & wear</a>
            </li>
            <li>
              <a href="">Wholesale</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>NEWALETTER</h3>
          <p className="my-5">
            sign up for exclusive offers, new product listings, updates and
            more!
          </p>
          <input type="search" placeholder="Your email" className="w-[200px] p-3 rounded-tl-lg rounded-bl-md"/>
          <button className="border w-20 whitespace-nowrap p-3 rounded-r-md md:mt-4 mt-4 lg:mt0">SIGN UP</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
