import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <div>
    <h3>User: </h3>
    <p className="user__name">{user.name}</p>
    <div>
      <span className="bold-font">User-email: </span>
      {user.email}
    </div>
    <address>
      <span className="bold-font">User-address: </span>
      {`${user.address.suite},
       ${user.address.street},
       ${user.address.city}`
      }
    </address>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.shape({
      suite: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default User;
