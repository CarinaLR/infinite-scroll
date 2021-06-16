import { useEffect, useState, React } from "react";
import axios from "axios";

const useSearch = (query, pageNumber) => {
  // fetching and setting data with React hooks
  useEffect(() => {
    let cancel;
    axios({
      method: "GET",
      url: `/api/${query}`,
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
      });
    return () => cancel();
  }, [query, pageNumber]);

  return null;
};

export default useSearch;
