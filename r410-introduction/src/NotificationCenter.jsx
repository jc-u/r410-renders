import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";
import useRendersNumber from "./hooks/useRendersNumbers";
import useShowable from "./hooks/useShowable";

function NotificationsCenter(props) {
  const { notificationsData, onDelete } = props;
  const { isShown, toggleShown } = useShowable(true);
  const rendersNumber = useRendersNumber();
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    if (!isShown) {
      toggleShown();
    }
    setNotifications(
      notificationsData.map((data) => (
        <Notification key={data.id} data={data} onDelete={onDelete} />
      ))
    );
  }, [notificationsData]);

  return (
    <>
      <button
        type="button"
        className="notifiactions-center"
        onClick={toggleShown}
      >
        [{rendersNumber}] {notificationsData.length}{" "}
        {`notification${notificationsData.length > 1 ? "s" : ""}`}
        {notificationsData.length > 0 && ` (${isShown ? "hide" : "show"})`}
      </button>
      {isShown && <div className="notifications">{notifications}</div>}
    </>
  );
}

NotificationsCenter.defaultProps = {
  onDelete: () => {},
};

NotificationsCenter.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.node.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func,
};

export default NotificationsCenter;
