import { useState } from "react";
import axios from "axios";
import useInfScroll from "../Hooks/useInfScroll";

const Home = () => {
  // state in our functional component, with React hooks
  const { loading, error, pins, hasMore } = useInfScroll();
  console.log("pins", pins);

  return (
    <div className="container">
      <section className="text-center mb-4">
        <div className="row wow fadeIn">
          {pins.map((pin) => (
            <div className="col-lg-3 col-md-6 mb-4" key={pin[4]}>
              <div className="card">
                <img
                  className="card-img-top images"
                  src={pin[3]}
                  alt="..."
                ></img>
                <div className="card-body">
                  <p className="card-text">{pin[2]}</p>
                </div>
                <label className="card-text">
                  <strong>{pin[1]}</strong>
                </label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
