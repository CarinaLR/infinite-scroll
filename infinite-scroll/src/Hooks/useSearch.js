import { useEffect, useState } from "react";
import axios from "axios";

const useSearch = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pins, setPins] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  //prevent event to append new pins
  useEffect(() => {
    setPins([]);
  }, [query]);

  // fetching and setting data with React hooks
  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    axios({
      method: "GET",
      url: `/api/${query}`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setPins((prevPins) => {
          return [
            ...new Set(
              [...prevPins, ...res.data].map((pin) => [
                pin.board.name,
                pin.pinner.full_name,
                pin.description,
                pin.images.orig.url,
              ])
            ),
          ];
        });
        setHasMore(res.data.length > 0);
        setLoading(false);
        console.log(res.data);
        console.log(
          `in hook loading ${loading}, pins ${pins.length}, hasMore ${hasMore}`
        );
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, pins, hasMore };
};

export default useSearch;
