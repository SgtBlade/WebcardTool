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
    const response = await fetch(process.env.REACT_APP_API_URL)
      .then(response => response.json())
    setData(response);
    }
    catch(ex) {
      console.log(ex)
    }

  }

  return (
    <RootContext.Provider value={{ data: data , activeSet: activeSet, setActiveSet: setActiveSet,working:working,setWorking:setWorking}}>
      {children}
    </RootContext.Provider>
  );

};

export const useRootContext = () => {
  return useContext(RootContext);
};

export default RootContainer;