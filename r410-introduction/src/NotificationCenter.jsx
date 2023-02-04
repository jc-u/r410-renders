import React from "react";
import PropTypes from "prop-types";


function NotificationsCenter(props) {
  const { notificationsData } = props;

  return (
    <>
     {notificationsData.length} notification
    </>
  );
}

NotificationsCenter.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default NotificationsCenter;
