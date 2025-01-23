import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchLatestNews } from '../actions/news';
import NewsItem from './NewsItem';
import Button from 'react-bootstrap/Button';

const HomePage = ({ latestNews, fetchLatestNews }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      fetchLatestNews();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Hacker News</h1>
      <ul className="list-unstyled">
        {latestNews.map((item) => (
          <li key={item.id}>
            <NewsItem item={item} />
          </li>
        ))}
      </ul>
      <Button onClick={() => fetchLatestNews()}>Обновить вручную</Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  latestNews: state.news.latestNews,
});

const mapDispatchToProps = {
  fetchLatestNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);