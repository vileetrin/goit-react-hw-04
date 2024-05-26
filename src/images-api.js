import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com/';

export const getImages = async (setSearchQuery, setPage) => {
  try {
    const response = await axios.get(`/search/photos`, {
      params: {
        query: setSearchQuery,
        client_id: 'm_K01cii-BUQmR4D9VWUaseuagq3NK4f-4H_DOjbFdk',
        page: setPage,
        per_page: 12,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};
