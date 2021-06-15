import React from "react";
import axios from "axios";

const Home = (props) => {
  // state in our functional component, with React hooks
  const [pins, setPins] = React.useState([]);

  const url = "http://localhost:8080/api";

  const getData = async () => {
    const { data } = await axios.get(url);
    setPins(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log("data =>", props);

  return (
    <div>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="container text-center mb-4">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="assets/img/blackLogo.png"
                  alt="..."
                ></img>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
