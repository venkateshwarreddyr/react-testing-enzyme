import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from 'actions/actions';

const CommentBox = ({addComment, fetchComments}) => {
  const [comment, setComment] = useState("");
  const handleSumbit = (e) => {
    e.preventDefault();
    //todo
    addComment(comment)
    setComment("");
  };
  return (
    <div>
      <div>
        <h1>Comment Box</h1>
      </div>
      <form onSubmit={handleSumbit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <button type="submit">add comment</button>
        </div>
      </form>
        <div>
          <button type="button" className='fetch-comments' onClick={fetchComments}>Fetch comment</button>
        </div>
    </div>
  );
};

export default connect(null, actions)(CommentBox);
