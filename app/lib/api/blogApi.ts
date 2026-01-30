import axiosInstance from "../axios";
import { ApiResponse } from "../types";



export const fetchBlogs = async () => {
  const res = await axiosInstance.get<ApiResponse>(
    "/sample-data/blog-posts?offset=0&limit=10"
  );

  return res.data.blogs;
};
