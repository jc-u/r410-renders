import React from "react";
import PropTypes from "prop-types";
import useRendersNumber from "./hooks/useRendersNumbers";

function NotificationsCenter(props) {
  const { notificationsData } = props;
  const rendersNumber = useRendersNumber();

  return (
    <>
     [{rendersNumber}] {notificationsData.length} notification
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
