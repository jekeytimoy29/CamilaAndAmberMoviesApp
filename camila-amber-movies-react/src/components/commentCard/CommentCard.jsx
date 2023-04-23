import React from "react";
import { Button, Card } from "react-bootstrap";

const CommentCard = ({ comments, className }) => {
  return (
    <>
      <h3>
        User Comments <Button variant="primary">Write a comment</Button>
      </h3>
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <Card key={index} className={className}>
            <Card.Header as="h5">{comment.title}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {comment.text} </p>
                <br />
                <p className="blockquote-footer">{comment.name}</p>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default CommentCard;
