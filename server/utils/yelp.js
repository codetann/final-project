import axios from "axios";
import { _parse } from "./parse";
import testData from "../tests/data.json";
require("dotenv").config();

class Yelp {
  constructor() {
    // base url
    this.url = "https://api.yelp.com/v3/businesses/search";
    // auth headers
    this.headers = {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      "Content-type": "application/json",
    };
  }

  async test() {
    // return static yelp data
    return _parse(testData);
  }

  async search(data) {
    // deconstruct data
    const { lat, long, radius, limit } = data;
    // create query to search for
    const query = `?latitude=${lat}&longitude=${long}&radius=${radius}&limit=${limit}`;
    // send req to yelp with auth headers
    const res = await axios.get(this.url + query, { headers: this.headers });
    // return parsed yelp data
    return _parse(res.data);
  }

  async nearby(data) {
    // deconstruct / set data
    const limit = 30;
    const { lat, long } = data;
    const radius = Math.floor(25 * 1609.344);
    // create query to search for
    const query = `?latitude=${lat}&longitude=${long}&radius=${radius}&limit=${limit}`;
    // send req to yelp with auth headers
    const res = await axios.get(this.url + query, { headers: this.headers });
    // return parsed yelp data
    return _parse(res.data);
  }
}

export const yelp = new Yelp();
