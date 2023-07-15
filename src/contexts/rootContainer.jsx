import { createContext, useContext, useEffect, useState } from "react";

const RootContext = createContext();

const RootContainer = ({ children }) => {
  const [data, setData] = useState(false);
  const [globalError, setGlobalError] = useState()

  useEffect(() => {
    if(!data) getData()
  });

    const getData = async () => {
      const response = await fetch('./data/dataset.json')
      .then(response => response.json())
      setData(response);
    }

    return (
      <RootContext.Provider value={{ data: data}}>
        {children}
      </RootContext.Provider>
    );

};

export const useRootContext = () => {
  return useContext(RootContext);
};

export default RootContainer;