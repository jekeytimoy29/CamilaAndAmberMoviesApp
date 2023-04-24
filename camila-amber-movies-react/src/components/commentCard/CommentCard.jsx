import React from "react";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import CustomFormModal from "../customFormModal/CustomFormModal";
import { commentFormInputs } from "./CommentFormInputs";

const CommentCard = ({ comments, className }) => {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [commentEntry, setCommentEntry] = useState({ title: "", text: "" });

  return (
    <>
      <h3>
        User Comments{" "}
        <Button variant="primary" onClick={() => setShowCustomForm(true)}>
          Write a comment
        </Button>
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
      <CustomFormModal
        title="Add Comment"
        show={showCustomForm}
        onHide={() => {
          setShowCustomForm(false);
        }}
        data={commentEntry}
        setData={setCommentEntry}
        inputs={commentFormInputs}
      />
    </>
  );
};

export default CommentCard;
