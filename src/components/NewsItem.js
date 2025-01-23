import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const NewsItem = ({ item }) => {
  return (
    <Link to={`/${item.id}`}>
      <Card style={{ marginBottom: '10px' }}>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            Автор: {item.author}, дата: {new Date(item.time * 1000).toLocaleString()}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default NewsItem;