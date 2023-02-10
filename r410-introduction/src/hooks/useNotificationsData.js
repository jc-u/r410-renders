import { useState } from "react";

export default function useNotificationsData() {
  const [lastNotificationId, setLastNotificationId] = useState(0);
  const [notificationsData, setNotificationsData] = useState([]);

  const addNotification = () => {
    const id = lastNotificationId + 1;
    setLastNotificationId(id);
    setNotificationsData([
      {
        id,
        title: `Notifiaction ${String.fromCharCode(
          "A".charCodeAt() + ((id - 1) % 26)
        )}`,
        content: "Content",
      },
      ...notificationsData,
    ]);
  };

  const deleteNotification = (id) => {
    setNotificationsData(notificationsData.filter((data) => data.id !== id));
  };

  return {
    notificationsData,
    addNotification,
    deleteNotification,
  };
}