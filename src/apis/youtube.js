import axios from "axios";

const key = "AIzaSyC969CXFBh07yofP3Z0X7ilUFlgA4NAq50";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 50,
    key,
  },
});
