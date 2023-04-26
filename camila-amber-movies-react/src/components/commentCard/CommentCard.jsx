import React from "react";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import CustomFormModal from "../customFormModal/CustomFormModal";
import { commentFormInputs } from "./CommentFormInputs";
import { useAuth } from "../../contexts/AuthContext";
import { useSubmit } from "react-router-dom";

const CommentCard = ({ comments, className }) => {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [commentEntry, setCommentEntry] = useState({ title: "", text: "" });
  const auth = useAuth();
  const submit = useSubmit();

  const onSubmitForm = (e) => {
    e.preventDefault();
    submit(e.target, { method: "post" });
    setShowCustomForm(false);
  };

  return (
    <>
      <h3>
        User Comments{" "}
        {auth.user && (
          <Button variant="primary" onClick={() => setShowCustomForm(true)}>
            Write a comment
          </Button>
        )}
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
        onSubmitForm={onSubmitForm}
      />
    </>
  );
};

export default CommentCard;
