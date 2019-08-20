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
