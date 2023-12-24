"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Phone from "@/components/AnimatedTextCharacter";
import AnimatedTextCharacter from "@/components/AnimatedTextCharacter";
import List from "@/components/List";
import Testimonials from "@/components/Testimonials";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=+917906666056&text=Hi."
        class="float "
        target="_blank"
        style={{ fontSize: "xx-large" }}
      >
        <FaWhatsapp />
      </a>
      <motion.div
        initial={{ opacity: 0, x: 100, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="row"
      >
        <img
          src="/LOGO.jpg"
          className="col-lg-2 col-4 logo m-4 border rounded-3"
          alt=""
        />
      </motion.div>
      <div
        className="container vh-100 m-auto mainscreen"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <AnimatedTextCharacter
            text={"Revive, Reimagine, Refurbish with Refurby's  "}
          />
          <AnimatedTextCharacter text={"Unleashing Quality in Every Device"} />
        </div>
      </div>
      <div className="container vh-100 ">
        <div className="row text-white">
          <div className="col-lg-6">
            <img src="LOGO-front.png" className="w-100" alt="" />
          </div>
          <div className="col-lg-6 my-4">
            <header className="text-white">
              <h1 className="fw-bold fs-1">
                Welcome to Refurbys
                <br />
                Refurbished Electronics
              </h1>
              <p>Quality Refurbished Phones and Laptops at Affordable Prices</p>
            </header>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                Certified Refurbished: Our products undergo rigorous testing and
                certification.
              </li>
              <li>
                Affordable Prices: Enjoy top-notch electronics without breaking
                the bank.
              </li>
              <li>
                Warranty Guarantee: All purchases are backed by our warranty.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container vh-100  text-white">
        <section id="explore-products">
          <span className=" ">
            <AnimatedTextCharacter text={"Explore Our Products"} />
          </span>

          <div class="product-category my-4">
            <h3>Refurbished Phones</h3>
            <p>
              iPhone, Samsung, Google, and more. Latest models available.
              Unlocked and ready for use with any carrier.
            </p>
          </div>
          <div class="product-category my-4">
            <h3>Refurbished Laptops</h3>
            <p>
              Windows and MacBooks. High-performance laptops at unbeatable
              prices. Perfect for work, study, and entertainment.
            </p>
          </div>
          <div class="product-category my-4">
            <h3>Refurbished tablets</h3>
            <p>
              Ipads and Android Tablets. High-performance tablets at unbeatable
              prices. Perfect for work, study, and entertainment.
            </p>
          </div>
        </section>
      </div>

      <div
        className="container vh-100 
      "
      >
        <section id="why-refurbished">
          <AnimatedTextCharacter text={"Why Choose Refurbished ?"} />
          <div class="container my-3">
            <List />
          </div>
        </section>
      </div>

      <div className="container vh-100">
        <Testimonials />
      </div>
    </div>
  );
}
