import { getItemById } from '../services/api';

export const fetchCommentsForNews = (newsId) => async (dispatch) => {
  try {
    const news = await getItemById(newsId);
    const rootComments = await Promise.all(
      news.kids.map(async (commentId) => {
        const comment = await getItemById(commentId);
        return {
          id: comment.id,
          user: comment.by,
          text: comment.text,
          kids: comment.kids || [],
        };
      })
    );
    dispatch({
      type: 'FETCH_COMMENTS_FOR_NEWS_SUCCESS',
      newsId,
      payload: rootComments,
    });
  } catch (error) {
    console.error(`Error fetching comments for news ${newsId}:`, error);
  }
};