// services/blogService.js
import axios from 'axios';

const API_URL = 'https://jolzt-cms.onrender.com/api/blogs?populate=*';

export const fetchAllBlogs = async () => {
  const res = await axios.get(API_URL);
  return res.data.data;
};

export const fetchBlogBySlug = async (slug) => {
  const res = await axios.get(`https://jolzt-cms.onrender.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
  return res.data.data[0];
};
