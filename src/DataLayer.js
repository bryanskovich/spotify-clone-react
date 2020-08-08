import React from 'react';

export const DataLayerContext = React.createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
	<DataLayerContext.Provider value={React.useReducer(reducer, initialState)}>{children}</DataLayerContext.Provider>
);

export const useDataLayerValue = () => React.useContext(DataLayerContext)