import React, { createContext, useState, useEffect } from "react";

export const AppStateContext = createContext();
const AppStateProvider = props => {
  const [appState, setAppState] = useState({
    cityName: "",
    cityLatLong: [],
    groupedData: undefined,
    todaysWeather: undefined,
    favorites: JSON.parse(window.localStorage.getItem("myFavorites"))
  });

  useEffect(() => {
    console.log(appState.favorites);
    localStorage.setItem("myFavorites", JSON.stringify(appState.favorites));
  }, [appState]);

  const { children } = props;

  return (
    <AppStateContext.Provider value={[appState, setAppState]}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
