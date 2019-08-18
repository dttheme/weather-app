import React, { createContext, useState, useEffect } from "react";

export const AppStateContext = createContext();
const AppStateProvider = props => {
  const initialFavs =
    [] || JSON.parse(window.localStorage.getItem("myFavorites"));
  const [appState, setAppState] = useState({
    cityName: "",
    groupedData: undefined,
    todaysWeather: undefined,
    favorites: initialFavs
  });

  // useEffect(() => {
  //   localStorage.setItem("myFavorites", JSON.stringify(appState.favorites));
  // }, [appState.favorites]);

  const { children } = props;

  return (
    <AppStateContext.Provider value={[appState, setAppState]}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
