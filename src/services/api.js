import axios from 'axios';
import { BASE_URL } from './constants';

export const getTopStoriesIds = async () => {
  const response = await axios.get(`${BASE_URL}/topstories.json`);
  return response.data;
};

export const getItemById = async (id) => {
  const response = await axios.get(`${BASE_URL}/item/${id}.json`);
  return response.data;
};