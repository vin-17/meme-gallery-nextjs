import axios from 'axios';

const redditApi = axios.create({
  baseURL: 'https://www.reddit.com/r/memes.json?limit=1000',
});

export const getMemes = async (after) => {
  try {
    const response = await redditApi.get(`?after=${after}`);
    if (response.error === 403) {
      console.error('Forbidden: Unable to fetch memes. Status code 403.');
      return [];
    }
    // console.log(response.data.data.children);
    return response.data.data.children
    .filter(child => child.data.thumbnail !== "nsfw" && !child.data.is_video)
    .map(child => ({
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
