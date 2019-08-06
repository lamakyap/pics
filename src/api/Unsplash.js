import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 9aa74337867113e7613e9436e48c3a2001dd1c727d39cdd7d1193b223cb07e34'
  }
});
