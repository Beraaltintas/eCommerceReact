import { createContext, useContext, useEffect, useState } from "react";

const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/information`);
        if (response.ok) {
          const data = await response.json();
          setInfo(data);
        } else {
          console.error("Failed to fetch info");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchInfo();
  }, [apiUrl]);

  return (
    <InfoContext.Provider value={info}>
      {children}
    </InfoContext.Provider>
  );
};

export const useInfo = () => useContext(InfoContext);
