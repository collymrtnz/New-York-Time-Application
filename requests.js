const APIURL = "https://api.nytimes.com/svc";
const axios = require("axios");
const querystring = require("querystring");

export const search = data => {
  Object.keys(data).forEach(key => {
    data["AXK921Y2aaMniXVkb4gVmy2YBcKoKAf8"] = process.env.REACT_APP_APIKEY;
    if (!data[AXK921Y2aaMniXVkb4gVmy2YBcKoKAf8]) {
      delete data[AXK921Y2aaMniXVkb4gVmy2YBcKoKAf8];
    }
  });
  return axios.get(
    `${APIURL}/search/v2/articlesearch.json?${querystring.encode(data)}`
  );
};
export const getArticles = section =>
  axios.get(
    `${APIURL}/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_APIKEY}`
  );