import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const CommentTree = ({ comments }) => {
  if (!comments || !comments.length) {
    return null;
  }

  const renderComment = (comment) => {
    return (
      <ListGroup.Item key={comment.id}>
        <strong>{comment.user}:</strong> {comment.text}
        {comment.kids && comment.kids.length > 0 ? (
          <ListGroup variant="flush">
            {comment.kids.map((kid) => renderComment(kid))}
          </ListGroup>
        ) : null}
      </ListGroup.Item>
    );
  };

  return (
    <ListGroup>
      {comments.map((comment) => renderComment(comment))}
    </ListGroup>
  );
};

export default CommentTree;