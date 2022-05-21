import axios from 'axios';

const KEY = 'AIzaSyDRJrO7JANS_xNwIlwsxMZbtSTshz3jzUo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
