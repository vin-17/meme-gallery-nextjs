// import axios from 'axios';

// const redditApi = axios.create({
//   baseURL: 'https://www.reddit.com/r/memes.json',
// });

// export const getMemes = async (after) => {
//   try {
//     const response = await redditApi.get(`?after=${after}`);
//     return response.data.data.children.map(child => ({
//       id: child.data.id,
//       title: child.data.title,
//       thumbnail: child.data.thumbnail,
//       imageUrl: child.data.url,
//     }));
//   } catch (error) {
//     console.error('Error fetching memes:', error);
//     return [];
//   }
// };

import axios from 'axios';

const redditApi = axios.create({
  baseURL: '/api/r/memes.json',
});

export const getMemes = async (after) => {
  try {
    const response = await redditApi.get(`?after=${after}`);
    return response.data.data.children.map(child => ({
      id: child.data.id,
      title: child.data.title,
      thumbnail: child.data.thumbnail,
      imageUrl: child.data.url,
      Ht: child.data.preview.images[0].source.height,
      Wt: child.data.preview.images[0].source.width,
    }));
  } catch (error) {
    console.error('Error fetching memes:', error);
    return [];
  }
};