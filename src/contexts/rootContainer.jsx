import { createContext, useContext, useEffect, useState } from "react";

const RootContext = createContext();

const RootContainer = ({ children }) => {
  const [data, setData] = useState(false);
  const [activeSet, setActiveSet] = useState(false)
  const [working, setWorking] = useState(false)

  useEffect(() => {
    if (!data) getData()
  });

  const getData = async () => {
    try {
      const response = await fetch('./data/dataset.json')
        .then(response => response.json())
      setData(response);
      localStorage.setItem('data', JSON.stringify(data));
    }
    catch (ex) {
      console.log(ex)

      const savedData = localStorage.getItem('data');
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        setData(parsedData);
      }

    }

  }

  return (
    <RootContext.Provider value={{ data: data, activeSet: activeSet, setActiveSet: setActiveSet, working: working, setWorking: setWorking }}>
      {children}
    </RootContext.Provider>
  );

};

export const useRootContext = () => {
  return useContext(RootContext);
};

export default RootContainer;