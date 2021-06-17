import React, { useState, useEffect, useRef, useCallback } from "react";
import useInfScroll from "../Hooks/useInfScroll";

const Home = () => {
  const [items, setItems] = useState(0);
  const [reLoading, setReLoading] = useState(false);
  const [newPins, setNewPins] = useState([]);
  //state in our functional component, with React hooks
  const { loading, error, pins, hasMore } = useInfScroll();

  //setting the state for the number of items
  useEffect(() => {
    setItems(pins.length);
  }, [pins.length]);

  //setting the state for the elements to show
  useEffect(() => {
    setNewPins([...pins]);
  }, [pins]);

  //the function triggers infinite scroll adding new items to our array of pins, waiting a certain time to reload them, and display them into the DOM.
  const loadMore = () => {
    setReLoading(true);
    setTimeout(() => {
      setItems(pins.length + newPins.length);
      setNewPins([...newPins, ...pins]);
      setReLoading(false);
    }, 10000);
  };

  const observer = useRef(); //by default is undefined
  const lastPin = useCallback(
    (node) => {
      if (loading) return;
      //current is a variable property in observer for each iteration
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          //shows when the last element gets visible, bottom of page
          console.log("VISIBLE", hasMore);
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="container">
      <section className="text-center mb-4">
        <div className="row wow fadeIn">
          {newPins.map((pin, index) => {
            if (pins.length === index + 1) {
              return (
                <div
                  className="col-lg-3 col-md-6 mb-4"
                  ref={lastPin}
                  key={index}
                >
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
              );
            } else {
              return (
                <div
                  className="col-lg-3 col-md-6 mb-4"
                  ref={lastPin}
                  key={index}
                >
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
              );
            }
          })}
        </div>
      </section>

      <div>{reLoading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </div>
  );
};

export default Home;
