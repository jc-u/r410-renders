import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import useRendersNumber from "../hooks/useRendersNumbers";


function Notification(props) {
  const { data } = props;
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
