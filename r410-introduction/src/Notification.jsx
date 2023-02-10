import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import useRendersNumber from "./hooks/useRendersNumbers";

function Notification(props) {
  const { data, onDelete } = props;
  const { id, title, content } = data;
  const rendersNumber = useRendersNumber();

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
  onDelete: PropTypes.func.isRequired,
};

export default Notification;
