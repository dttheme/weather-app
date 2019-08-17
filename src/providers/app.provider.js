import React, { createContext, useState } from "react";

export const AppStateContext = createContext();
const AppStateProvider = props => {
  const [appState, setAppState] = useState({
    cityName: "",
    groupedData: undefined,
    todaysForecast: undefined
  });

  const { children } = props;

  return (
    <AppStateContext.Provider value={[appState, setAppState]}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
