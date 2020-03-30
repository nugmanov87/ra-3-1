import React from "react";
import PropTypes from "prop-types";
import Star from "./Star.js";

export default function Stars(props) {
  const { count } = props;
  if (!Number(count) || count < 1 || count > 5) {
    return false;
  }

  const listStars = [];
  for (let i = 0; i < count; i += 1) {
    listStars.push(1);
  }

  return (
    <ul className="card-body-stars u-clearfix">
      {listStars.map(id => (
        <li key={id}>
          {" "}
          <Star />
        </li>
      ))}
    </ul>
  );
}

Stars.defaultProps = {
  count: 0
};

Stars.propTypes = {
  count: PropTypes.number
};
