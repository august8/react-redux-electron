import React, { PropTypes } from 'react';

const Message = ({ count }) => (
  <div>
    {count}
  </div>
);

Message.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Message;
