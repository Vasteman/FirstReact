import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <blockquote>
      <cite>{comment.user}</cite>
      <p>{comment.text}</p>
    </blockquote>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
  })
}