import React from "react";
import axios from "axios";

const Home = (props) => {
  // state in our functional component, with React hooks
  const [pins, setPins] = React.useState([]);

  const getData = async () => {
    const { data } = await axios.get("/api");
    setPins(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <section className="text-center mb-4">
        <div className="row wow fadeIn">
          {pins.map((pin) => (
            <div className="col-lg-3 col-md-6 mb-4" key={pin.id}>
              <div className="card">
                <img
                  className="card-img-top images"
                  src="assets/img/blackLogo.png"
                  alt="..."
                ></img>
                <div className="card-body">
                  <p className="card-text">{pin.description}</p>
                </div>
                <label className="card-text">{pin.pinner.full_name}</label>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
