import React, { createContext, useEffect, useState } from "react";

export const AppStateContext = createContext();
const AppStateProvider = props => {
  const [appState, setAppState] = useState({
    cityName: "",
    cityLatLong: [],
    groupedData: undefined,
    todaysWeather: undefined,
    favorites: JSON.parse(window.localStorage.getItem("myFavorites"))
  });

  // If state changes, set localStorage myFavorites to appState.favorites
  useEffect(() => {
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
