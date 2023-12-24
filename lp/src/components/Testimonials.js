import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Testimonials() {
  return (
    <div>
      <div class="testimonials text-center">
        <div class="container">
          <h3 className="display-4 fw-bold text-white">Testimonials</h3>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="card border-light bg-light text-center">
                <i
                  class="fa fa-quote-left fa-3x card-img-top rounded-circle"
                  aria-hidden="true"
                >
                  <FaUserCircle size={"40px"} />
                </i>
                <div class="card-body blockquote">
                  <p class="card-text">
                    Refurbys has been a fantastic startup that has brought so
                    much value to the Indian customer. We are proud to partner
                    with them and help our Mi fans get better exchange value for
                    our phones!
                  </p>
                  <footer class="blockquote-footer">
                    <cite title="Source Title">Mohamed Nady</cite>
                  </footer>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="card border-light bg-light text-center">
                <i
                  class="fa fa-quote-left fa-3x card-img-top rounded-circle"
                  aria-hidden="true"
                >
                  <FaUserCircle size={"40px"} />
                </i>
                <div class="card-body blockquote">
                  <p class="card-text">
                    Purana phone use karke ho gaye ho pareshan? Exchange offer
                    ke liye idhar udhar mat jao. Check Cashify and get the best
                    price for your old phone
                  </p>
                  <footer class="blockquote-footer">
                    <cite title="Source Title">Naveen Sharma</cite>
                  </footer>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="card border-light bg-light text-center">
                <i
                  class="fa fa-quote-left fa-3x card-img-top rounded-circle"
                  aria-hidden="true"
                >
                  <FaUserCircle size={"40px"} />
                </i>
                <div class="card-body blockquote">
                  <p class="card-text">
                    Tried Refurbys for selling devices? It’s very convenient
                    although some people tell me that they get better deal on
                    other classified ad sites. But you’ll also have to be
                    prepared to spend more time and effort for the latter
                  </p>
                  <footer class="blockquote-footer">
                    <cite title="Source Title">Abhishek Baxi</cite>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
