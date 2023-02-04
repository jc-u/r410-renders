import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

function Notification(props) {
  const { data } = props;
  const { id, title, content } = data;

  return (
    <Card
      className="notification"
      title={
        <>
          [{rendersNumber}] {title}
          <FontAwesomeIcon className="notification-icon" icon={faCircleXmark} />
        </>
      }
      onClick={() => onDelete(id)}
    >
      {content}
    </Card>
  );
}

Notification.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
  }).isRequired,
};

export default Notification;
