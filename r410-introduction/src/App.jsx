import React, { useState } from "react";
import Cards from "./Cards";
import NotificationsCenter from "./NotificationCenter";
import cardsData from "./constants/cardsData";
import useNotificationsData from "./hooks/useNotificationsData";
import useRendersNumber from "./hooks/useRendersNumbers";

function App() {
  const { notificationsData, addNotification, deleteNotification } =
    useNotificationsData();
  const rendersNumber = useRendersNumber();
  const [dummy, setDummy] = useState(0);

  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">
          [{rendersNumber}] Introduction to React
        </h1>
      </header>
      <main className="app__main">
        <button className="btn" type="button" onClick={addNotification}>
          Add a notification
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setDummy(dummy + 1)}
        >
          {dummy}
        </button>
        <Cards cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">
        <NotificationsCenter
          notificationsData={notificationsData}
          onDelete={deleteNotification}
        />
      </footer>
    </div>
  );
}

export default App;
