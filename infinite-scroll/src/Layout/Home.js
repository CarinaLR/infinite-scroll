import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props) => {
  // state in our functional component, with React hooks
  const [pins, setPins] = React.useState([]);

  const getData = async () => {
    const { data } = await axios.get("/api");
    console.log("data =>", data);
    setPins(data);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="d-flex flex-column">
      <div id="container text-center mb-4">
        <div className="row">
          <InfiniteScroll
            dataLength={pins.length}
            next={getData}
            hasMore={true}
            loader={<h3>Loading...</h3>}
          >
            {pins.map((pin) => (
              <div className="col-md-6 mb-4" key={pin.id}>
                <div className="card" key={pin.id}>
                  <img
                    className="card-img-top img-size-card"
                    src={pin.images.orig}
                    alt="..."
                  ></img>
                  <div classNAme="card-body">
                    <h4>{pin.board.name}</h4>
                    <p className="card-text">{pin.description}</p>
                  </div>
                  <label className="card-text">{pin.pinner.full_name}</label>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Home;
