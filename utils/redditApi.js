import axios from 'axios';

const redditApi = axios.create({
  baseURL: 'https://www.reddit.com/r/memes.json?limit=100',
});

let lastFetchedPost = '';

export const getMemes = async () => {
  try {
    const response = await redditApi.get(lastFetchedPost ? `&after=${lastFetchedPost}` : '');
    if (response.status === 403) {
      console.error('Forbidden: Unable to fetch memes. Status code 403.');
      return [];
    }
    console.log(response.data.data.after);
    const memes = response.data.data.children
      .filter(child => child.data.thumbnail !== 'nsfw' && !child.data.is_video)
      .map(child => ({
        id: child.data.id,
        title: child.data.title,
        thumbnail: child.data.thumbnail,
        imageUrl: child.data.url,
        // Ht: child.data.preview.images[0].source.height,
        // Wt: child.data.preview.images[0].source.width,
        Ht: child.data.preview && child.data.preview.images && child.data.preview.images[0].source.height,
        Wt: child.data.preview && child.data.preview.images && child.data.preview.images[0].source.width,
      }));

    
    lastFetchedPost = response.data.data.after;

    return memes;
  } catch (error) {
    console.error('Error fetching memes:', error);
    return [];
  }
};
