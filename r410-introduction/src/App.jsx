import React from 'react';
import Cards from './Cards';
import cardsData from "./constants/cardsData";
import useNotificationsData from "./hooks/useNotificationsData";


function App() {
  const { notificationsData, addNotification } = useNotificationsData();
  return (
    <div className="app">
      <header className="app__header header">
        <h1 className="header__title">Introduction to React</h1>
      </header>
      <main className="app__main"> 
      <button className="btn" type="button" onClick={addNotification}>
          Add a notification
      </button>
        <Cards cardsData={cardsData} />
      </main>
      <footer className="app__footer footer">
      {notificationsData.length} notification</footer>
    </div>
  );
}

export default App;