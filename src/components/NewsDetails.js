import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCommentsForNews } from '../actions/comments';
import { Link } from 'react-router-dom';
import CommentTree from './CommentTree';
import Button from 'react-bootstrap/Button';

const NewsDetails = ({ match, comments, fetchCommentsForNews }) => {
  const { newsId } = match.params;

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCommentsForNews(newsId);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Детали новости</h1>
      <p>ID новости: {newsId}</p>
      <div>
        <h4>Комментарии:</h4>
        <CommentTree comments={comments} />
      </div>
      <Button onClick={() => fetchCommentsForNews(newsId)}>Обновить комментарии</Button>
      <br />
      <Link to="/"><Button variant="primary">Вернуться к списку новостей</Button></Link>
    </>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments.byNewsId,
});

const mapDispatchToProps = {
  fetchCommentsForNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);