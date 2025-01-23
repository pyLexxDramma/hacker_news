import { getTopStoriesIds, getItemById } from '../services/api';

export const fetchLatestNews = () => async (dispatch) => {
  try {
    const topStoryIds = await getTopStoriesIds();
    const latestNews = await Promise.all(
      topStoryIds.slice(0, 100).map(async (storyId) => {
        const story = await getItemById(storyId);
        return {
          id: story.id,
          title: story.title,
          author: story.by,
          time: story.time,
        };
      })
    );
    dispatch({ type: 'FETCH_LATEST_NEWS_SUCCESS', payload: latestNews });
  } catch (error) {
    console.error('Error fetching latest news:', error);
  }
};